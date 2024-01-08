/*  DISCLAIMER: I literally do not know what I'm doing... yet!
 *  Driver exports:
 *    1.  initDriver({uri, user, password})
 *    2.  getDriver()
 *    3.  setDriver()
 *    4.  closeDriver()
*/
import neo4j from 'neo4j-driver'
import { users } from './src/data/users';
const DATABASE = process.env.NEO4J_DBMS
// Launch Aura DB
export async function initDriver({NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD}) {
  // Create Driver
  let driver
  try {
    driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD))
    const serverInfo = await driver.getServerInfo()
    console.log('Connection estabilished')
    console.log(serverInfo)
  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
    await driver.close()
    return
  }
  await driver.verifyConnectivity()
  return driver
};

export const getDriver = () => {
  // Pass environment configs as params
  return initDriver({
    NEO4J_URI: process.env.NEO4J_URI, 
    NEO4J_USER: process.env.NEO4J_USER, 
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD
  });
};

export async function setDriver() {
  let driver
  try { 
    driver = getDriver()
    const serverInfo = await driver.getServerInfo()
    console.log('Connection estabilished')
    console.log(serverInfo)
  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
    await driver.close()
    return
  }
  // Create some nodes
  for(let user of users) {
    // CREATE
    await driver.executeQuery(
      'MERGE (u:User {name: $user.username, joined: $user.joinDate})',
      { user: user },
      { database: DATABASE }
    )
    // VERIFY
    await driver.executeQuery(
      'MATCH (u:User {username: $user.username}) RETURN u.username, u.joinDate, u.friends',
      { user: user },
      { database: DATABASE }
    )
  }
  // Create some relationships
  for(let user of users) {
    if(user.friends !== undefined) {
      await driver.executeQuery(`
        MATCH (u:User {name: $user.username})
        UNWIND $user.friends AS friendName
        MATCH (friend:User {name: friendName})
        MERGE (u)-[:KNOWS]->(friend)
        `, 
        { user: user },
        { database: DATABASE }
      )
    }
  }
}

export async function closeDriver() {
  let driver
  try { 
    driver = getDriver()
    await driver.close()
    console.log('Connection Closed')
    return
  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
    await driver.close()
    return
  }
}
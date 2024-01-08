var neo4j = require('neo4j-driver');
import { users } from './src/data/users';
/*
 *  Driver exports:
 *    1.  initDriver({uri, user, password})
 *    2.  getDriver()
 *    3.  setDriver()
 *    4.  closeDriver()
*/
// Launch Aura DB
export async function initDriver({uri, user, password}) {
  // Import environment configs
  const URI = process.env.NEO4J_URI
  const USER = process.env.NEO4J_USERNAME
  const PASSWORD = process.env.NEO4J_PASSWORD
  // Create Driver
  let driver
  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
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
  //await driver.close()
};

export const getDriver = () => {
  // Import environment configs
  const URI = process.env.NEO4J_URI
  const USER = process.env.NEO4J_USERNAME
  const PASSWORD = process.env.NEO4J_PASSWORD
  return initDriver({uri:URI, user:USER, password:PASSWORD})
} 

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
      { database: 'neo4j' }
    )
    // VERIFY
    await driver.executeQuery(
      'MATCH (u:User {username: $user.username}) RETURN u.username, u.joinDate, u.friends',
      { user: user },
      { database: 'neo4j' }
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
        { database: 'neo4j' }
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
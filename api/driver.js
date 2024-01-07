var neo4j = require('neo4j-driver');
import { users } from './src/data/users';
// Launch Aura DB
(async () => {
  // Import environment configs
  const URI = process.env.NEO4J_URI
  const USER = process.env.NEO4J_USERNAME
  const PASSWORD = process.env.NEO4J_PASSWORD
  let driver
  // Create Driver
  try {
    driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
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
  //await driver.close()
})();
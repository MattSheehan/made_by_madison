var neo4j = require('neo4j-driver');
import { users } from './src/data/users';

(async () => {
  const URI = process.env.NEO4J_URI
  const USER = process.env.NEO4J_USERNAME
  const PASSWORD = process.env.NEO4J_PASSWORD
  let driver

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

  // Retrieve Madison's friends who joined after her
  await driver.executeQuery(`
  MATCH (u:User {username: $username})-[:KNOWS]-(friend:User)
  WHERE friend.joinDate LIKE $joinDate
  RETURN friend
  `, 
  { username: users[0].usernanme, joinDate: '01-07-2024' },
  { database: 'neo4j' }
  )

})();
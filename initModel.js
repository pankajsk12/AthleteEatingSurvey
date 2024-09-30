const mysql = require('mysql2/promise');
let mysqlCon;
 const config = {};
 config.mysql = {    host: 'localhost',
    port: 3306,
    database : "athleteSurvey",
    user : "root",
    password : "Secure@3"
  }
async function initModel(){
 try {
  mysqlCon = await mysql.createConnection(config.mysql)

  console.log("Connected to DB")

  return mysqlCon;
 } catch (error) {
    throw error;
 }
}
 
function getConnection(){
  return mysqlCon;
}
 
module.exports = {getConnection,initModel};
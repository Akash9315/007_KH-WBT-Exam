const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wbtexam",
};

const addMessage = async (message) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into message values (?)`;
  connection.queryAsync(sql, [message.messagebody]);
  console.log("Message added sucessfully");
  await connection.endAsync();
};

const message = {
  messagebody: "Hi, How Are You!!!",
};

//addMessage(message);

const readMessages = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from message`;
  const list = await connection.queryAsync(sql);
  console.log(list);

  await connection.endAsync();
  return list;
};

readMessages();

module.exports = { addMessage, readMessages };

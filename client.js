const net = require("net");
const {IP, PORT} = require("./constants");



// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect",function(){
    console.log("You're connected")
    conn.write("Name: RBS")
    //.conn.write("Move: up")

  })

  return conn;
};


module.exports =  connect;


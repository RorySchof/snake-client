const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541"// PORT number here,
  });

  //$(selector).on(event,childSelector,data,function,map)
// console.log(You're connected"
//Name: RBS

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect",function(){
    console.log("You're connected")
    conn.write("Name: RBS")
    conn.write("Move: up")

  })

  return conn;
};


module.exports =  connect 


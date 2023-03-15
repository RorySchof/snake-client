let connection;


const handleUserInput = function (key) {
console.log("key", key)
 /* if (key == '\u0003') {
    console.log("handle user input")
    process.exit()
    }
    */

    if (key === 'w') {
      console.log("Move: up")}
    
      if (key === 'a') {
        console.log("Move: left")}
    
        if (key === 's') {
          console.log("Move: right")}
    
           if (key === 'w') {
            console.log("Move: down")}

            if (key === 'r') {
              console.log("You won the lottery")}

              if (key === 't') {
                console.log("Hello World")}


    
};


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput
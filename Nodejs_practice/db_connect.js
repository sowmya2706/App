const oracledb = require("oracledb");
exports.connect=async  function connect()

{
    let connection;
    
    try {
        connection = await oracledb.getConnection({
              user: "project",
              password: "project",
              connectionString:"localhost:1521/ORCL",
        });

        console.log("\nnode-oracledb driver version is " + oracledb.versionString);

        console.log("\nOracle client version is " + oracledb.oracleClientVersionString + "\n");

    }
catch (err) {

    console.error(err);

}

  //console.log("\nBye");

return connection;
}

//module.exports={connect};
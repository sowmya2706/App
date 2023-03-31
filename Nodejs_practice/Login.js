const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.usernamecheck=async function usernamecheck(value) {
    let a=[];
    let connection;
    
    let msg;
    console.log("printing here",value);
    let val1=value.USERNAME;
    console.log("printing only username",val1);
    try{
        connection= await dbcon.connect();
        usercheck = await connection.execute(
            "select USERNAME from login ",
            [],
            {
                resultSet: true,
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }
        );
        console.log('result:',usercheck);
        let rs = usercheck.resultSet;

        let rowforpo;
        while ((rowforpo = await rs.getRow())) {
              console.log("row for po",rowforpo);
            a.push(rowforpo)
        }
        console.log("a value is",a);
        await rs.close();
     
      
        for (i=0; i<a.length; i++){
            // let isPresent= a[i].includes(val1) ? 'yes':'no';
            // console.log('is Present',isPresent);;
            console.log("inside for",typeof(a[i]));
            console.log("type",typeof(val1));
            if(a[i].USERNAME==val1)
            {
              console.log("inside if")
              msg="already exists";
              return msg;
              //break;
              
            }
            else{
                continue;
            }

        }
            
                
                userinsert = await connection.execute(
                    "Insert into login (USERNAME,PASSWORD) values (:USERNAME,:PASSWORD)",
                     
                    [value.USERNAME,value.PASSWORD],
                    {
                        autoCommit: true,
                      
                    }
                );
                let msg1="s";
                return msg1;
            }

        

        //return a ;
   catch (err) {

        console.error(err);
        throw err;
  }
  finally {
  
    if (connection) {
          try {
          await connection.close();
          } catch (err) {
           
          console.error(err);
          }
    }
  }
  }
  exports.userexist=async function userexist(value) {
    let a=[];
    let connection;
    console.log("printing in",value);
    let val1=value.username;
    let val2=value.password;
    try{
        connection= await dbcon.connect();
        ch=await connection.execute(
            `SELECT COUNT(1)as count FROM login where USERNAME='${val1}' and PASSWORD='${val2}'`,
            [],
            {
                resultSet: true,
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );
        console.log('resultfor item:',ch);

       let rsi = ch.resultSet;

        let row;
        while ((row = await rsi.getRow())) {
              console.log(row);
            a.push(row)
        }
        console.log("data is",a[0].COUNT);
        await rsi.close();
        if(a[0].COUNT==0){
            return "the user doesnt exist"
        }
        else{
            return "Login";
        }
       

        
  } catch (err) {

        console.error(err);
  }
   finally {

if (connection) {
      try {
      await connection.close();
      } catch (err) {
      console.error(err);
      }
}

}
  }

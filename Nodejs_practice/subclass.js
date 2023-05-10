const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.getclassforsubclass=async function getclassforsubclass()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result = await connection.execute(
              "select CLASS_NO from CLASS",
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('result:',result);

        rs = result.resultSet;

        let row1;
        while ((row1 = await rs.getRow())) {
              console.log(row1);
            a.push(row1)
        }
        console.log("",a);
        await rs.close();

        return a ;
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
exports.getchecksubclassno=async function getchecksubclassno(SUB_CLASS_NO)
{
  console.log("insisde getcheck",SUB_CLASS_NO);
  let connection;
  let query=`select count(1) from SUBCLASS where SUB_CLASS_NO='${SUB_CLASS_NO}'`;
  console.log(query)
  try{
        connection=await dbcon.connect(); 
        checkresult=await connection.execute(
                   query,
                   [],{
                    //resultSet:true,
                  // outFormat:oracledb.OUT_FORMAT_OBJECT checking result checkresultn bdbjdn
                   }
  
              );
              console.log("checking result value is",checkresult);
              console.log(checkresult.rows[0][0]);
              

              return checkresult.rows[0][0];
  }
  catch (err) {

        console.error(err);
      //  return err;
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
exports.subclasscreate=async function subclasscreate(value)
{
console.log(value)
let sno=value.SUB_CLASS_NO;
let sna=value.SUB_CLASS_NAME;
let clas=value.CLASS;

console.log(sno,sna,clas)


let connection;
try {
  connection=await dbcon.connect();

  resultitem = await connection.execute(
      "insert into SUBCLASS(SUB_CLASS_NO,SUB_CLASS_NAME,CLASS_NO) values(:SUB_CLASS_NO,:SUB_CLASS_NAME,:CLASS_NO)",
        [sno,sna,clas]
        , {
        
        autoCommit: true,
            
                
                  }
                  
            );
  console.log('resultfor item:',resultitem);

 
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
exports.getsubclassview=async function getsubclassview() {
      
    let a=[];
  
  
    let connection;
    try {
          
  
          connection=await dbcon.connect();
         
  
  
          result = await connection.execute(
                "select * from SUBCLASS",
                [], {
                resultSet: true,
                outFormat: oracledb.OUT_FORMAT_OBJECT
              
                }
               
          );
      
          console.log('result:',result);
  
          rs = result.resultSet;
  
          let row;
          while ((row = await rs.getRow())) {
                console.log(row);
              a.push(row)
          }
          console.log("",a);
          await rs.close();
  
          return a ;
    } catch (err) {
  
          console.error(err);
        //  return err;
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
  
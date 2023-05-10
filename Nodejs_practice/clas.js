const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.getdeptforclass=async function getdeptforclass()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result = await connection.execute(
              "select DEP_NO from department",
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
exports.getcheckclassno=async function getcheckclassno(CLASS_NO)
{
  console.log("insisde getcheck",CLASS_NO);
  let connection;
  let query=`select count(1) from CLASS where CLASS_NO='${CLASS_NO}'`;
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
exports.classcreate=async function classcreate(value)
{
console.log(value)
let cno=value.CLASS_NO;
let cna=value.CLASS_NAME;
let dept=value.DEPT;

console.log(cno,cna,dept)


let connection;
try {
  connection=await dbcon.connect();

  resultitem = await connection.execute(
      "insert into CLASS(CLASS_NO,CLASS_NAME,DEP_NO) values(:CLASS_NO,:CLASS_NAME,:DEP_NO)",
        [cno,cna,dept]
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
exports.getclassview=async function getclassview() {
      
    let a=[];
  
  
    let connection;
    try {
          
  
          connection=await dbcon.connect();
         
  
  
          result = await connection.execute(
                "select * from CLASS",
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
  
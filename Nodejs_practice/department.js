const { autoCommit } = require("oracledb");
const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.deptcreate=async function deptcreate(value)
{
console.log(value)
let dno=value.DEPT_NO;
let dna=value.DEPT_NAME;
console.log(dno,dna)


let connection;
try {
  connection=await dbcon.connect();

  resultitem = await connection.execute(
      "insert into department(DEP_NO,DEP_NAME) values(:DEP_NO,:DEP_NAME)",
        [dno,dna]
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
exports.getcheckdeptno=async function getcheckdeptno(deptno)
{
  console.log("insisde getcheck",deptno);
  let connection;
  let query=`select count(1) from department where DEP_NO='${deptno}'`;
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
exports.getdeptview=async function getdeptview() {
      
  let a=[];


  let connection;
  try {
        

        connection=await dbcon.connect();
       


        result = await connection.execute(
              "select * from department",
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

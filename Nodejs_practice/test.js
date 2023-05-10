const { autoCommit } = require("oracledb");
const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
console.log("db ini item");
exports.getcheck=async function getcheck(ITEM)
{
      console.log("insisde getcheck",ITEM);
     // let a=[];
      let connection;
      let query=`select count(1) from item where item='${ITEM}'`;
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
exports.getchecksup=async function getchecksup(ITEM)
{
      console.log("insisde getcheck for supplier",ITEM);
     // let a=[];
      let connection;
      let query=`select count(1) from SUPPLIER where SUPPLIER='${ITEM}'`;
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
//oracledb.initOracleClient();
//get function method
exports.get=async function get() {
      
      let a=[];


      let connection;
      try {
            

            connection=await dbcon.connect();
           


            result = await connection.execute(
                  "select * from ITEM order by SUPPLIER",
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
exports.getsupplierforitem=async function getsupplierforitem() {
      
      let a=[];


      let connection;
      try {
            

            connection=await dbcon.connect();
           


            result = await connection.execute(
                  "select SUPPLIER from SUPPLIER order by SUPPLIER",
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
exports.getdeptforitem=async function getdeptforitem() {
      
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

//module.exports={get};
//module.exports.run=run;

//post function method*/


exports.getclassforitem=async function getclassforitem(value)
{
      console.log("inside getitempo",(value));
      let dep=value.department;
     
 
      console.log(dep);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resultitem = await connection.execute(
            `select class_no from class where DEP_NO='${dep}'`,
            //   `select ITEM from ITEM where SUPPLIER='${ff}'`,
             
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('resultfor item:',resultitem);

        rsi = resultitem.resultSet;

        let row;
        while ((row = await rsi.getRow())) {
              console.log(row);
            a.push(row)
        }
        console.log("dsta is",a);
        await rsi.close();

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
exports.getsubclassforitem=async function getsubclassforitem(value)
{
      console.log("inside getitem sub class",(value));
      let dep=value.classno;
     
 
      console.log(dep);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resultitem = await connection.execute(
            `select SUB_CLASS_NO from SUBCLASS where CLASS_NO='${dep}'`,
            //   `select ITEM from ITEM where SUPPLIER='${ff}'`,
             
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('resultfor item:',resultitem);

        rsi = resultitem.resultSet;

        let row;
        while ((row = await rsi.getRow())) {
              console.log(row);
            a.push(row)
        }
        console.log("dsta is",a);
        await rsi.close();

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

exports.post=async function post(value) {
      console.log("print");
     // console.log(value.username,value.password);
     
     var mydate1=("sysdate")
     console.log("dateeeeeee",mydate1)
    //console.log( "the value is",mydate,value.CREATE_DATETIME);
      

      // Get the TNS service name from the $SVC_NAME environment variable
      //const svcName = process.env.SVC_NAME;

      try {
            

            
            connection= await dbcon.connect();
            result = await connection.execute(
                 // "insert into ITEM (ID,NAME)values(:ID, :NAME)",
                  `insert into ITEM (ITEM,STATUS,SUPPLIER, ITEM_DESCRIPTION, FORECAST_IND,SELLABLE_IND ,ORDERABLE_IND ,COMMENTS ,INVENTORY_IND ,CREATE_USERNAME , CREATE_DATETIME,DEPARTMENT,CLASS,SUBCLASS,UNIT_COST )  values(:ITEM,:STATUS , :SUPPLIER, :ITEM_DESCRIPTION,:FORECAST_IND,:SELLABLE_IND ,:ORDERABLE_IND ,:COMMENTS ,:INVENTORY_IND ,:CREATE_USERNAME,${mydate1},:DEPARTMENT,:CLASS,:SUBCLASS,:UNIT_COST)`,
                  [value.ITEM , value.STATUS , value.SUPPLIER, value.ITEM_DESCRIPTION,value.FORECAST_IND,value.SELLABLE_IND ,value.ORDERABLE_IND ,value.COMMENTS ,value.INVENTORY_IND ,value.CREATE_USERNAME,value.DEPARTMENT,value.classde,value.subclassde,value.UNIT_COST],{
                 // [value.username,value.password], {
                
                 autoCommit: true,
                
                  }
            );

            console.log(result);
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

//module.exports={post};
//module.exports.run=run;
//SELECTING STATEMENTS WHEN CONDITION IS GIVEN
//"select * from trail where = :ID;"
//[value.ID], { */                             
//use only one parameter if one is required

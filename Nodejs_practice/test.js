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
                  "select * from ITEM",
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
                  "select SUPPLIER from SUPPLIER",
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
                  `insert into ITEM (ITEM,STATUS,SUPPLIER,UNIT_COST, ITEM_DESCRIPTION, PRICE,FORECAST_IND,SELLABLE_IND ,ORDERABLE_IND ,COMMENTS ,INVENTORY_IND ,CREATE_USERNAME , CREATE_DATETIME  )  values(:ITEM,:STATUS , :SUPPLIER, :UNIT_COST,:ITEM_DESCRIPTION, :PRICE,:FORECAST_IND,:SELLABLE_IND ,:ORDERABLE_IND ,:COMMENTS ,:INVENTORY_IND ,:CREATE_USERNAME,${mydate1} )`,
                  [value.ITEM , value.STATUS , value.SUPPLIER,value.UNIT_COST, value.ITEM_DESCRIPTION, value.PRICE,value.FORECAST_IND,value.SELLABLE_IND ,value.ORDERABLE_IND ,value.COMMENTS ,value.INVENTORY_IND ,value.CREATE_USERNAME ],{
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

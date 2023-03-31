const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
console.log("db ini supp");
//oracledb.initOracleClient();
//get function method

exports.getcheck=async function getcheck(SUPPLIER)
{
      console.log(SUPPLIER);
     // let a=[];
      let connection;
      let query=`select count(1) from SUPPLIER where SUPPLIER='${SUPPLIER}'`;
      console.log(query)
      try{
            connection=await dbcon.connect(); 
            checkresult=await connection.execute(
                       query,

                       [],{
                        //resultSet:true,
                      // outFormat:oracledb.OUT_FORMAT_OBJECT
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
exports.get=async function get() {
      
      let a=[];

      // Get the TNS service name from the $SVC_NAME environment variable
      //const svcName = process.env.SVC_NAME;
      let connection;
      try {
            

            connection=await dbcon.connect();

            result = await connection.execute(
                  "select * from SUPPLIER",
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
      console.log("print",value);
     

      try {
            

            
            connection= await dbcon.connect();
            result = await connection.execute(
                 // "insert into ITEM (ID,NAME)values(:ID, :NAME)",
                 "insert into SUPPLIER (SUPPLIER,SUP_NAME,CONTACT_NAME,CONTACT_PHONE,SUP_STATUS ,FREIGHT_TERMS,HANDLING_PCT,SHIP_METHOD,PAYMENT_METHOD , FREIGHT_CHARGE_IND , PREPAY_INVC_IND , BACKORDER_IND,VAT_REGION,COMMENT_DESC  )values(:SUPPLIER,:SUP_NAME,:CONTACT_NAME,:CONTACT_PHONE,:SUP_STATUS ,:FREIGHT_TERMS,:HANDLING_PCT,:SHIP_METHOD,:PAYMENT_METHOD ,: FREIGHT_CHARGE_IND ,: PREPAY_INVC_IND ,: BACKORDER_IND,:VAT_REGION,:COMMENT_DESC)   ",                    
                 [value.SUPPLIER , value.SUP_NAME ,  value.CONTACT_NAME, value.CONTACT_PHONE ,  value.SUP_STATUS,value.FREIGHT_TERMS,value.HANDLING_PCT,value.SHIP_METHOD ,value.PAYMENT_METHOD ,value.FREIGHT_CHARGE_IND ,value. PREPAY_INVC_IND ,value.BACKORDER_IND,value.VAT_REGION ,value.COMMENT_DESC  ],{
                                 
                    
                                 
                 
                 
                 // "insert into ITEM (ITEM , STATUS ,  ITEM_DESCRIPTION, COST_ZONE_GROUP_ID ,  STANDARD_UOM,MERCHANDISE_IND,FORECAST_IND,SELLABLE_IND ,ORDERABLE_IND ,COMMENTS ,INVENTORY_IND ,PERISHABLE_IND,CURR_SELLING_UNIT_RETAIL ,CREATE_ID  , CREATE_DATETIME  ,  LAST_UPDATE_ID ,LAST_UPDATE_DATETIME )  values(:ITEM , :STATUS ,  :ITEM_DESCRIPTION, :COST_ZONE_GROUP_ID ,  :STANDARD_UOM,:MERCHANDISE_IND,:FORECAST_IND,:SELLABLE_IND ,:ORDERABLE_IND ,:COMMENTS ,:INVENTORY_IND ,:PERISHABLE_IND,:CURR_SELLING_UNIT_RETAIL ,:CREATE_ID  , :CREATE_DATETIME,  :LAST_UPDATE_ID , :LAST_UPDATE_DATETIME)",
                 // [value.ITEM , value.STATUS ,  value.ITEM_DESCRIPTION, value.COST_ZONE_GROUP_ID ,  value.STANDARD_UOM,value.MERCHANDISE_IND,value.FORECAST_IND,value.SELLABLE_IND ,value.ORDERABLE_IND ,value.COMMENTS ,value.INVENTORY_IND ,value.PERISHABLE_IND,value.CURR_SELLING_UNIT_RETAIL ,value.CREATE_ID  , mydate ,  value.LAST_UPDATE_ID ,mydate1],{
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

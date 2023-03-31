const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
console.log("db ini item");
exports.getitemforstore=async function getitemforstore(itemval)
{
      console.log("inside getitemstore",itemval.value);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result2 = await connection.execute(
              `select ITEM from ITEM im where not exists (select 'x' from item_loc il where il.item=im.item and store=${itemval.value}) `,
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('result:',result2);

        rs = result2.resultSet;

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
exports.uploaditemloc=async function uploaditemloc(value) {
      console.log("print",value);
      let st=value.STORE;
      let status=value.STATUS;
      let ite=value.ITEM
     console.log("length is",ite);
     for (i=0; i<ite.length; i++){
      postitemloc(st , ite[i].productitem,ite[i].quantity,status);
      console.log(st , ite[i].productitem,ite[i].quantity,status);


       } 
     
}
async function postitemloc(st,item,price,status)
{
     
      
      try {
            connection= await dbcon.connect();
            resu = await connection.execute(
  
                  "insert into item_loc (STORE,ITEM,PRICE,STATUS)  values(:STORE,:ITEM,:PRICE,:STATUS)",
                  [st,item,price,status]
                  ,{
                 
                
                 autoCommit: true,
                
                  }
                  );
  
                  console.log(resu);
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
exports.getstoreforstore=async function getstoreforstore()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result2 = await connection.execute(
              "select * from STORE ",
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('result:',result2);

        rs = result2.resultSet;

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
exports.getcheck=async function getcheck(STORE)
{
      console.log(STORE);
     // let a=[];
      let connection;
      let query=`select count(1) from STORE where STORE='${STORE}'`;
      console.log(query)
      try{
            connection=await dbcon.connect(); 
            checkresult=await connection.execute(
                       query,

                       [],{
                       
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
                  "select * from STORE",
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
    
     var mydate5 = new Date(value.STORE_OPEN_DATE+'T00:00:00.000Z');
    //var mydate1=  new Date(value.STORE_CLOSE_DATE+'T00:00:00.000Z');
    var mydate2 = "sysdate";
    var phone=value.PHONE_NUMBER;
    console.log(phone);
    var email=value.EMAIL;
    console.log(email)
    var vatr=value.VAT_REGION;
    console.log(vatr)
    var vati=value.VAT_INCLUDE_IND;
    console.log(vati)
    console.log("MYDATE2 IS",mydate2)
    console.log("mydate",mydate5);
    console.log("before changing"+value.STORE_OPEN_DATE);
    console.log("before changing close date is", value.STORE_CLOSE_DATE);

      try {
            

            
            connection= await dbcon.connect();
            result = await connection.execute(
                  // console.log("printing the phone number",value.PHONE_NUMBER)
                 // "insert into ITEM (ID,NAME)values(:ID, :NAME)",
                  `insert into STORE (STORE,STORE_NAME,PHONE_NUMBER,EMAIL,VAT_REGION,VAT_INCLUDE_IND,STORE_OPEN_DATE,STOCKHOLDING_IND,AUTO_RCV,CREATE_DATETIME,CREATE_USERNAME)  values(:STORE,:STORE_NAME,'${phone}','${email}','${vatr}','${vati}',:STORE_OPEN_DATE,:STOCKHOLDING_IND,:AUTO_RCV,${mydate2},:CREATE_USERNAME)`,
                  [value.STORE,value.STORE_NAME,mydate5,value.STOCKHOLDING_IND,value.AUTO_RCV,value.CREATE_USERNAME],{
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

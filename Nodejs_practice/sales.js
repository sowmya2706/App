const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.getstoreforsales=async function getstoreforsales()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result2 = await connection.execute(
              "select distinct il.STORE from item_loc il, inventory i where il.STORE=i.STORE order by il.STORE",
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
exports.salesdetailsview=async function salesdetailsview()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result2 = await connection.execute(
              "select * from sales order by INVOICE_NO",
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
        console.log("the ans is",a);
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
exports.salesupload=async function salesupload(value) {
      console.log("print",value);
  
     var mydate = new Date(value.INVOICE_DATE+'T00:00:00.000Z');
   
      try {
            connection= await dbcon.connect();
            result1 = await connection.execute(
  
                  `insert into sales (INVOICE_NO,INVOICE_DATE, STORE,SALES_TYPE,INVENTORY_PRICE)  values(:INVOICE_NO,:INVOICE_DATE,:STORE,:SALES_TYPE,:INVENTORY_PRICE)`,
                  [value.INVOICE_NO ,mydate, value.STORE,   value.SALES_TYPE,value.INVENTORY_PRICE]
                  ,{
                 
                
                 autoCommit: true,
                
                  }
            );
  
            console.log("vallllll",result1);
           
  
  
         
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
  exports.salesdetail=async function salesdetail(value) {
      console.log("print",value);
      try {
          connection= await dbcon.connect();
          let invoice=value.INVOICE_NO;
      let receive_val=value.ITEM;
       for(i=0;i<receive_val.length;i++)
       {
       salesdetail_upload(receive_val[i].productitem,receive_val[i].price,receive_val[i].quantity,receive_val[i].total,invoice);
       console.log(receive_val[i].productitem,receive_val[i].price,receive_val[i].quantity,receive_val[i].total,invoice)
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
   async function salesdetail_upload(item,price,quantity,total,invoice)
   {
      try {
            
  
            
            connection= await dbcon.connect();
            re = await connection.execute(
                  "insert into sales_detail (INVOICE_NO,ITEM,PRICE,QUANTITY,TOTAL_PRICE) values (:INVOICE_NO,:ITEM,:PRICE,:QUANTITY,:TOTAL_PRICE)",
                  [invoice,item,price,quantity,total]
                  ,{
                   autoCommit:true,     
                  }
            );
            console.log(re);
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

     
  exports.quanty_check=async function quanty_check(value)
{
    console.log(value);
    console.log(value.item);
    let val1=value.item;
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();
        close_st = await connection.execute(
            `select CLOSING_UNIT from inventory where item='${val1}'`,
            [],
            {
                  resultSet: true,
                  outFormat: oracledb.OUT_FORMAT_OBJECT
            }
        );
        console.log('resultfor item:',close_st);
        rsi = close_st.resultSet;
        

        let row;
        while ((row = await rsi.getRow())) {
              console.log(row);
            a.push(row)
        }
       
        await rsi.close();
      console.log("hddddddddddd",a)
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
  exports.gettotalvalue=async function gettotalvalue(value)

  {
        
      
                  
                   
      console.log("ss",value)
      let a=[];
      let connection;
        try {
            connection=await dbcon.connect();
            for(i=0;i<value.length;i++)
            {
               result2 = await connection.execute(
               
      
      `Select item,PRICE,price*${value[i].quantity} total_price from item_loc where STORE='${value[i].sto}' and ITEM='${value[i].productitem}'`,
      [],
      {
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
                 console.log("sowmya",a);
}


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
exports.getitemforsales=async function getitemforsales(itemval)
{
      console.log("inside getitemstore",itemval.value);
      
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result2 = await connection.execute(
            `select i.item,il.price from inventory i,item_loc il where i.store='${itemval.value}' and i.item=il.item and i.store=il.store`,
           
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
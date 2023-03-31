const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.inventory=async function inventory(value)
{
console.log(value)
let st=value.STORE;
console.log("store is",st)
let ite=value.ITEM
console.log("ite is",ite)
console.log("length is",ite.length)
console.log("item ois sdsfdsfsf",ite[0].received_item,ite[0].received_quantity)
 for(i=0;i<ite.length;i++)
{
      inventoryupload(st,ite[i].received_item,ite[i].received_quantity)
      console.log("inventory upload console.log",st,ite[i].received_item,ite[i].received_quantity)
}
}
exports.inventory_sales=async function inventory_sales(value)
{
console.log("valueeee is",value)
console.log("item is",value.ITEM[0].productitem,"price is",value.price)
console.log("item length is",value.ITEM.length)
let ite=value.ITEM
for(i=0;i<value.ITEM.length;i++)
{
      inventorysalesupload(ite[i].productitem,ite[i].quantity,ite[i].total)
      console.log("inventory sales upload console.log",ite[i].productitem,ite[i].quantity,ite[i].total)
}
}
async function inventorysalesupload(item,quanty,tot)
{
      try {
            connection= await dbcon.connect();
            resu = await connection.execute(
                  `update inventory set sales_unit =${quanty} ,sales_cost=${tot}where ITEM='${item}' `,
                  {},
                  {
                 
                
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
  
async function inventoryupload(st,rece_item,rece_quanty)
{
      try {
            

            

            connection= await dbcon.connect();
            resu = await connection.execute(
                  `MERGE INTO inventory e USING (select  '${rece_item}' item, ${st} loc from dual) il
            ON (e.item = il.item
           and e.store = il.loc)
             WHEN MATCHED THEN
               UPDATE SET e.purchase_unit=e.purchase_unit+${rece_quanty},
                          e.purchase_cost=e.purchase_cost+(${rece_quanty}*(select unit_cost from item where item='${rece_item}')),
                          e.closing_unit=e.closing_unit+${rece_quanty},
                          e.closing_cost=closing_cost+(${rece_quanty}*(select unit_cost from ITEM where item='${rece_item}'))
                          
             WHEN NOT MATCHED THEN
               INSERT (item,store,purchase_unit,purchase_cost,sales_unit,sales_cost,closing_unit,closing_cost)
               VALUES ('${rece_item}',${st},${rece_quanty},(${rece_quanty}*(select unit_cost from ITEM where item='${rece_item}')),0,0,${rece_quanty},(${rece_quanty}*(select unit_cost from item where item='${rece_item}')))`,

                                  []
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
       exports.inventoryview=async function inventoryview()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result2 = await connection.execute(
              "select * from inventory ",
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


//       let storeval;
//       let val1=ITEM.ITEM[0].received_item;
//     console.log("inside inventory",ITEM.ITEM)
//     console.log("the store for the selected item is",val1)
//     let connection;
//     try {
//         connection=await dbcon.connect();
//         result2 = await connection.execute(

//     let a=[];
//     let connection;
//       try {
//         connection=await dbcon.connect();

//         result2 = await connection.execute(
                
//             );
//             console.log('result:',result2);
    
//             rs = result2.resultSet;
    
//             let row;
//             while ((row = await rs.getRow())) {
//                   console.log(row);
//                 a.push(row)
//             }
//             console.log("",a);
//             await rs.close();
    
//             return a ;
//       } catch (err) {
    
//             console.error(err);
//       }
//        finally {
    
//     if (connection) {
//           try {
//           await connection.close();
//           } catch (err) {
//           console.error(err);
//           }
//     }
//     }
    

const oracledb = require("oracledb");
const dbcon =   require('./db_connect')
exports.getsupplierforpo=async function getsupplierforpo()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        result = await connection.execute(
              "select SUPPLIER from SUPPLIER where SUPPLIER IN(SELECT SUPPLIER FROM ITEM)",
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
exports.getitemforpo=async function getitemforpo(itemval)
{
      console.log("inside getitempo",(itemval));
      let sup=itemval.SUPPLIER;
      let sto=itemval.STORE;
 
      console.log(sup,sto);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resultitem = await connection.execute(
            `select i.ITEM from ITEM i,ITEM_LOC il where i.SUPPLIER='${sup}' and il. STORE='${sto}' and i.ITEM=il.ITEM `,
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
exports.getitemforpostore=async function getitemforpostore(itemval)
{
      console.log("inside getitempo for store",(itemval.STORE));
      let ff=itemval.STORE;
      console.log(ff);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resultitem = await connection.execute(
              `select ITEM from ITEM where SUPPLIER='${ff}'`,
             
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
exports.getitemforporeceive=async function getitemforporeceive(itemvalue)
{
      console.log("sowmmmmmmmmmmmmmyaaaaaaaa")
      console.log("inside getitempo",(itemvalue.ORDER_NO));
      let ff=itemvalue.ORDER_NO;
      console.log(ff);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resultitem = await connection.execute(
           ` select a.item,b.store  from po_detail a,po_create b where a.order_no=b.order_no
            and a.ORDER_NO='${ff}'`,
             
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
        console.log("return a value",a);
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
exports.receivecheck=async function receivecheck(value)
{
    console.log(value);
    let val1=value.po_number;
    console.log("value of val1 is",val1);
    let val2=value.received_item;
    console.log("value of val2 is",val2);
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();
        orderres = await connection.execute(
            //get ordered qunatity 
            //write if case to check ordered and received qunaty
              `SELECT ORDERED_QUANTY from po_detail where ORDER_NO=${val1}and ITEM='${val2}'`,
               [],
               {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('resultfor item:',orderres);

        rsi = orderres.resultSet;
        

        let row;
        while ((row = await rsi.getRow())) {
              console.log(row);
            a.push(row)
        }
       
        await rsi.close();
      console.log(a[0])
        return a[0] ;
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
exports.getstoreforpo=async function getstoreforpo()
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
exports.getdetails=async function getdetails()
{
      console.log("inside backencd")
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resultget = await connection.execute(
              "select * from po_detail ",
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('result:',resultget);

        rg = resultget.resultSet;

        let row;
        while ((row = await rg.getRow())) {
              console.log("row is",row);
            a.push(row)
        }
        console.log("",a);
        await rg.close();

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
exports.getponumberforpo=async function getponumberforpo()
{
    let a=[];
    let connection;
      try {
        connection=await dbcon.connect();

        resu = await connection.execute(
            
              `select ORDER_NO from po_create where PO_ACK_RECVD_IND='N'`,
              [], {
              resultSet: true,
              outFormat: oracledb.OUT_FORMAT_OBJECT
              }
        );
        console.log('result:',resu);

        rs = resu.resultSet;

        let rowforpo;
        while ((rowforpo = await rs.getRow())) {
              console.log(rowforpo);
            a.push(rowforpo)
        }
        console.log("result for list of po numbers for po receive",a);
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
exports.post=async function post(value) {
    console.log("print",value);

//    var mydate = new Date(value.CREATE_DATETIME+'T00:00:00.000Z');
  var mydate1=  'sysdate';
    try {
          connection= await dbcon.connect();
          result1 = await connection.execute(

                `insert into po_create (ORDER_NO,LOC_TYPE,STORE,FREIGHT_TERMS,COMMENT_DESC,CREATE_USERID,SUPPLIER,WRITTEN_DATE,TERMS,STATUS,PO_ACK_RECVD_IND)  values(:ORDER_NO,:LOC_TYPE,:STORE,:FREIGHT_TERMS,:COMMENT_DESC,:CREATE_USERID,:SUPPLIER,${mydate1},:TERMS,:STATUS,:PO_ACK_RECVD_IND)`,
                [value.ORDER_NO ,'S',value.STORE,value.FREIGHT_TERMS,value.COMMENT_DESC,value.CREATE_USERID,value.SUPPLIER,    value.TERMS,'A','N']
                ,{
               
              
               autoCommit: true,
              
                }
          );

          console.log("vallllll",result1);
          let po_number=value.ORDER_NO;
          let po_detail=value.ITEM;
          console.log("value.ITEM",value.ITEM);
       for (i=0; i<po_detail.length; i++){
      postdetails(po_number , po_detail[i].productitem,po_detail[i].quantity);
      console.log(po_number , po_detail[i].productitem,po_detail[i].quantity);


       } 
    } catch (err) {
          console.log("error ois",err)
      //     console.error("errrrrrrrorrrrr is",err);
          throw err;
    } 
    
     finally {

  if (connection) {
        try {
        await connection.close();
        } catch (err) {
         
        console.error("bkvikvikgikg",err);
        }
  }
}
}

exports.uploadporeceive=async function uploadporeceive(value) {
      console.log("print upload po receive",value);
      let it=value.ITEM;
      let len=it.length;
      console.log("the length for updating is",len)
      let reci=value.ITEM.received_item;
      let recq=value.ITEM.received_quantity;
      let po_num=value.PO_NUMBER
      console.log("item is :",it);
      console.log("PO NUMBER is :",po_num);
      console.log("the date is",value.PO_RECEIVE_DATE)
      var mydate = new Date(value.PO_RECEIVE_DATE+'T00:00:00.000Z');
      console.log(mydate);
     
      try {
      

             connection= await dbcon.connect();
      //  selectquery= await connection.execute(`select * from po_create where ORDER_NUMBER='${po_num}'  and ITEM `,{

      //         })

            poreceiveres = await connection.execute(

  
                  "insert into po_receive (PO_RECEIVE_DATE,PO_NUMBER)  values(:PO_RECEIVE_DATE,:PO_NUMBER)",
                 
                  [mydate ,value.PO_NUMBER]
                  ,
                  //  "update po_create PO_ACK_RECVD_IND ='Y' where ORDER_NO = po_num",{},
                  {
                 
                
                 autoCommit: true,
            
                
                  }
                  
            );
          console.log("sfgdgfdfgdhfdgd   yrexxssssss");
        changeindtoy(po_num);
        console.log("returning once after changing indicator")
       for(i=0;i<it.length;i++)
       {
            postpodet(po_num,it[i].received_item,it[i].received_quantity)
            console.log(po_num,it[i].received_item,it[i].received_quantity)
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
  async function changeindtoy(po_num)
  {
      console.log("changing indicator",po_num);
      try{
            connection= await dbcon.connect();
            resu = await connection.execute(
           `update po_create set PO_ACK_RECVD_IND='Y' where ORDER_NO=${po_num}`,
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
  exports.ordercheck=async function ordercheck(value) {
      console.log("order check",value);
      let connection;
      let query=`select count(1) from po_create where ORDER_NO='${value}'`;
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

  async function postpodet(order_num,item,rece)
{
      console.log("here in postpodet val is",order_num,item,rece)
      console.log("calling postpodet")
      
      try {
            
  
            
            connection= await dbcon.connect();
            re = await connection.execute(
                 
                   `update po_detail set RECEIVED_QUANTY =${rece} where ITEM='${item}' and ORDER_NO=${order_num}`,
                   
                  {},
                  {
                 
                
                 autoCommit: true,
                
                  }
            );
            console.log("Succesfully done postpodet")
  
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

  
async function postdetails(po_number,productitem,quantity)
{
      console.log("inside the normal postdetails function")
      
      try {
            connection= await dbcon.connect();
            resu = await connection.execute(
  
                  "insert into po_detail (ORDER_NO,ITEM,ORDERED_QUANTY)  values(:ORDER_NO,:ITEM,:ORDERED_QUANTY)",
                  [po_number,productitem,quantity]
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


var express=require('express');
const oracledb = require("oracledb");
const nodemailer = require('nodemailer');
var app=express()
var bodyparser=require('body-parser');
var cor=require('cors');
var dbData=require('./test');
var sup=require('./test_Service');
var sto=require('./store_Service');
var po= require('./PO_Method');
var sal=require('./sales');
var user=require('./Login');
var inv=require('./inventory');
var dept=require('./department');
var clas=require('./clas');
var subclass=require('./subclass');
app.use(express.json());
app.use(cor());
app.use(bodyparser.json());

app.post('/post',function(req,res){
    dbData.post(req.body)
    console.log('request body:  ',req.body);
    res.send(req.body)
    
})
    
app.get('/get',async (req,res)=>{
  

    console.log('get');
    await dbData.get().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
        
    })
    
      

})
app.get('/getsupplierforitem',async (req,res)=>{
  

    console.log('get supplier for item');
    await dbData.getsupplierforitem().then(row =>{
        console.log("Data supplierforitem: ",row);
        res.json(row)
        
    })
    
      

})
app.get('/getdeptforitem',async (req,res)=>{
  

    console.log('get dept for item');
     dbData.getdeptforitem().then(row =>{
        console.log("Data supplierforitem: ",row);
        res.json(row)
        
    })
    
      

})
app.get('/getclassforitem',async(req,res)=>{
    console.log("backend check",req.query)
     await dbData.getclassforitem(req.query).then(row=>{
         console.log(row);
         res.json(row);
     })
 })
 app.get('/getsubclassforitem',async(req,res)=>{
    console.log("backend check for subclass",req.query)
     await dbData.getsubclassforitem(req.query).then(row=>{
         console.log(row);
         res.json(row);
     })
 })
//inserted piece of code
app.get('/getval',async(req,res)=>{
    console.log('checking for the value',req.query);
    console.log("dsd",req.query);
     await dbData.getcheck(req.query.ITEM).then(row=>{
       // console.log(res.json([row]));
       console.log(row);
        res.json(row);
    })
})
app.get('/getvalsupp',async(req,res)=>{
    console.log('checking for the value',req.query);
    console.log("dsd",req.query);
     await dbData.getchecksup(req.query.ITEM).then(row=>{
       // console.log(res.json([row]));
       console.log(row);
        res.json(row);
    })
})
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////SUPPLIER CODE/////////////////////////////
app.post('/postSupplier',(req,res)=>{
   // oracledb.initOracleClient();
    sup.post(req.body)
      console.log('request body:  ',req.body);
      res.send(req.body)
      
  })
  app.get('/getSupplier',async (req,res)=>{
    //oracledb.initOracleClient();
    console.log('get');
    await sup.get().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
    })
    

})
app.get('/getsuppliercheck',async(req,res)=>{
    console.log('checking for the value',req.query.SUPPLIER);
    console.log("dsd",req.query);
     await sup.getcheck(req.query.SUPPLIER).then(row=>{
       // console.log(res.json([row]));
       console.log(row);
        res.json(row);
    })
})
///////////////////////////////////////////////////////////
//////////////////STORE CODE//////////////////////////////
app.post('/postStore',(req,res)=>{
    // oracledb.initOracleClient();
     sto.post(req.body)
       console.log('request body:  ',req.body);
       res.send(req.body)
       
   })
   app.get('/getStore',async (req,res)=>{
     //oracledb.initOracleClient();
     console.log('get');
     await sto.getstore().then(row =>{
         console.log("Data : ",[row]);
         res.json([row])
     })
     
 
 })
 app.post('/uploaditemloc',(req,res)=>{
    // oracledb.initOracleClient();
    console.log('request body for spacing:  ',req.body);
     sto.uploaditemloc(req.body)
       res.send(req.body)
       
   })
 
 app.get('/getstoreforstore',async(req,res)=>{
    console.log('Enter');
    await sto.getstoreforstore().then(row=>{
        console.log(row);
        res.json(row);
    })
})

app.get('/getitemforstore',async(req,res)=>{
    console.log('Enter',req.query);
    await sto.getitemforstore(req.query).then(row=>{
        console.log(row);
        res.json(row);
    })
})
 app.get('/getstorecheck',async(req,res)=>{
    console.log('checking for the value',req.query.STORE);
    console.log("dsd",req.query);
     await sto.getcheck(req.query.STORE).then(row=>{
       // console.log(res.json([row]));
       console.log(row);
        res.json(row);
    })
})
/////////////////////////////////////
///////po table//////////
app.get('/getsupplierforpo',async(req,res)=>{
    console.log('Enter');
    await po.getsupplierforpo().then(row=>{
        console.log(row);
        res.json(row);
    })
})
app.get('/getitemforpo',async(req,res)=>{
    console.log("backend check",req.query)
     await po.getitemforpo(req.query).then(row=>{
         console.log(row);
         res.json(row);
     })
 })
app.get('/getorderno',async(req,res)=>{
    
     await po.getorderno().then(row=>{
         console.log("the number is",row);
         res.json(row);
     })
 })
app.get('/getitemforpostore',async(req,res)=>{
    console.log("backend check for po stofetxg",req.query)
     await po.getitemforpostore(req.query).then(row=>{
         console.log(row);
         res.json(row);
     })
 })
app.get('/receivecheck',async(req,res)=>{
    
    console.log("backend check for receivecheck 0 ",req.query)
    await po.receivecheck(req.query).then(row=>{
        console.log("response in nodejs",row);
        res.json(row);
      })
})
app.get('/getitemforporeceive',async(req,res)=>{
   
     await po.getitemforporeceive(req.query).then(row=>{
        console.log("row printinggggggg")
         console.log("row is",row);
         res.json(row);
     })
 })
app.get('/getstoreforpo',(req,res)=>{
    console.log('Enter');
     po.getstoreforpo().then(row=>{
        console.log(row);
        res.json(row);
    })
})
app.post('/postpocreate',(req,res)=>{
    // oracledb.initOracleClient();
      po.post(req.body)
      console.log('request body:  ',req.body);
      res.send(req.body)
      

      
   });
 app.get('/getdetails',async(req,res)=>{
    console.log("backend")
    await po.getdetails().then(row=>{

        console.log(row);
        
        res.json([row]);
       
    })
 })
 app.get('/getponumberforpo',async(req,res)=>{
    console.log('Enter for po')
    await po.getponumberforpo().then(row=>{
        console.log(row);
        res.json(row);
    })
})
app.post('/uploadporeceive',(req,res)=>{
    // oracledb.initOracleClient();
     po.uploadporeceive(req.body)
       console.log('request body:  ',req.body);
       res.send(req.body)
       
   })
   app.get('/ordercheck',async(req,res)=>{
    console.log('checking for the orderrrrr   value',req.query.ORDER_NO);
    console.log("dsd order",req.query);
     await po.ordercheck(req.query.ORDER_NO).then(row=>{
       // console.log(res.json([row]));
       console.log("rowwwwwwww rowwwwww",row);
        res.json(row);
    })
})

////Loginvalidation/////
app.post('/newusercheck',async(req,res)=>{
  
    console.log('request body :',req.body);
      user.usernamecheck(req.body).then(row=>{
        console.log('response',row);
        res.send(row)
      })
       
       
})
app.post('/otpgenerate',async(req,res)=>{
  
    console.log('request body :',req.body);
      user.otpgenerate(req.body).then(row=>{
        console.log('response',row);
        res.send(row)
      })
       
       
})
app.post('/userexist',async(req,res)=>{
    console.log("request body is",req.body);
    user.userexist(req.body).then(row=>{
        console.log("response issss",row);
        res.send(row);
    })
})
///////SALES//////////
app.post('/salescreate',async(req,res)=>{
  
    console.log('request body :',req.body);
      sal.salesupload(req.body).then(row=>{
       console.log('response',row);
       res.send(row)
     })      
})
app.post('/salesdetail',async(req,res)=>{
  
    console.log('request body :',req.body);
      sal.salesdetail(req.body).then(row=>{
       console.log('response',row);
       res.send(row)
     })    
})
app.get('/getitemforsales',async(req,res)=>{
    console.log("backend check",req.query)
     await sal.getitemforsales(req.query).then(row=>{
         console.log(row);
         res.json(row);
     })
 })
 app.get('/salesdetailsview',async (req,res)=>{
  

    console.log('get')
    await sal.salesdetailsview().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
        
    })
    })
 app.post('/gettotalvalue',async(req,res)=>{
    console.log("backend check",req.body)
     sal.gettotalvalue(req.body).then(row=>{
        console.log("the row is",row);
        res.json(row);
    })
 })
 app.get('/quanty_check',async(req,res)=>{
    console.log("backend check quantyyyy",req.query)
      sal.quanty_check(req.query).then(row=>{
        console.log("the row is",row);
        res.json(row);
     })
 })
app.get('/getstoreforsales',async(req,res)=>{
    console.log('Enter');
    await sal.getstoreforsales(req.query).then(row=>{
        console.log(row);
        res.json(row);
    })
})
/////Department////////
app.post('/deptcreate',async(req,res)=>{
    console.log("backend check inventory",req.body)
    dept.deptcreate(req.body).then(row=>{
        
       res.send(row)
     })
   
})
app.get('/getdeptno',async(req,res)=>{
    console.log('checking for the value',req.query);
    console.log("dsd",req.query.deptno); 
    await dept.getcheckdeptno(req.query.deptno).then(row=>{
        // console.log(res.json([row]));
        console.log(row);
         res.json(row);
})
})
app.get('/getdeptview',async (req,res)=>{
  

    console.log('department view');
    await dept.getdeptview().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
        
    })
    
      

})
///////////class//////////
app.get('/getdeptforclass',async(req,res)=>{
    console.log('Enter');
    await clas.getdeptforclass().then(row=>{
        console.log(row);
        res.json(row);
    })
})
app.get('/getclassno',async(req,res)=>{
    console.log('checking for the value',req.query);
    console.log("dsd",req.query.classno); 
    await clas.getcheckclassno(req.query.classno).then(row=>{
        // console.log(res.json([row]));
        console.log(row);
         res.json(row);
})
})
app.post('/classcreate',async(req,res)=>{
    console.log("backend check inventory",req.body)
    clas.classcreate(req.body).then(row=>{
        
       res.send(row)
     })
   
})
app.get('/getclassview',async (req,res)=>{
  

    console.log('department view');
    await clas.getclassview().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
        
    })
    
      

})
//////subclass////////////
app.get('/getclassforsubclass',async(req,res)=>{
    console.log('Enter');
    await subclass.getclassforsubclass().then(row=>{
        console.log(row);
        res.json(row);
    })
})
app.get('/getsubclassno',async(req,res)=>{
    console.log('checking for the value',req.query);
    console.log("dsd",req.query.classno); 
    await subclass.getchecksubclassno(req.query.subclassno).then(row=>{
        // console.log(res.json([row]));
        console.log(row);
         res.json(row);
})
})
app.post('/subclasscreate',async(req,res)=>{
    console.log("backend check inventory",req.body)
    subclass.subclasscreate(req.body).then(row=>{
        
       res.send(row)
     })
   
})
app.get('/getsubclassview',async (req,res)=>{
  

    console.log('department view');
    await subclass.getsubclassview().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
        
    })
    
      

})
//////inventory////////////
app.post('/inventory',async(req,res)=>{
    console.log("backend check inventory",req.body)
   inv.inventory(req.body).then(row=>{
      console.log("the row is inventory",row);
       res.json(row);
   })
})
app.post('/inventory_sales',async(req,res)=>{
    console.log("backend check for inventory sales",req.body)
    inv.inventory_sales(req.body).then(row=>{
        console.log("the row is for",row)
        res.json(row);
    })
})
app.get('/inventoryview',async (req,res)=>{
  

    console.log('get')
    await inv.inventoryview().then(row =>{
        console.log("Data : ",[row]);
        res.json([row])
        
    })
    })


 
app.listen(4000,()=>{
    console.log('port is open');
})



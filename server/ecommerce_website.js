var mysql = require('mysql');
var express = require('express'); 
var app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors());


// To connect with the database
var db = mysql.createConnection({
    host: 'localhost' ,
    user: 'root' ,
    password: 'arbiixd' ,
    database: 'ecommerce' 
});

db.connect(function(error){
    if (error){throw error};
    console.log("connected to the database")
})


//requests

// to get products for Home page
app.get('/',(req, response)=>{
    db.query("select * from product",function(err, result){
        response.json(result)
    });
})


app.post('/adminLogin',(req, res) => {
    const adminEmail = req.body.adminEmail;
    const adminPass = req.body.adminPass;
    db.query("select * from admin where email = ? AND pass = ?",
    [adminEmail, adminPass],
    (err, result)=>{
        if (err){
            res.send({err:err})
        }

        if (result.length >0){
            res.send(result)
        }
        else{
            res.send({message: "Failed To Delete Product.."})
        }
    });    
})



app.post('/userLogin', (req,res)=>{
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    db.query("select * from customer where email = ? AND pass = ?",
    [userEmail, userPassword],
    (err, result)=>{
        if (err){
            res.send({err:err})
        }

        if (result.length >0){
            res.send(result)
        }
        else{
            res.send({message: "Wrong email/password"})
        }
    });    
})

app.post('/cart',(req, res) => {
    const custID = req.body.custID;
    console.log(custID)
    db.query("select * from cart where custID=?",
    [custID],
    (err, result)=>{
        // console.log(err,result)
        if (err){
            res.send({err:err})
        }

        if (result.length >0){
            res.send(result)
        }
        else{
            res.send({message: "Wrong email/password"})
        }
    });    
})



app.post('/adddProduct' , (req,res)=>{

    const prodID=req.body.pID
    const prodName=req.body.pName
    const prodDesc=req.body.pDesc
    const discount=req.body.pDiscount
    const unitWeight=req.body.pUnitWeight
    const unitPrice=req.body.pUnitPrice
    const imgUrl=req.body.pImgUrl

    const addingProd = "INSERT INTO product(prodID , prodname, prodDesc , discount , unitweightKg , unitprice , img ) VALUES (?,?,?,?,?,?,?)";
    db.query(addingProd , 
        [prodID, prodName, prodDesc, discount, unitWeight, unitPrice, imgUrl], 
        (err,result)=>{
        console.log(err)
        res.send({err:err})
        // if (result!=undefined){
        //     res.send({msg:'product added'})
        // }

        // else{
        //     res.send({err:err})
        // }
        // else{
        //     res.send({message: "Wrong email/password"})
        // }
    })
}
)



app.delete('/delProduct/:dProdName', (req, res) => {
    const dProdName = req.params.dProdName;
    console.log(dProdName)
    db.query("DELETE FROM product WHERE prodname = ?",  dProdName, (err, result) => {
        // console.log(result)
        console.log(err)
    });
});



app.post("/userSignin", (req,res)=>{
    const custID = req.body.cID
    const custFirst = req.body.cFirst
    const custLast = req.body.cLast
    const custEmail = req.body.cEmail
    const custPass = req.body.cPass
    const custPhone = req.body.cPhone
    const custAddress = req.body.cAddress
    const custCity = req.body.cCity
    const custCountry = req.body.cCountry
    const custPostal = req.body.cPostal

    // console.log(custCity)
    const newUser= "INSERT INTO customer(custID, fname, lname, email, phno, address, country, city, postalCode, pass) VALUES(?,?,?,?,?,?,?,?,?,?)";
    db.query(newUser, [custID, custFirst, custLast, custEmail, custPhone, custAddress,  custCountry, custCity,custPostal,custPass] , (err, result)=>{
        // console.log(err)
        // console.log(res)
        res.send({err:err})
        // res.send(err)
        // res.send(result)
    })
})




// to listen at port
app.listen(5000,function(){
    console.log("Listening to Port 5000");
})

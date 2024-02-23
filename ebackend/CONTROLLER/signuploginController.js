const{customer ,admin, product, cProduct} = require("../SCHEMA/signuplogin")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signupFunction = async (req,res)=>{
    const {FirstName,LastName,EmailAddress,PhoneNumber,Password}= req.body

    const salt = await bcrypt.genSalt(10);
    const hashing= await bcrypt.hash(Password,salt);

    const signupInfo= await customer.create({
        FirstName,
        LastName,
        EmailAddress,
        PhoneNumber,
        Password:hashing
    })
    res.json(signupInfo)
}

const loginFunction = async (req,res)=>{

    const {FirstName,LastName,EmailAddress,PhoneNumber,Password}= req.body

    const loginInfo=await customer.findOne({EmailAddress})

    if(loginInfo)
    {
        if(EmailAddress==loginInfo.EmailAddress&&(await bcrypt.compare(Password,loginInfo.Password)))
        {
            res.json("Login sucessful")
            

        }
        else
        {
            res.json("please enter correct email address and password ")
        }
    }
    else
    {
        res.json("User not found,create an account for free  ")
    }
  

    

}


const adminFunction = async(req,res)=>{
    const{AdminId,Password}=req.body

    const adminInfo = await admin.create({
        AdminId,
        Password
    })
    res.json(adminInfo)
}

const adminLoginFunction = async(req,res)=>{
    const {AdminId,Password}=req.body
    const adminLoginInfo = await admin.findOne({AdminId});
    if(adminLoginInfo)
    {
        if(AdminId==adminLoginInfo.AdminId&&Password==adminLoginInfo.Password)
        {
            res.json("Admin logged in ")
        }
        else
        {
            res.json("login failed ")
        }
    }
    else
    {
        res.json("Admin not found ")
    }
}


const productFunction = async(req,res)=>{
    const{Product,Image,Rating,Stock,Price}=req.body
    const productInfo = await product.create({
        Product,
        Image,
        Rating,
        Stock,
        Price
    })
    res.json(productInfo);
}

const productDisplayFunction = async (req,res)=>{
    const{Product,Image,Rating,Stock,Price}=req.body

    const getProduct= await product.find()
    res.send(getProduct);


}

const addToCart = async (req,res)=>{
    const{ProductId}=req.body
    // const getToCart = await product.find() 
    // res.send(getToCart);

    const cproductInfo = await cProduct.create({
        ProductId,
        

    })
    res.json(cproductInfo)

    
    
}




module.exports={signupFunction,loginFunction,adminFunction,adminLoginFunction,productFunction,productDisplayFunction,addToCart  };
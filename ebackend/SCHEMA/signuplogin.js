const mongoose = require("mongoose");

const customerDetails = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress:{type:String},
    PhoneNumber:{type:String},
    Password:{type:String}
})

const customer=mongoose.model("customer",customerDetails);

const adminDetails = mongoose.Schema({
    AdminId:{type:String},
    Password:{type:String}
})
const admin = mongoose.model("admin",adminDetails);

const productDetailes=mongoose.Schema({
    Product:{type:String},
    Image:{type:String},
    Rating:{type:String},
    Stock:{type:Boolean},
    Price:{type:String}
})
const product = mongoose.model("supplementproduct",productDetailes);


const cartProducts=mongoose.Schema({
    Product:{type:String},
    Image:{type:String},
    Rating:{type:String},
    Stock:{type:Boolean},
    Price:{type:String}
    
    
    
    
})
const cProduct = mongoose.model("cartproducts",cartProducts)
module.exports={customer,admin,product,cProduct};
//pricing
const chickPrice=1650 ;//number datatype in ugx
//approval status
let isApproved=true;
//farmer information
let farmerName='shimmy';
let farmerAge=27;
let isRegistered=true;
//chick type
let chicktype='broliers';
const chickPrices=20000;
const chickPurchase=5000;
let total=chickPrices-chickPurchase;
 console.log(total);
 console.log("chick price is", chickPrice, "ugx");
console.log("is the chick approved?", isApproved);
console.log("farmer name is", farmerName);
console.log("farmer age is", farmerAge);

//array
let babyChicks=['broilers','layers'];

//objects
let newBabyChicks = {
    name: "broiler", price: 500,
    name2: "layers", price2: 400
};

let chickStock = {
    type: 'layer',
    age: 27,
    quantity: 1000
};
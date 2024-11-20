const mongoose = require("mongoose")

async function Connection(){
    try {
        await mongoose.connect(process.env.MongoDB_url)
        console.log("Conneted to  mongoDb");
        
    } catch (error) {
        console.log(error); 
    } 
}
module.exports = Connection
const mongoose = require("mongoose")

async function Connection(){
    try {
        await mongoose.connect(process.env.MongoDB_URL)
        console.log("Mongodb is connected");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports= Connection
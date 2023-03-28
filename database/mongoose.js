const mongoose = require("mongoose");
const url = process.env.URL


const connect = async()=>{
    try {
        console.log("Conneccting to mongodb ....!!")
        const dbconnect = await mongoose.connect(url)// making the connection
        console.log("connected ->"  );
    } catch (error) {
        console.log("Error in connected to db")
        
    }
}

module.exports= connect
import mongoose from "mongoose";

//const uri = process.env.URI;

const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://lucasybanez:lucas123@rollinggourmet.duhqvjj.mongodb.net", {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("conectado a la db");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;
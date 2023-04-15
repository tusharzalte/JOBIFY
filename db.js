import mongoose from "mongoose";
const mongoURI = "mongodb+srv://tushar:Zbq6WD7P4oR1yJoS@cluster0.ka5eqlt.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to MongoDB");
    })
}
export default connectToMongo;
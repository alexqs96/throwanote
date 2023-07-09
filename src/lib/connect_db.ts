import mongoose, { ConnectOptions } from 'mongoose';

interface connectedOptions extends ConnectOptions{
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
}

const options: connectedOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectMongo = async () => {
    const connectionUrl: string = process.env.DB_URI as string
    mongoose.connect(connectionUrl , options )
        .then(() => console.log("Mongoose Connected"))
        .catch((err) => console.log("Mongoose could not connect " + err.message))
    mongoose.set('strictQuery', false)
}

export default connectMongo
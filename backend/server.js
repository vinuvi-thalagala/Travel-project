import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const connection = mongoose.connection;

connection.once("open", () => {
    console.log('Mongo DB connection is successfull');
});

app.listen(PORT, () => {
    console.log(`App is running on {$PORT}`)
});
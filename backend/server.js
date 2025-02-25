import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import travelRouter from './routes/travels.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

 app.use('/travels', travelRouter);

connection.once("open", () => {
    console.log('Mongo DB connection is successfull');
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);

});
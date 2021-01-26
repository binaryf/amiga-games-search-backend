import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

var cors = require('cors');

const app = express();

app.use(cors());

// Parse incoming requests data as JSON.
app.use(bodyParser.json());
app.use(router);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server running on port ${process.env.SERVER_PORT}`)
});
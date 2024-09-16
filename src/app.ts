import express from 'express';
import morgan from 'morgan';
import busRouter from './routers/bus.router';
import stationRouter from './routers/station.router';

const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/service1/buses', busRouter);
app.use('/api/service1/stations', stationRouter);

const port = process.env.PORT || 3005;
app.listen(port);

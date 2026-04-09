import express from 'express';
import jobsRouter from './routes/jobs/index.js';
import applicationsRouter from './routes/applications/index.js';

const v1Router = express.Router();

v1Router.use('/jobs', jobsRouter);
v1Router.use('/applications', applicationsRouter);

export default v1Router;
import express from 'express';
import router from '../src/routes/routes.js';
const app = express();

app.use((req, res, next)=> {
  res.set('Access-Control-Allow-Origin','*')
  next();
})

app.use(express.json());

app.use(router);

export default app;
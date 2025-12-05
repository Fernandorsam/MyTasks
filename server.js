import app from './src/app.js';
import 'dotenv/config.js';


 const port =  3001 || process.env.HTTP_PORT;
 

  app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}/tasks`);
   
  })

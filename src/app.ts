import express from 'express';
import config from 'config'
import routes from './routes';

const app = express();
const port = config.get<number>('port');

routes(app);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
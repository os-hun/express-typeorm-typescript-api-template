import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!!');
})

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});

export default app;

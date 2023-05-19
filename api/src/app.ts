import express from 'express';
import cors from 'cors';
import helloRouter from './routes/hello/hello';
import goodbyeRouter from '@learnbit/bit-pioneers.routes.goodbye';
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use('/api', helloRouter);
app.use('/api', goodbyeRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;

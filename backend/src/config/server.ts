import express from 'express';

import routeGithub from '../routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routeGithub);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server started in http://localhost:${PORT}`));


export default app;
import {Router} from 'express';
import "dotenv/config"

import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const route = Router();

route.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

route.get("/signin/callback", (req, res) => {
  const {code} = req.query;

  res.json(code);
});

route.post("/authenticate", new AuthenticateUserController().handle);


export default route;
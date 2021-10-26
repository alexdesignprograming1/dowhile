import {Router} from 'express';
import "dotenv/config"

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';

const route = Router();

route.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

route.get("/signin/callback", (req, res) => {
  const {code} = req.query;

  res.json(code);
});

route.post("/authenticate", new AuthenticateUserController().handle);

route.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

route.get("/messages/last3", new GetLast3MessagesController().handle);

route.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export default route;
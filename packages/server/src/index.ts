import express from 'express';
import { WebSocket } from './web-socket';
import { DummyUser } from './model/dummy-user';

const PORT = 3000;
const app = express();

const server = app.listen(PORT, () => {
  console.info(`App running on port: ${PORT}`);
});

const dummyUser = new DummyUser();
const websocket = new WebSocket(server);
websocket.initUserEvents(dummyUser);

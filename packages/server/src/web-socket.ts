import socket, { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { User } from './model/dummy-user';

export enum SOCKET_EVENTS {
  CONNECTION = 'connection',
  JOIN_ROOM = 'joinRoom',
  MESSAGE = 'message',
  CHAT = 'chat',
}

export class WebSocket {
  private io: Server;
  constructor(private server: HttpServer) {
    this.io = socket(this.server);
  }

  public initUserEvents(dummyUser: DummyUser): void {
    this.io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
      socket.on(SOCKET_EVENTS.JOIN_ROOM, ({ username, room }) => {
        const user = {
          id: socket.id,
          username,
          room,
        };
        dummyUser.add(user);

        socket.emit(SOCKET_EVENTS.MESSAGE, {
          userId: user.id,
          username,
          text: `Welcome ${username}`,
        });

        socket.broadcast.to(room).emit(SOCKET_EVENTS.MESSAGE, {
          userId: user.id,
          username,
          text: `${username} has joined the chat`,
        });
      });

      socket.on(SOCKET_EVENTS.CHAT, (text) => {
        const user: User = dummyUser.get(socket.id);
        this.io.to(user.room).emit(SOCKET_EVENTS.MESSAGE, {
          userId: user.id,
          username: user.username,
          text,
        });
      });
    });
  }
}

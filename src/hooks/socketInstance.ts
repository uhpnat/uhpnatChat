import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocketInstance = (serverUrl: string): Socket => {
  if (!socket) {
    socket = io(serverUrl, {
      transports: ['websocket'], // Sử dụng WebSocket
      reconnectionAttempts: 5,   // Thử kết nối lại 5 lần
      timeout: 10000,            // Thời gian chờ kết nối
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
  }
  return socket;
};

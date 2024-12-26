import { useEffect } from 'react';
import { getSocketInstance } from './socketInstance';

const useSocket = (serverUrl: string) => {
  const socket = getSocketInstance(serverUrl);

  useEffect(() => {
    const receiveMessage = (data: any) => {
      console.log('New message received:', data);
    };

    socket.on('receive_message', receiveMessage);

    return () => {
      socket.off('receive_message', receiveMessage);
    };
  }, [socket]);

  const sendMessage = (sender: string, receiver: string, message: string) => {
    socket.emit('send_message', { sender, receiver, message });
  };

  return { sendMessage };
};

export default useSocket;

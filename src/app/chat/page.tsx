'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { io, Socket } from 'socket.io-client';

interface Message {
  sender: string;
  receiver: string;
  message: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [sender, setSender] = useState<string>('tanphu');
  const [receiver, setReceiver] = useState<string>('admin');
  const socket = useRef<Socket | null>(null); // Lưu trữ socket instance
  const isListenerRegistered = useRef(false); // Theo dõi sự kiện đã được đăng ký hay chưa

  // Khởi tạo socket chỉ một lần
  useEffect(() => {
    if (!socket.current) {
      socket.current = io('http://localhost:3001', {
        transports: ['websocket'],
      });

      socket.current.on('connect', () => {
        console.log('Connected to WebSocket server');
      });

      // Đảm bảo cleanup khi component unmount
      return () => {
        socket.current?.disconnect();
        socket.current = null;
        isListenerRegistered.current = false;
      };
    }
  }, []);

  // Tải lịch sử chat
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get<Message[]>(
          `http://localhost:3001/chats/${sender}/${receiver}`
        );
        setMessages(response.data);
        console.log('Chat history:', response.data);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, [sender, receiver]); // Chỉ gọi lại khi sender hoặc receiver thay đổi

  // Đăng ký sự kiện WebSocket nhận tin nhắn mới
  useEffect(() => {
    if (socket.current && !isListenerRegistered.current) {
      const handleNewMessage = (data: Message) => {
        console.log('New message received:', data);
        setMessages((prevMessages) => [...prevMessages, data]);
      };

      socket.current.on('receive_message', handleNewMessage);
      isListenerRegistered.current = true; // Đánh dấu đã đăng ký

      // Cleanup để xóa sự kiện khi component unmount
      return () => {
        socket.current?.off('receive_message', handleNewMessage);
        isListenerRegistered.current = false; // Đánh dấu chưa đăng ký
      };
    }
  }, [socket.current]); // Đảm bảo chỉ chạy khi socket thay đổi

  // Hàm gửi tin nhắn
  const handleSendMessage = () => {
    if (inputMessage.trim() !== '' && socket.current) {
      socket.current.emit('send_message', { sender, receiver, message: inputMessage });
      setInputMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc' }}>
      <h3>Chat between {sender} and {receiver}</h3>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '80%', padding: '5px' }}
        />
        <button
          onClick={handleSendMessage}
          style={{ padding: '5px 10px', marginLeft: '5px' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

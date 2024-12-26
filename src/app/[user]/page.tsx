
"use client"
import ChatLeftsidebar from "@/components/app-chat/ChatLeftsidebar";
import SidebarMenu from "@/components/layouts/SidebarMenu";
import UserChat from "@/components/app-chat/item/Chats/UserChat/UserChat";
import Chats from "@/components/app-chat/item/Chats";
import ListUserChats from "@/components/app-chat/item/Chats/ListUserChats";
import UserChats from "@/components/app-chat/item/Chats/UserChats";
import { useState } from "react";
import { use } from 'react';
export default function Page({params}:any) {
  const user = use(params);
  console.log(user);
  const users = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        message: "Chào bạn! Mình đang sẵn sàng",
        time: "5 phút trước",
        avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
        status: "online",
    },
  
];

const [selectedUser, setSelectedUser] = useState<any>(users[0]);
  return (
    <>
     
      <ChatLeftsidebar>
        <Chats>
        <ListUserChats>
        <UserChats users={users} onSelectUser={setSelectedUser} ></UserChats>
        </ListUserChats>
        </Chats>
      </ChatLeftsidebar>
      <UserChat data={selectedUser} user={user}></UserChat>

    </>
  );
}

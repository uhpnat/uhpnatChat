
"use client"
import ChatLeftsidebar from "@/components/app-chat/ChatLeftsidebar";
import SidebarMenu from "@/components/layouts/SidebarMenu";
import UserChat from "@/components/app-chat/item/Chats/UserChat/UserChat";
import Chats from "@/components/app-chat/item/Chats";
import ListUserChats from "@/components/app-chat/item/Chats/ListUserChats";
import UserChats from "@/components/app-chat/item/Chats/UserChats";
import { useState } from "react";
export default function Page() {
  const users = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        message: "Chào bạn! Mình đang sẵn sàng",
        time: "5 phút trước",
        avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
        status: "online",
    },
    {
        id: 2,
        name: "Trần Thị B",
        message: "Hình ảnh",
        time: "12 phút trước",
        avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
        status: "unread",
        notifications: 2,
    },
    {
        id: 3,
        name: "Lê Minh C",
        message: "Cuộc họp tiếp theo vào ngày mai lúc 10h00",
        time: "12:01 PM",
        avatar: null,
        status: "unread",
        notifications: 1,
    },
    {
        id: 4,
        name: "Phạm Hoàng D",
        message: "Đang gõ",
        time: "04:56 PM",
        avatar: null,
        status: "typing",
    },
];

const [selectedUser, setSelectedUser] = useState(null);
console.log(selectedUser);

  return (
    <>
      <SidebarMenu></SidebarMenu>
      <ChatLeftsidebar>
        <Chats>
        <ListUserChats>
        <UserChats users={users} onSelectUser={setSelectedUser} ></UserChats>
        </ListUserChats>
        </Chats>
      </ChatLeftsidebar>
      <UserChat data={selectedUser}></UserChat>

    </>
  );
}


"use client"
import ChatLeftsidebar from "@/components/app-chat/ChatLeftsidebar";
import SidebarMenu from "@/components/layouts/SidebarMenu";
import UserChat from "@/components/app-chat/item/Chats/UserChat/UserChat";
export default function Page() {
  const toggleSwitcher = ()=> {
    const i :any = document.getElementById('style-switcher')
  
    if (!i.classList.contains("show")) {
      i.classList.add("show");
    } else {
      i.classList.remove("show");
    }
  };
  return (
    <>
    <SidebarMenu></SidebarMenu>
    <ChatLeftsidebar></ChatLeftsidebar>
    <UserChat></UserChat>

    </>
  );
}

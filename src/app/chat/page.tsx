import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Chat from "@/components/Chat/Chat";
import AppSideBar from "@/components/AppSideBar/AppSideBar";

const chat = () => {
  return (
    <>
      <SidebarProvider>
        <SidebarTrigger className="fixed top-0 left-0 z-100" />
        <AppSideBar />
        <Chat />
      </SidebarProvider>
    </>
  )
}

export default chat;

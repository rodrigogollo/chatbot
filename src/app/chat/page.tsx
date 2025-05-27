import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Chat from "@/components/Chat/Chat";
import AppSideBar from "@/components/AppSideBar/AppSideBar";

const chat = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="flex w-screen">
        <SidebarTrigger />
        <Chat />
      </main>
    </SidebarProvider>
  )
}

export default chat;

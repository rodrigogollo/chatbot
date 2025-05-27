import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Today</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Optimizing React Query so i can do all the things i want</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />
        <SidebarGroupLabel>Yesterday</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Optimizing React...</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />
        <SidebarGroupLabel>Last 7 days</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Optimizing React...</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />
        <SidebarGroupLabel>Last 30 days</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Optimizing React...</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <span>Teste</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSideBar

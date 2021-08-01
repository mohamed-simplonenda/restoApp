import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {  SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

function Admin() {
    return (
        <div>
<ProSidebar>
  <SidebarHeader>
    {/**
     *  You can add a header for the sidebar ex: logo
     */}

    <Menu iconShape="square">
        <MenuItem >Dashboard</MenuItem>
        <SubMenu title="Components" >
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
    </Menu>
  </SidebarHeader>
  <SidebarContent>
    {/**
     *  You can add the content of the sidebar ex: menu, profile details, ...
     */}

    <Menu iconShape="square">
        <MenuItem >Dashboard</MenuItem>
        <SubMenu title="Components" >
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
    </Menu>
  </SidebarContent>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}

    <Menu iconShape="square">
        <MenuItem >Dashboard</MenuItem>
        <SubMenu title="Components" >
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
    </Menu>
  </SidebarFooter>
</ProSidebar>

        </div>
    )
    
}
export default Admin
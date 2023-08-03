import React from 'react';
import './App.css';
import {Menu} from 'antd';
import { Route,Routes,useNavigate } from 'react-router-dom';
import{HomeOutlined,DashboardOutlined,UserOutlined, UnorderedListOutlined,PoweroffOutlined} from "@ant-design/icons/lib/icons"
//import { Footer, Header } from 'antd/es/layout/layout';


function App() {
  return (
    <div>
<Header />
<div>
  <SideMenu />
  <Content />
</div>
  <Footer />
  </div>  
  );
  }
  function Header(){
    return <div style={{display:'flex',flexDirection:'row'}}>Header</div>
  }
  function Footer(){
    return <div>Footer</div>
  }
function SideMenu(){
  const navigate=useNavigate();
  return (<div style={{display:'flex',flexDirection:'row'}}>
      <Menu 
      onClick={({key})=>{
        if(key==="signout"){

        }else{
          navigate(key);
        }
      }}
      
      items={[
        {label:"Home", key:"/",icon:<HomeOutlined/>},
        {label:"Dashboard",key:"/dashborad",icon:<DashboardOutlined/>},
        {label:"Users List",key:"/usersList",icon:<UnorderedListOutlined/>},
        {label:"Profile" ,key:"/profile",icon:<UserOutlined />},
        {label:"SignOut",key:"/signout",icon:<PoweroffOutlined/>,danger:true}
        ]}>

      </Menu>
      </div>
      );
}



function Content(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dashborad" element={<div>Dashboard</div>}></Route>
        <Route path="/usersList" element={<div>Users List</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  )
}

export default App;




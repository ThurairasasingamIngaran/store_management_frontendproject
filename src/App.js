import React from 'react';
import './App.css';
import {Menu} from 'antd';
import { Route,Routes,useNavigate } from 'react-router-dom';
import{HomeOutlined,DashboardOutlined,UserOutlined, UnorderedListOutlined,PoweroffOutlined} from "@ant-design/icons/lib/icons"

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',flex: 1, height:'100vh'}}>
<Header />
<div style={{display:'flex',flexDirection:'row',flex: 1}}>
  <SideMenu />
  <Content />
</div>
  <Footer />
  </div>  
  );
  }
  function Header(){
    return (
    <div 
    style={{
      height:60,
      background:"lightskyblue",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"bold",
}}
>
  Header
</div>
);
}
  function Footer(){
    return <div
    style={{
      height:60,
      background:"lightgray",
      color:"black",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"bold",
    }}
    >
      Footer
      </div>
  }
function SideMenu(){
  const navigate=useNavigate();
  return (
      <div style={{display:'flex',flexDirection:'row'}}>
      <Menu 
      onClick={({key})=>{
        if(key==="signout"){

        }else{
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
      
      items={[
        {label:"Home", key:"/",icon:<HomeOutlined/>},
        {label:"Dashboard",key:"/dashborad",icon:<DashboardOutlined/>},
        {label:"Users List",key:"/usersList",icon:<UnorderedListOutlined/>,
      children:[
        {label:"Active Users", key:"/activeUsers"},
        {label:"Disabled Users", key:"/disabledUsers"}
      ],
},
        {label:"Profile" ,key:"/profile",icon:<UserOutlined />},
        {label:"SignOut",key:"/signout",icon:<PoweroffOutlined/>,danger:true}
        ]}>

      </Menu>
      </div>
      );
}

function Home(){
  return <div>Home Component</div>
}

function Content(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashborad" element={<div>Dashboard</div>}></Route>
        <Route path="/activeUsers" element={<div>Active Users</div>}></Route>
        <Route path="/disabledUsers" element={<div>Disabled</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  )
}

export default App;
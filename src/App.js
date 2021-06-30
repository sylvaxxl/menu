import './App.css';
import React, { useState } from 'react';
import data from './Data';
import List from './List';
import Menus from './menus';



function App() {
const [dataItems, setDataItems] = useState(data);


const filteredMenu = (mbtn)=>{
  if(mbtn === 'All'){
    return setDataItems(data);
  }
  const newMenu = data.filter((menu)=> menu.category === mbtn);
  setDataItems(newMenu);
  
}

  const datalist =['All', ...new Set(data.map((item)=> item.category
  ))];
  

  return (
    <div className="App">  
    <h1>Menu List</h1> 
      <Menus menubtn={filteredMenu}
              menu_btn={datalist}/>
      <List dataItems={dataItems}/>
    </div>

  );
}

export default App;

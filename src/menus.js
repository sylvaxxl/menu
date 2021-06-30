import React from 'react';

const Menus = ({menubtn, menu_btn})=>{
   
    return(
        <div className="menu_btn">
            {menu_btn.map((items, index)=>{
                return <button type="button" key={index} onClick={()=> menubtn(items)}>{items}</button>
            })}
        </div>
    );
}

export default Menus;
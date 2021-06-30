import React from 'react';


const List = ({dataItems}) => {
    
    return (
        
        <div className="list">
            {dataItems.map((items)=>{
                const {id, title, price, image, description} = items;
                return (
                    <div className="item" key={id}>
                        <img src={image} alt={title}/>
                        <div className="display_body">
                            <div className="header">
                            <h4>{title}<span className="right">{price}</span></h4>
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default List;
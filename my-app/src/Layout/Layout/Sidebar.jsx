import React from "react";
import { useState } from "react"; 
    


function Sitebar (){
    let [style= {display: "none"}, setStyle] = useState();
    

    return (
        
        <div className = "sitebar">
            <button className="btn" onClick = {() => setStyle(style= {display: "block"})}>Open</button>
            <div className = "siteItem">
                <a className = "item" href = "#">
                    <img className="img" src = "https://img.icons8.com/material/2x/search--v1.png"></img>
                    <span style = {style} className="span" >Поиск</span>
                    </a>         
            </div>
            <div className = "siteItem">
                <a className = "item" href = "#">
                    <img className="img" src = "https://img.icons8.com/material/2x/home--v5.png"></img>
                    <span style = {style} className="span">На главную</span>
                    </a>         
            </div>
            <div className = "siteItem">
                <a className = "item" href = "#">
                    <img className="img" src = "https://img.icons8.com/material/2x/checked-2--v2.png"></img>
                    <span  style = {style} className="span">Заказ</span>
                    </a>         
            </div>
            <div className = "siteItem">
                <a className = "item" href = "#">
                    <img className="img" src = "https://img.icons8.com/material/2x/contacts--v1.png"></img>
                    <span style = {style} className="span">Контакты</span>
                    </a>         
            </div>
        </div> )

}

export default Sitebar

import React from "react";
import { NavLink } from "react-router-dom";

function Menu () {
    return(
        <div className = "menu">
                <nav className = "navlist">
                    <NavLink 
                    end 
                    style={({isActive}) => ({color: isActive? "red": "#FFF"})}  
                    to="/" 
                    className = "navItem">
                    Home</NavLink>
                    <NavLink 
                    end
                    style={({isActive}) => ({color: isActive? "red": "#FFF"})} 
                    to="contacts" 
                    className = "navItem">Contacts</NavLink>
                    <NavLink 
                    end
                    style={({isActive}) => ({color: isActive? "red": "#FFF"})} 
                    to="reviews" 
                    className = "navItem">Reviews</NavLink>
                </nav>
            </div>
    )

}

export default Menu
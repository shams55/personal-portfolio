import React from "react"
import { Link } from "react-router-dom"




export default function LinkItem(){

    const menuItems = [
        { id: 1, name: "Services", path: "/", class: "services"},
        { id: 2, name: "Work", path: "/", class: "work"},
        { id: 3, name: "Skills", path: "/", class: "skills"},
        { id: 4, name: "Review", path: "/", class: "review"},
        { id: 5, name: "Contact", path: "/", class: "Contact"}
    ]
    
    return(
        
                        
        <div class="rectangle-fill w-full">
            <ul className="text-right">
                {menuItems.map((menuItems, index) =>(
                <li key={menuItems.id}>
                        <Link to={menuItems.path} className="triangle" data-class={menuItems.class}>
                            {menuItems.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
                       
                   
    )
}


import React  from "react";

function NavBar(){

    const navbarItems= [
        {label:"HelloWorld" , value:"HelloWorld"},
        {label:"InfoStud", value:"InfoStud"},
        {label:"Joberty" , value:"Joberty"},
        {label:"Jooble" , value:"Jooble"}
            ]

    return (
        <nav className="container mx-auto flex justify-between items-center  rounded-md ">
            <ul className="flex flex-1 justify-between text-lg gap-2">
                {navbarItems.map((item) =>(
                    <li key={item.value} className="text-center w-full bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300"  >
                        <button className="hover:text-blue-400 transition duration-300" 
                                onClick={() => onSiteSelect(item.value)}>{item.label}
                        </button>
                    </li>
                ))}
            
            </ul>
        </nav>
    );

};

export default NavBar;
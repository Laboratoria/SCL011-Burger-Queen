import React from 'react';
import { Link } from "react-router-dom";


function Nav () {
    return (
        <div>
                <ul>
                    <li>
                    <Link to="/navigation/waiter">Meserx</Link>

                    </li>
                     <li>
                        <Link to="/navigation/kitchen">Cocina</Link>
                    </li>
                </ul>  
                    
        </div>
       
    );
}

export default Nav;
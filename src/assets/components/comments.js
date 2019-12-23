//componente comentarios 
import React, {Component} from 'react';


class Comments extends Component {
    render (){
        return (
        <div> 
            <input type="textarea" classname= "comments" id= "comments"  placeholder = "Comentarios" />
        </div>

        );
    }

}

export default Comments
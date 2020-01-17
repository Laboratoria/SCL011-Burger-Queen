import React from 'react';
import { Link } from 'react-router-dom';

class ChefTables extends React.Component {
    render() {
        return (
            <div>
                <Link to="/principal" className="btn btn-success">Mesa 1</Link>
                <Link to="/principal" className="btn btn-success">Mesa 2</Link>
                <Link to="/principal" className="btn btn-success">Mesa 3</Link>
                <Link to="/principal" className="btn btn-success">Mesa 4</Link>
                <Link to="/principal" className="btn btn-success">Mesa 5</Link>
            </div>
        );
    };
};

export default ChefTables;



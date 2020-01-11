import React from "react";

class Order extends React.Component {
    render(){
        return(
            <div>
                <div className="container" >
                    <div className = "row">
                        <div className ="col-8"> 
                        <div>
                            <h2> Desayuno</h2>
                        <button>Café americano $500</button>
                        <button>Café con leche $700</button>
                        <button>Sandwich de jamón y queso $1000</button>
                        <button>Jugo de frutas natural $700</button>
                        </div>

                        <div>
                            <h2>Hamburguesas </h2>
                        <button>Hamburguesa simple $1000</button>
                        <button>Hamburgusa doblee $1500</button>
                        </div>

                        <div>
                            <h2>Acompañamientos</h2>
                        <button>Papas fritas $500</button>
                        <button>Aros de cebolla $500</button>
                        </div>

                        <div>
                            <h2>Bebestibles</h2>
                        <button>Agua 500ml $500</button>
                        <button>Agua 750ml $700</button>
                        <button> Bebida/gaseosa 500ml $700</button>
                        <button> Bebida/gaseosa 750ml $1000</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className = "row">
                        <div className ="col-8">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
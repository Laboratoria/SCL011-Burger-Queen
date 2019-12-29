import React from 'react';
const ListOrder=(props)=>{
    let getProducts = Array.from(props.Products)
    return (
       <table>
         <thead>
           <tr>
           <td>Productos</td>
            <td>Precio</td>
           </tr>
         </thead>
         <tbody>
           { getProducts.map((element, index) => {  
            return(
            <tr key={index}>
            <td>{element.product}</td>
            <td>{element.price}</td>
          </tr>
            )
      })}
         </tbody>
       </table>
    );
  }
export default ListOrder;
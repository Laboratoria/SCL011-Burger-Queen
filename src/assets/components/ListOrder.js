import React from 'react';
const ListOrder=(props)=>{
    let getProducts = Array.from(props.Products)
    return (
        getProducts.map((element, index) => {  
            return(
            <tr key={index}>
            <td>{element.product}</td>
            <td>{element.price}</td>
          </tr>
            )
      })
    );
  }
export default ListOrder;
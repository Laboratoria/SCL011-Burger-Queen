import db from '../../firebaseInit';
const recoverOrder = (state) =>{
    return new Promise((resolve, reject)=>{
        db.collection("orders")
        .where("estado", "==", state)
        .get()
        .then(function(querySnapshot) {
        var orders = [];
        querySnapshot.forEach(function(doc) {
            let data=doc.data()
            data["id"]=doc.id
            orders.push(data)
        });
       resolve(orders)
    })
    .catch(function(error) {
        reject (new Error("No se han podido recuperar las ordenes"))
    });
        
    })
}
export default recoverOrder;
import React from 'react';
import { useState, useEffect } from 'react';

//***imposible hacer que me lea el arrays con productos ubicados en ../data/productos, aun con los mismos nombres
//que indico el profe de las varibles/funciones (getFetch, promise(res,rej),etc***
import {getItem} from '../../Data/productos'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item,setItem]=useState({})

    useEffect(() => {
        getItem
        .then(rta => setItem(rta))
    }, [])

        return (
            <div>
                <ItemDetail item={item} />
            </div>
        )
        
    } 
    

export default ItemDetailContainer;







//const onAdd = (cant) => {
    //console.log(cant)
//}

//return (
    //<div>
       // <h1> {greeting} </h1>
        //<ItemCount stock={5} initial={1} onAdd={onAdd} />
    //</div>
//)
//}


// export function ComponenteCount({ contador }) {
//     const [count, setCount] = useState(0)

//     let name = "Remera"
//     //let stock = 5;

//     const addCount = () => {
//         setCount(count + 1)
//     }

//     const subtractCount = () => {
//         setCount(count - 1)
//     }

//     return (
//         <div>
//             <p>{name}</p>
//             <p>{count}</p>
//             <button className="btn-count" onClick={subtractCount}>-</button>
//             <button className="btn-count" onClick={addCount}>+</button>
//         </div>
//     );
// }


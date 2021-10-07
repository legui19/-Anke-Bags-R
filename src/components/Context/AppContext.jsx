import {useState, createContext, useContext} from 'react'

//creación del contexto 
const AppContext = createContext()

// función para usar el contexto, me ahorro dos importaciones
export const useAppContext = () => useContext(AppContext)


// inyectar los estados y funciones globales, enmascaro provider
function AppContextProvider({children}) {

    const [product, setProducts] = useState([]);
   
    const addProduct = (item, quantity) => {

      const index = product.findIndex(i => i.item.id === item.id)//

        if (index > -1) {
          const oldQy = product[index].quantity

          product.splice(index, 1)
          setProducts([...product, { item, quantity: quantity + oldQy}])
        }
        else {
          setProducts([...product, {item, quantity}])
        }
    }


    const deleteFromCart = (item) => {
      //Verificamos si esta en el carrito   
      const deleteProduct = product.filter((prod) => prod.item.id !== item.item.id);

      setProducts([...deleteProduct]);
    };   
    
    //[1,2,3,4] Acum= 0 => 1, 1+2 =>  3+3

    const iconCart = () => {
      return product.reduce( (acum, valor)=> acum + valor.quantity, 0) 
      //return product.length
    }


    const borrarListado=()=>{
        setProducts([])
    }       

    

    const precioTotal =()=>{
      return product.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
    }

   

    // const clearCart = () => setProducts([]);
   
   
    console.log(product)

    return (
        <AppContext.Provider value={{
            product,
            addProduct,
            iconCart,
            borrarListado,
            precioTotal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


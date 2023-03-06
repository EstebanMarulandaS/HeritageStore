import React from "react";
import { useState, createContext,useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    
    
    useEffect(() => {
        if(cartProducts > 0){
            localStorage.setItem('products', JSON.stringify(cartProducts));
        }  
            
        }, [cartProducts])

    if(localStorage.getItem("products") != null && cartProducts.length === 0){
        let productStorage = JSON.parse(localStorage.getItem("products"))
        setCartProducts(productStorage)
         
      }

    
     const isInCart = (id) =>{
         const productExists = cartProducts.some((element)=>element.id === id)
         return productExists;
     }
    const addProduct = (item,quantity) =>{  
        const cartProductsCopy = [...cartProducts]
        
        if(isInCart(item.id)){
             const productPosition = cartProductsCopy.findIndex((element)=>element.id === item.id)
             cartProductsCopy[productPosition].quantity += quantity
             cartProductsCopy[productPosition].quantityPrice = cartProductsCopy[productPosition].quantity * cartProductsCopy[productPosition].price;
             setCartProducts(cartProductsCopy)
             
         }else{
            const newProduct = {
                ...item,
                quantity : quantity,
                quantityPrice : quantity * item.price,
            }
            cartProductsCopy.push(newProduct)
            setCartProducts(cartProductsCopy)
               
    }
    
}

const addItem = (id) =>{
    const copyArr = [...cartProducts]
    const productPosition = copyArr.findIndex((element)=>element.id === id);
    const newQuantity = copyArr[productPosition].quantity += 1;
    copyArr[productPosition].quantityPrice = newQuantity * copyArr[productPosition].price;
    setCartProducts(copyArr)
}

const removeItem = (id) =>{
    const copyArr = [...cartProducts]
    const productPosition = copyArr.findIndex((element)=>element.id === id);
    const newQuantity = copyArr[productPosition].quantity -= 1;
    copyArr[productPosition].quantityPrice = newQuantity * copyArr[productPosition].price;
    if(copyArr[productPosition].quantity<=1){
        copyArr[productPosition].quantity = 1;
        copyArr[productPosition].quantityPrice = copyArr[productPosition].quantity * copyArr[productPosition].price;
    } 
    setCartProducts(copyArr)
    localStorage.clear()
}


const getTotal = () =>{
    let initialValue = 0;
    const totalOperation = cartProducts.reduce((acc, curr)=> acc + curr.quantityPrice, initialValue)
    return totalOperation;
}

const getAmountOfItems = () =>{
    let initialValue = 0;
    const amountOfItems = cartProducts.reduce((acc,curr) => acc + curr.quantity, initialValue)
    return amountOfItems;
}

const emptyCart = () =>{
    localStorage.clear();
    setCartProducts([]);
    

}


    return(
        <CartContext.Provider value={{cartProducts, addProduct,getTotal,setCartProducts,getAmountOfItems,addItem,removeItem,emptyCart}}>
            {children}           
        </CartContext.Provider>
    )
}
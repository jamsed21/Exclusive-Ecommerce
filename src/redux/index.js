//Add items to cart

export const cardAdd = (product) =>{
    return {
        type : "ADDITEM",
        payload : product
    }
}


//Delete items

export const deleteCart = (product) =>{
    return {
        type : "DELITEM",
        payload : product
    }
}
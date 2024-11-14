
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if(!storedList.includes(id)){
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        
    }
}




const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if(!storedList.includes(id)){
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

const removeCartFromLS = id => {
    const cart = getStoredCartList();
    const remainingCart = cart.filter(idx => idx !== id);
    localStorage.setItem('cart-list', JSON.stringify(remainingCart));
}
const removeWishFromLS = id => {
    const wish = getStoredWishList();
    const remainingWish = wish.filter(idx => idx !== id);
    localStorage.setItem('wish-list', JSON.stringify(remainingWish));
}



export {addToStoredCartList,getStoredCartList, getStoredWishList, addToStoredWishList, removeCartFromLS, removeWishFromLS};
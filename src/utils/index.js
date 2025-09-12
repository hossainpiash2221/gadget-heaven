import { toast } from "react-toastify";

const getAllCarts = (cart) =>{
    const all = localStorage.getItem(cart);

    if(all){
        const carts = JSON.parse(all);
        console.log(carts);
        return carts;
    }else{
        console.log([]);
        return []
    }
}



const addCard = product =>{
   const carts = getAllCarts('carts');
   const isExist = carts.find(cart => cart.product_id == product.product_id);
   if(isExist){
    return toast.error('Already Added', {
      position: 'top-center',
    });
   }
   carts.push(product);
   localStorage.setItem('carts',JSON.stringify(carts));
    toast.success('Succesfully added to cart', {
      position: 'top-center',
    });
      window.dispatchEvent(new Event("cartUpdated"));

}

const addWishCard = product =>{
   const carts = getAllCarts('wishCarts');
   const isExist = carts.find(cart => cart.product_id == product.product_id);
   if(isExist){
    return toast.error('Already Added', {
      position: 'top-center',
    });
   }
   carts.push(product);
   localStorage.setItem('wishCarts',JSON.stringify(carts));
    toast.success('Succesfully added to Wishcart', {
      position: 'top-center',
    });
    window.dispatchEvent(new Event("wishUpdated"));

}




export {addCard,getAllCarts,addWishCard};
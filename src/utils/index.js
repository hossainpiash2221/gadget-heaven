import { toast } from "react-toastify";

const getAllCarts = () =>{
    const all = localStorage.getItem('carts');

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
   const carts = getAllCarts();
   const isExist = carts.find(cart => cart.product_id == product.product_id);
   if(isExist){
    return toast.error('Already Added', {
      position: 'top-center',
    });
   }
   carts.push(product);
   localStorage.setItem('carts',JSON.stringify(carts));
    toast.success('Succesfully added', {
      position: 'top-center',
    });

}



export {addCard};
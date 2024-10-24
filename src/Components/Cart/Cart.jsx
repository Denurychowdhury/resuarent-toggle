/* eslint-disable react/prop-types */

const Cart = ({ product,handleRemoveToCart }) => {
    const { recipe_image,recipe_id } = product;
    // console.log(product);
    return (
        <div className="p-3 border-2 rounded-xl space-y-2">
            <img className="w-32 rounded-xl" src={recipe_image} alt="" />
            <button onClick={()=>handleRemoveToCart(recipe_id)} className='px-4 py-2 w-full rounded-2xl bg-red-500 text-white text-xl font-normal'>Remove</button>
        </div>
    );
};

export default Cart;
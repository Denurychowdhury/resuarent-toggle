/* eslint-disable react/prop-types */

const Product = ({product,handleAddToCart}) => {
    const { recipe_id, calories, preparing_time, short_description, recipe_image, recipe_name } = product;
    return (
        <div className="">
            <div className="border-2 p-3 rounded-xl space-y-3">
                <img className="h-56 w-full" src={recipe_image} alt="" />
                <div className="">
                    <h2 className="text-2xl font-bold">{recipe_name}</h2>
                    <h3 className="text-xl font-bold text-gray-400">id: {recipe_id} </h3>
                    <p>it is: {short_description}</p>
                    <div>
                    <h2>In this: {calories} calories </h2>
                    <h2>Needed Time: {preparing_time} minute</h2>
                    </div>
                </div>
                <button onClick={()=>handleAddToCart(product)} className='px-4 py-3 rounded-2xl bg-red-500 text-white text-xl font-normal'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
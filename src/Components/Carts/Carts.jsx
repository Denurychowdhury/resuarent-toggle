/* eslint-disable react/prop-types */

import About from '../About/About';
import Cart from '../Cart/Cart';

const Carts = ({ carts,handleHideClick,isActive,handleRemoveToCart,deletecart}) => {
    return (
        <div className='lg:w-1/3 w-full text-center border-2'>
            <h1 className='text-3xl font-bold'>Cart-container</h1>
            <div className='flex items-center justify-center gap-3 my-3'>
                <button onClick={() =>handleHideClick('cart')} className={`${isActive.cart?'active unactive':'unactive'}`}>Cart</button>
                <button onClick={() =>handleHideClick('about')} className={`${isActive.cart?'unactive':'active unactive'}`}>About</button>
            </div>
            <div>
                {isActive.cart ?
                    <div className='grid grid-cols-3 items-center gap-1 mt-2'>
                        {
                            carts.map((product, idx) => <Cart key={idx} product={product} handleRemoveToCart={handleRemoveToCart} deletecart={deletecart}></Cart>)
                        }
                    </div>
                :   
                <div className='grid grid-cols-1 gap-2 mx-4'>
                        {
                            carts.map((product, idx) => <About key={idx} product={product}></About>)
                        }
                </div>
            }
            </div>
        </div>
    );
};

export default Carts;
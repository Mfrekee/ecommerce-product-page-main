import { useState } from 'react'
import './App.css'
import Attribution from './components/attribution'
import CartButton from './components/cart-button'
import Navbar from './components/navbar'
import Slideshow from './components/product-images'
import Description from './components/description'
import Price from './components/price'
import Quantity from './components/quantity'

const App: React.FC = () => {
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [resetQuantity, setResetQuantity] = useState(false);
    return (
        <>
            <Navbar productQuantity={productQuantity} setProductQuantity={setProductQuantity} />
            <div className="lg:flex items-center">
                <Slideshow />
                <div className='lg:w-5/12 mx-5'>
                    <Description />
                    <Price />
                    <div className="block lg:flex items-baseline">
                        <Quantity count={productQuantity} setCount={setProductQuantity} reset={resetQuantity} setReset={setResetQuantity} />
                        <CartButton productQuantity={productQuantity} />
                    </div>
                </div>
            </div>
            <Attribution />

        </>
    )
}

export default App

import '/src/index.css'

function Price() {
    return (
        <div className='flex justify-between mx-5 lg:block'><div className="discount-price flex justify-between items-center gap-2 font-bold lg:justify-normal"><h2 className='text-2xl'>$125.00</h2><p className="bg-black text-white rounded-lg px-2 ">50%</p></div>
            <div className="font-semibold original-price line-through text-gray-500">$250.00</div></div>
    )
}

export default Price
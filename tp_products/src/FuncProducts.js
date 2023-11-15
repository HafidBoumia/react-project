import React,{useEffect, useState} from "react";
import axios from "axios";

export default function F_handleProducts(){
    const [Data, setData] = useState([])
    const [inptValue, setinptValue] = useState('')
    
    const handleData = async() =>{
        const getData = await axios.get('https://dummyjson.com/products/search?q='+inptValue)
        setData(getData.data.products)
    }
    const onChange = (e)=>{
        const inptV = e.target.value 
        setinptValue(inptV)
    }
    const pressEntr = (event) => {
        if(event.which === 13){
            handleData()
        }
    }
    return (
        <div>
            <div className='fixed top-0 left-0 right-0 bg-indigo-900 mt-auto flex justify-center py-4 space-x-5 items-center'>
                    <input type='text' placeholder="Search" onChange={onChange} onKeyDown={pressEntr} className=' px-2 py-4 w-2/5 placeholder-white bg-indigo-300 border border-gray-900 rounded-md h-8'/>
                    <button onClick={handleData} className='bg-indigo-600 px-7 py-1 rounded-lg text-white hover:bg-indigo-500'>search</button>
            </div>
            <div className='my-16 bg-gradient-to-r from-blue-200 to-teal-50'>
                <div className='grid grid-cols-3 gap-4 place-items-center'>
                {Data.map(elements => (
                    <div key={elements.id} className='h-screen w-72 rounded-md flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-500 to-sky-300 my-5'>
                        <div className='px-2 py-2'>
                            <img className='w-72 h-60 rounded-md' src={ elements.thumbnail } />
                        </div>
                        <div className='px-3 py-3'>
                            <h2 className='uppercase text-stone-300 font-bold text-xl hover:text-lime-400 hover:text-2xl cursor-pointer pb-3'>{elements.title}</h2>
                            <p className="font-medium pb-4 text-slate-100">{elements.description}</p>
                            <p className="text-slate-100 font-serif"><span className="font-bold text-lg text-lime-600 pr-2 font-sans">Price :</span> {elements.price}</p>
                            <p className="text-slate-100 font-serif"><span className="font-bold text-lg text-lime-600 pr-2 font-sans">Discount :</span> {elements.discountPercentage}</p>
                            <p className="text-slate-100 font-serif"><span className="font-bold text-lg text-lime-600 pr-2 font-sans">Rating :</span> {elements.rating}</p>
                            <p className="text-slate-100 font-serif"><span className="font-bold text-lg text-lime-600 pr-2 font-sans">Stock :</span> {elements.stock} units</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        )

    
}
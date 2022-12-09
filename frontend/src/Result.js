import React,{useState} from 'react'
import well from './well.png'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const Navigate = useNavigate();
    const logout = () => {
      localStorage.clear();
      Navigate('/');
    
    }
    return (
        <div className='w-full md:flex  justify-center pt-[170px] gap-[100px] h-[1200px] md:h-[730px] bg-green-300'>

            <div>
                <img src={well} className="ml-[120px]  w-[400px] h-[400px] " />
            </div>
            <div className='ml-[150px] mt-[40px] font-bold text-4xl '>
                <div className='text-3xl'>Congrats! You Won:<br/><br/>
                    <span className='text-4xl '>20% Off Coupon <br/>on Best Sellers</span>
                </div>
                <div className='flex'>
                 <div className='w-[300px] m-5 h-[50px] pl-[50px] pt-[5px] text-white text-3xl bg-[#14141433]'>
                 XAXPDF20
                 </div>
                 <button className='text-lg text-white bg-[#146531] px-[20px] my-[20px] ml-[-20px] '>Copy</button>
                </div>
               
                <div className='mt-[10px]' >
                    <button onClick={logout} className='bg-[#146531] flex  rounded-full text-xl text-white px-[110px] py-[12px] '>Close Panel & Copy</button>
                </div>
                <div className='text-xs text-gray-500 mt-[10px] '>
                *You can claim your coupon for 10 minutes only!
                </div>
              
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import well from './well.png'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [Name, setName] = useState("");

    const Navigate = useNavigate;
    useEffect(() => {
      const auth = localStorage.getItem('User');
      if(auth){
        Navigate('/spin')
      }
    })

    const collectdata = async ()=>{
        console.warn(Name)
        let result = await fetch('http://localhost:5000/register',{
        method : 'post',
        body: JSON.stringify({Name}),
        headers:{
          'Content-Type': 'application/json'
        },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("User", JSON.stringify(result));
        Navigate('/spin')
    
      }
    return (
        <div className='w-full md:flex  justify-center pt-[170px] gap-[100px] h-[1200px] md:h-[730px] bg-green-300'>

            <div>
                <img src={well} className="ml-[120px]  w-[400px] h-[400px] " />
            </div>
            <div className='ml-[150px] mt-[40px] font-bold text-4xl '>
                <div>This is how EngageBud <br />looks like in action</div>
                <div>
                    <div className='bg-white flex w-[400px] mt-[50px] rounded-lg h-[50px]'>
                        <div className='p-3'>
                            <AiOutlineMail size={25} />
                        </div>
                        <div className='text-sm text-gray-400 font-normal '>
                            <div>Email</div>
                            <input className='text-black placeholder-black border border-white' placeholder='joe@gmail.com' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white flex w-[400px] mt-[10px] rounded-lg h-[50px]'>
                        <div className='p-3'>
                            <BiPhone size={25} />
                        </div>
                        <div className='text-sm text-gray-400 font-normal '>
                            <div>Phone number</div>
                            <input className='text-black placeholder-black border border-white' placeholder='+91 98256 XXXXX' />
                        </div>
                    </div>
                </div>
                <div className='border text-xs font-light border-black flex w-[400px] mt-[10px] rounded-lg h-[50px]'>
                    <input 
                     value={Name} onChange={(e)=>setName(e.target.value)}
                    id="default-checkbox" type="checkbox" class="mt-[15px] ml-[10px] w-4 h-4 text-blue-600 bg-black rounded border-gray-300" />
                    <label className='m-2'>I agree to receiving recurring automated messages at the number I have provided.
                        Consent is not a condition to purchase. </label>
                </div>
                <div className='mt-[10px]' >
                    <button onClick={collectdata} className='bg-[#146531] flex  rounded-full text-xl text-white px-[140px] py-[12px] '><a href='/spin'> Try Your Luck </a></button>
                </div>
                <div className='text-xs text-gray-500 mt-[10px] '>
                *You can spin the wheel only once!<br/> *If you win, you can claim your coupon for 10 minutes only!
                </div>
                <div className='text-xl pt-[10px] ml-[190px]'>
                No, I don’t feel lucky <span className=''>X</span>
                </div>
            </div>
        </div>
    )
}

export default Home
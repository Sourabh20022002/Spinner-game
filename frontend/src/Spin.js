import React, { useState } from 'react'
import { GiSpineArrow } from 'react-icons/gi'
import {useNavigate} from 'react-router-dom'

const Spin = () => {
    const navigate = useNavigate();
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
        navigate('/result');
    };
    return (
        <div className='w-full md:px-[590px] px-[130px] pt-[80px]  md:pt-[90px] space-y-[10px] h-[720px] md:h-[730px] bg-green-300'>
            <div className='  w-[400px] h-[400px]  '>
                <div className={isActive ? null : "animate-spin"} >
                    <div className='border-4  border-[#ECBA3F] bg-[#E50101] w-[180px] h-[180px] ml-[100px] mt-[-42px]  rotate-45 rounded-tl-full'>
                        <div className='text-white pt-[20px] ml-[50px] -rotate-45'>30%<br />
                            SITEWIDE<br />
                            OFF</div>
                    </div>
                    <div className='border-4 border-[#ECBA3F] bg-[#EFEFD1] w-[180px] h-[180px] ml-[-22px] mt-[-57px]  -rotate-45 rounded-tl-full'>
                        <div className='text-black pt-[60px] mr-[20px] ml-[50px] -rotate-45'>HOT CHOCLATE
                            FREE
                            WITH TEA</div>
                    </div>
                    <div className='border-4 border-[#ECBA3F] bg-[#E50101] w-[180px] h-[180px] ml-[100px] mt-[-57px]  -rotate-45 rounded-bl-full'>
                        <div className='text-white pt-[-90px] ml-[50px] -rotate-90'>Free 50g tea<br />
                            on
                            purchase<br />
                            of
                            Rs. 500</div>
                    </div>
                    <div className='border-4 border-[#ECBA3F] bg-[#EFEFD1] w-[180px] h-[180px] ml-[223px] mt-[-304px]  rotate-45 rounded-tr-full'>
                        <div className='text-black pt-[70px] mr-[20px] ml-[40px] rotate-45'> Buy 2
                            Effervescent
                            tablets &
                            get
                            1 free
                        </div>
                    </div>
                </div>
                <div className='animate-none mt-[-90px] ml-[-30px]'>
                    <GiSpineArrow className='text-black  -rotate-45' size={40} />
                </div>
                <div className='relative mt-[-35px] ml-[-50px]  bg-black w-[30px] rounded-full h-[30px]'>

                </div>
            </div>
            <div className='ml-[120px] font-bold text-white pt-[30px]'>
                <button onClick={handleToggle} className='bg-[#146531] rounded-full px-[70px] py-3'>{isActive ? 'Spin' : 'Stop'}</button>
            </div>
        </div>
    )
}

export default Spin
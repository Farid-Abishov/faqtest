import userImg from '../../assets/icons/user-rounded.svg'
import plusImg from '../../assets/icons/plus.svg'
import mobnav from '../../assets/icons/mobnav.svg'
export default function Header({addBtnText,userName,handleContainer}){
    // import { useState } from 'react' 
    // const [container,setContainer]=useState(false);
    // function handleContainer(){
    //     setContainer(!container)
    // }
    // onClick={handleContainer} 
    return <header className="bg-white  py-4 px-6 ">
    <div className="flex items-center justify-end max-[765px]:justify-around ">
        <div className="flex gap-3 w-full justify-end max-[765px]:justify-between  ">
        <img src={mobnav} alt="" className='hidden max-[765px]:block' />
        <button   className="bg-custom-red text-white rounded-md w-addbtn p-2 flex gap-2 justify-center"> 
            <img src={plusImg} alt="" className='h-full'/> 
            <span >{addBtnText}</span>
       </button>
        <span className=" flex  gap-1 text-sm font-poppin text-black  border-2  bg-transparent rounded-md  p-2">
            <img src={userImg} alt="" />
            {userName}
        </span>
        </div>
    </div>
 </header>
}
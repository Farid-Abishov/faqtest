import logo from '../../assets/images/Group1.png'
import headericon from '../../assets/icons/Frame21.svg'
import ntficon from '../../assets/icons/Frame26.svg'
import QuestItem from '../../components/frquestions/QuestItem'
import ProfileContent from '../../components/profile/profileContent'
// import ProfileModal from '../../components/profile/profileModal'
import { useState } from 'react'


export default function FrQuestionsPage(){
    const [profileState,setProfilState]=useState(false);

    function handleProfile(){
        setProfilState(!profileState)
    }
    

    return  <div className='bg-body-bg'>
         <header className='flex  justify-between h-header-h max-w-header-w shadow-custom-shadow px-5 bg-white '>
         <div className="flex flex-row   justify-center items-center align-center my-4">
                <h1 className=' m-0  md:text-lg lg:text-xl xl:text-3xl  font-semibold font-title text-header-black '>FAQ Support</h1>
                <img src={logo} alt="logo" className='h-full ' />
        </div>
        <div className="icon_box mt-5 flex justify-center items-center align-center gap-x-3 relative	">
            <img src={ntficon} alt="" />
            <img src={headericon} alt="" onClick={handleProfile}  className='hover:cursor-pointer'/>
            {profileState ? <ProfileContent/> : null}   
        </div>
     </header>
     <div className="max-w-frbox-w h-frbox-h   mx-auto p-5 mt-5  bg-white shadow-custom-shadow  rounded-md ">
         <p className='text-center max-h-frbox-h text-4xl my-4 font-poppin'>Sualınızı daxil edin</p>
         <input type="search" placeholder='Sual verin və ya açar sözlə axtarın' className='w-full  border-2 block  mx-auto  border-input-border  rounded-md  outline-none px-4 py-2 text-custom-black ' />
         <p className='font-poppin my-5'>Ən çox axtarılan suallar</p>
         <div className="flex flex-wrap	justify-around  h-item-h overflow-scroll overflow-x-auto gap-3 ">
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>
            <QuestItem/>    
         </div>
     </div>
      

      {/* Modal'ı render ediyoruz */}
     
    </div>
    
}
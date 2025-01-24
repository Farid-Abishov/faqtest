import { Link } from "react-router-dom"
import { useState } from "react";
import ProfileModal from '../../components/profile/profileModal';
import CancelIcon from '../../assets/icons/cancel.png';
import ProfileIcon from '../../assets/icons/profile.png';
import changePassword from "./changePassword";
export default function ProfileContent(){
  const [changePassword,setChangePassword]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

   function handlePasswordState(){
   setChangePassword(true)
  }
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    return <div className="salam absolute bg-body-bg p-2 rounded-md w-profile-w h-profile-h top-75px">
        <ul className="h-full flex flex-col justify-between">
            <li onClick={openModal} className="font-entry-title hover:cursor-pointer" >Profil</li>
            <hr />
            <li className="font-entry-title">
                <Link to='/questions'> İdare etmə panel</Link>
            </li>
            <hr />
            <li className="font-entry-title">
                <Link to='/' >Çıxış</Link>
            </li>
            <hr />
        </ul>

      <ProfileModal isOpen={isModalOpen} >
        <div className="flex  justify-between">
            <span className="font-poppin font-medium text-lg">Profil</span>
             <img src={CancelIcon} onClick={closeModal}  alt="" className="hover:cursor-pointer" />
        </div>
        <div className="flex flex-col justify-center items-center	">
           <img src={ProfileIcon} alt="" className="w-30" />
            <p className="font-poppin my-3"> şəkil yüklə</p>
        </div>
        <div className="profile_form_inputs text-center	">
            <input type="text" className=" w-full  p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Ad" />
            <input type="email" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="E-Poçt" />
            <input type="password" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Şifrə" />
            <input type="text" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Son aktiv tarix" />
            <input type="text" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Çağrı mərkəzi" />
            <input type="text" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Müştəri əlaqələri və marketinq" />
        {!changePassword ? <Link className="block  text-end underline font-poppin" onClick={handlePasswordState}>Şifrəni dəyiş</Link> :''}
        </div>
         {changePassword ? <changePassword>
         <input type="password" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Köhnə Şifrə" />
        <input type="password" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Yeni Şifrə" />
        <input type="password" className="w-full p-2 my-2  outline-none border-2  rounded border-input-border " placeholder="Yeni Şifrə təkrarı" />
         </changePassword> :null}
        <button className= 'block mx-auto w-profile_input_btn bg-custom-red text-white rounded-md h-10 mt-3 '>Yadda Saxla</button>

      </ProfileModal>
    </div>
}
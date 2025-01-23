import Bin from '../../assets/icons/Bin.svg'
import Edit from '../../assets/icons/Edit.svg'
import CancelIcon from '../../assets/icons/cancel.png'
import ProfileModal from '../profile/profileModal'
import { useState } from 'react'
export default function TagManageTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return <div className="faq-management">
        <p className='p-3'>Suallar</p>
        <hr />
        <div className="controls p-3 w-full">
            <div className="search-filter w-full">
                <input
                    type="search"
                    placeholder="Axtarış"
                    className="search-input w-full" />
            </div>
        </div>
        <table className="faq-table">
            <thead>
                <tr>
                    <th>Teqlər</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >Bizimlə irəliləyin: müasir həllər, sürətli nəticələr</td>
                  
                    <td className='flex gap-5 justify-end'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={Bin} alt="" />
                        <img src={Edit} alt="" onClick={openModal} />
                    </td>
                </tr>
                <tr>
                    <td >Bizimlə irəliləyin: müasir həllər, sürətli nəticələr</td>
                  
                    <td className='flex gap-5 justify-end'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={Bin} alt="" />
                        <img src={Edit} alt="" onClick={openModal} />
                    </td>
                </tr>
                <tr>
                    <td >Bizimlə irəliləyin: müasir həllər, sürətli nəticələr</td>
                  
                    <td className='flex gap-5 justify-end'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={Bin} alt="" />
                        <img src={Edit} alt="" onClick={openModal} />
                    </td>
                </tr>
                <tr>
                    <td >Bizimlə irəliləyin: müasir həllər, sürətli nəticələr</td>
                  
                    <td className='flex gap-5 justify-end'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={Bin} alt="" />
                        <img src={Edit} alt="" onClick={openModal} />
                    </td>
                </tr>
                <tr>
                    <td >Bizimlə irəliləyin: müasir həllər, sürətli nəticələr</td>
                  
                    <td className='flex gap-5 justify-end'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={Bin} alt="" />
                        <img src={Edit} alt="" onClick={openModal} />
                    </td>
                </tr>
                <tr>
                    <td >Bizimlə irəliləyin: müasir həllər, sürətli nəticələr</td>
                  
                    <td className='flex gap-5 justify-end'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={Bin} alt="" />
                        <img src={Edit} alt="" onClick={openModal} />
                    </td>
                </tr>

               

                <ProfileModal isOpen={isModalOpen} >
                    <div className="flex  justify-between">
                        <span className="font-poppin font-medium text-lg">Yeni teq</span>
                        <img src={CancelIcon} onClick={closeModal} alt="" />
                    </div>
                    <div className="flex flex-col justify-center 	">
                        <div >
                            <div className='mt-2 '>
                                <input type='text' placeholder='Teq əlavə edin'  className='w-full  my-2  rounded-lg  bg-input-border p-2 outline-none'/>
                            </div>
                            <button className='block mx-auto w-profile_input_btn bg-custom-red text-white rounded-md h-10 mt-6'>Yadda Saxla</button>
                        </div>
                    </div>

                </ProfileModal>
            </tbody>
        </table>
    </div>
}
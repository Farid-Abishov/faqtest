import './usertable.css'
import Bin from '../../assets/icons/Bin.svg'
import Edit from '../../assets/icons/Edit.svg'
import CancelIcon from '../../assets/icons/cancel.png'
import Refresh from '../../assets/icons/Refresh.svg'
import ProfileModal from '../profile/profileModal'
import {getUserList} from '../../Api/user/index'
import {changeUserStatus} from '../../Api/user/index'
import { useState, useEffect } from 'react'

export default function UserManageTable() {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const UserList = async () => {
        setLoading(true);
        setError("");
        try {
          const response = await getUserList();
          setUserList(response.data.data)
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        UserList()
      }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateStatus=async (id)=>{
        setUserList(userList.map(user=>{
            if(user.id===id){
                return {
                    ...user,
                    is_active:user.is_active===1 ? 0 : 1
                }
            }
            return user;
        }))
        changeUserStatus(id)
    }
    
    
    return (
        <div className="faq-management">
            <p className="p-3">Suallar</p>
            <hr />
            <div className="controls p-3 ">
                <div className="search-filter w-full">
                    <input
                        type="search"
                        placeholder="Axtarış"
                        className="search-input w-qstnmngInput"
                    />
    
                    <select name="" id="" className="border-2 rounded-lg text-gray-400 select outline-none">
                        <option value=""  >Status</option>
                        <option value="">Ok</option>
                        <option value="">No</option>
                    </select>
    
                    <select name="" id="" className="border-2 rounded-lg text-gray-400 select outline-none">
                        <option value="" >Kateqoriya</option>
                        <option value="">Marketing</option>
                        <option value=""></option>
                    </select>
    
                    <img src={Refresh} alt="" />
                </div>
            </div>
    
            {loading ? (
                <p className="text-center text-gray-500">Yüklənir...</p> // Loading message
            ) : error ? (
                <p className="text-center text-red-500">{error}</p> // Display error message
            ) : userList && userList.length > 0 ? ( // Render table only if data exists and isn't empty
                <table className="faq-table">
                    <thead>
                        <tr>
                            <th>İstifadəçi</th>
                            <th>Son aktiv tarix</th>
                            <th>Xal</th>
                            <th>Kateqoriya</th>
                            <th>Alt Kateqoriya</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.last_login_date}</td>
                                <td>{item.score}</td>
                                <td>{item.department.parent.title}</td>
                                <td>{item.department.title}</td>
                                <td className="flex gap-5 justify-end">
                                    <label className="switch">
                                        <input type="checkbox"  checked={item.is_active===1} onChange={()=>updateStatus(item.id)}  />
                                        <span className="slider"></span>
                                    </label>
                                    <img src={Bin} alt="" />
                                    <img src={Edit} alt="" onClick={openModal} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">İstifadəçi yoxdur</p> 
            )}
    
            <ProfileModal isOpen={isModalOpen}>
                <div className="flex justify-between">
                    <span className="font-poppin font-medium text-lg">Düzəliş</span>
                    <img src={CancelIcon} onClick={closeModal} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <p className="text-left">Sual</p>
                        <p className="bg-input-border rounded-lg p-2">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <div className="mt-2">
                            <p>Sual Kateqoriyası</p>
                            <select name="kateqoriya" id="kateqoriya" className="my-2 w-full rounded-lg bg-input-border p-4 outline-none">
                                <option value="Data analitics">Data analitics</option>
                                <option value="Frontend Developers">Frontend Developers</option>
                            </select>
                        </div>
                        <div className="mt-2">
                            <p>Teqlər</p>
                            <select name="kateqoriya" id="kateqoriya" className="my-2 w-full rounded-lg bg-input-border p-4 outline-none">
                                <option value="Tag1">Tag1</option>
                                <option value="Tag2">Tag2</option>
                            </select>
                        </div>
                        <div className="mt-2">
                            <p>Cavab</p>
                            <p className="my-2 w-full rounded-lg bg-input-border p-4 outline-none">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                            </p>
                        </div>
                        <button className="block mx-auto w-profile_input_btn bg-custom-red text-white rounded-md h-10 mt-3">Yadda Saxla</button>
                    </div>
                </div>
            </ProfileModal>
        </div>
    );
    
}
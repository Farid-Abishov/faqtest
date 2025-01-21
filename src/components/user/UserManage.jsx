import './usertable.css'
import Bin from '../../assets/icons/Bin.svg'
import Edit from '../../assets/icons/Edit.svg'
import CancelIcon from '../../assets/icons/cancel.png'
import Refresh from '../../assets/icons/Refresh.svg'
import ProfileModal from '../profile/profileModal'
import { useState, useEffect } from 'react'
// import api from '../../Api/apiconfig'
import { userLoad } from '../../Api/user';

export default function UserManageTable() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await userLoad(); // Call the API
                setData(data);  // Set data to state
            } catch (err) {
                setError(err.message); // Display error message
            } finally {
                setLoading(false);
            }
        };
    
        fetchData(); // Execute the async function
    
        // Optional cleanup function for unmounting
        return () => {
            setLoading(false);
            setError('');
        };
    }, [])


    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="faq-management">
            <p className="p-3">Suallar</p>
            <hr />
            <div className="controls p-3 ">
                <div className="search-filter">
                    <input
                        type="search"
                        placeholder="Axtarış"
                        className="search-input w-qstnmngInput"
                    />
    
                    <select name="" id="" className="border-2 rounded-lg text-gray-400 select outline-none">
                        <option value="" selected>Status</option>
                        <option value="">Ok</option>
                        <option value="">No</option>
                    </select>
    
                    <select name="" id="" className="border-2 rounded-lg text-gray-400 select outline-none">
                        <option value="" selected>Kateqoriya</option>
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
            ) : data && data.length > 0 ? ( // Render table only if data exists and isn't empty
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
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.company.name}</td>
                                <td className="flex gap-5 justify-end">
                                    <label className="switch">
                                        <input type="checkbox" />
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
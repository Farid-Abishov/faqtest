import Header from '../../components/header/header'
import UserManageTable from '../../components/user/UserManage'
export default function UserPage(){
    return <div className="flex flex-col flex-1 bg-body-bg h-screen">
           <Header addBtnText='Yeni istifadəçi' userName='Ayxan' />
           <div className="p-5 "> 
           <div className='text-justify bg-white overflow-y-scroll  rounded-2xl h-container-h shadow-custom-shadow'>
             <UserManageTable/> 
           </div>
        </div>
    </div>
}
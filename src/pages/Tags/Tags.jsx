import Header from '../../components/header/header' 
import TagManageTable from '../../components/tag/TagManage'
export default function TagPage() {
    return <div className="flex flex-col flex-1 bg-body-bg h-screen">
        <Header addBtnText='Yeni teq' userName='Ayxan' />
        <div className="p-5 ">
            <div className='text-justify bg-white  rounded-2xl h-container-h p-4 shadow-custom-shadow overflow-scroll'>
               <TagManageTable/>
            </div>
        </div>
    </div>
}
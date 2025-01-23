import Header from '../../components/header/header' 
import QuestionManageTable from '../../components/question/QuestionManage'
export default function QuestionPage(){
    
    return <div className=" flex flex-col flex-1 bg-body-bg h-screen
 ">
        <Header addBtnText='Yeni sual' userName='Ayxan' />
        <div className="p-5 "> 
           <div className='text-justify bg-white  rounded-2xl h-container-h  shadow-custom-shadow overflow-scroll' >
              <QuestionManageTable/>
           </div> 
        </div>
    </div>
}
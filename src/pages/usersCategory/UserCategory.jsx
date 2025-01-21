import Header from '../../components/header/header'
import CategoryImg  from '../../assets/icons/QuestionCategoryImg.svg'
export default function UserCategoryPage(){
    return <div className="flex flex-col flex-1 bg-body-bg">
           <Header addBtnText='Yeni kateqoriya' userName='Ayxan' />
             <div className="p-5 ">
                 <div className='flex gap-2  flex-wrap	  text-justify bg-white p-4 rounded-2xl h-container-h shadow-custom-shadow
                       max-[765px]:justify-center '>
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
           
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
           
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
           
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
                   <div>
                     <img src={CategoryImg} alt=""/>
                   </div>
                 </div>
               </div>
    </div>
}
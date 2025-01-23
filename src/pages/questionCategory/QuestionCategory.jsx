import Header from '../../components/header/header'
import CategoryImg from '../../assets/icons/QuestionCategoryImg.svg'
export default function QuestionCategoryPage() {
  return <div className=" flex flex-col flex-1 bg-body-bg h-screen ">
    <Header addBtnText='Yeni sual' userName='Ayxan' />
    <div className="p-5 ">
      <div className='flex gap-1 flex-wrap	  overflow--yscroll   text-justify bg-white p-4 rounded-2xl h-container-h shadow-custom-shadow
            max-[765px]:justify-center  '>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>
        <div>
          <img src={CategoryImg} alt="" className='w-img'/>
        </div>

       
      </div>
    </div>
  </div>
}
    import { Link } from "react-router-dom"
    import logo from '../../assets/images/Group1.png'
    export default function MainNavigation(){
        return <>
        <aside className=" min-h-screen	 float-start  w-aside-w  p-2 border-2  border-r-gray-200 max-[765px]:hidden">
            <div className="flex flex-row  align-center items-center my-4">
                    <h1 className=' text-xl m-0  font-semibold font-title text-header-black'>FAQ Support</h1>
                    <img src={logo} alt="logo"  className="w-12 "/>
             </div>
          <ul className="flex flex-col gap-5 p-3" >
            <li><Link to='/questions'>Suallar</Link></li>
            <li><Link to='/questionscategory'>Sual Kateqoriyaları</Link></li>
            <li><Link to='/users'>istifadəçilər</Link></li>
            <li><Link to='/userscategory'>istifadəçi Kateqoriyaları</Link></li>
            <li><Link to='/tag'>Teqlər</Link></li>
            <li><Link to='/quiz'>Quiz</Link></li>
          </ul>
        </aside>
        </>
    }
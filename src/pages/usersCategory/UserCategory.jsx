import Header from '../../components/header/header'
import CategoryItem from '../../components/categoryItem.jsx/categoryItem'
import { getDepartmentList } from '../../Api/department/department';
import { useEffect,useState } from 'react';
export default function UserCategoryPage(){
       const [departments, setDepartments] = useState([]);
       const [error, setError] = useState("");
       const [loading, setLoading] = useState(false);

     
      useEffect(() => {
        const DepartmentList = async () => {
          setLoading(true);
          setError("");
          try {
            const response = await getDepartmentList();
            setDepartments(response.data.data)
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        DepartmentList()
         
      }, [])
      return <div className="flex flex-col flex-1 bg-body-bg h-screen">
           <Header addBtnText='Yeni kateqoriya' userName='Ayxan' />
             <div className="p-5 ">
                 <div className='flex gap-1  flex-wrap overflow-y-scroll	  text-justify bg-white p-4 rounded-2xl h-container-h shadow-custom-shadow
                       max-[765px]:justify-center '>
                  {departments.map(department=>
                  <CategoryItem key={department.id} {...department}/> 
                  )}
                 </div>
             </div>
    </div>
}
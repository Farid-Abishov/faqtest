import { Link } from "react-router-dom"
export default function NewQuestion(){
    return <div className="w-full  mx-auto p-4">
  <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-medium">Yeni sual</h1>
        <Link href="/" className="font-poppin flex items-center text-sm text-muted-foreground hover:text-foreground">
          Geriye
        </Link> 
      </div>
      <hr />
        <form action="" className="space-y-6 mt-3">

        <div className="grid grid-cols-[300px,1fr] items-center gap-4">
          <label className="text-sm font-poppin ">Sual</label>
          <input placeholder="Sual daxil edin" className="outline-none bg-gray-100 p-5 rounded-md"/>
        </div>

        <div className="grid grid-cols-[300px,1fr] items-center gap-4">
          <label className="text-sm font-poppin ">Sual Kateqoriyası</label>
          <input placeholder="Kateqoriya daxil edin" className="outline-none bg-gray-100 p-2 rounded-md"/>
        </div>

        <div className="grid grid-cols-[300px,1fr] items-center gap-4">
          <label className="text-sm font-poppin ">Teqlər</label>
         <select name="" id="" className="outline-none bg-gray-100 p-2 rounded-md">
            <option value="">Tag1</option>
            <option value="">Tag2</option>
         </select>
        </div>
 
        <div className="grid grid-cols-[300px,1fr]  gap-4">
          <label className="text-sm font-poppin ">Sual Kateqoriyası</label>
          <textarea placeholder="Açıqlama yazın" rows="6" className="outline-none bg-gray-100 p-2 rounded-md text-black"/>
        </div>

        <div className="grid grid-cols-[500px,1fr] items-center gap-4">
          <div></div>
          <button type="submit" className=" bg-custom-red rounded-md  hover:bg-red-500 text-white p-2">
            Əlavə et
          </button>
        </div>
        </form>
    </div>
}
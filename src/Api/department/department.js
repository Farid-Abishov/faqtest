import api from "../base"

export  const getDepartmentList=async ()=>{
  let result = await api.get('control/departments/list',{params:{
        limit:100,
        with_subs:'yes'
    }})
    return result;
}


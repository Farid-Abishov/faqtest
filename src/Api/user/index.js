import api from "../base"

export  const getUserList=async ()=>{
  let result = await api.get('control/users/load',{params:{
        limit:100,
        with_subs:'yes'
    }})
    return result;
}
export  const changeUserStatus=async (id)=>{
  let result = await api.post(`control/users/change-active-status/${id}`,)
    return result;
}


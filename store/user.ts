interface UserResponse{
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  image: string
}

const useUserStore = defineStore("user",()=>{
  const userData = useCookie<UserResponse | null>("userData", {default: ()=> null});
  const role = useCookie<string>("role", {default: ()=> "guest"})
  
  const fetchUserData = async (userId:number)=>{
    try{
      const response = await $fetch<UserResponse>(`https://dummyjson.com/users/${userId}`)
      role.value = response.role
      userData.value = response
    }catch{

    }
  }

  const resetUserRole = ()=>{
    role.value = "guest"
  }

  const resetUserData = ()=>{
    userData.value = null;
  }

  return { userData, role, fetchUserData, resetUserRole, resetUserData }
})

export default useUserStore;
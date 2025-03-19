interface UserResponse{
  role: string,
  image: string
}

const useUserStore = defineStore("user",()=>{
  const userData = ref<UserResponse | null>(null);
  const role = useCookie<string>("role", {default: ()=> "guest"})
  
  const fetchUserData = async (userId:number)=>{
    try{
      const response = await $fetch<UserResponse>(`https://dummyjson.com/users/${userId}`)
      role.value = response.role
      userData.value = response 
      console.log(response);
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
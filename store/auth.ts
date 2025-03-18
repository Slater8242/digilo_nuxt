import { defineStore } from 'pinia'

interface AuthResponse {
  id: number
  username: string
  email?: string
  accessToken: string 
  refreshToken: string
}

interface UserResponse {
  id: number
  role: string
}

const useAuthStore = defineStore('auth', () => {
  const accessToken = useCookie<string | null>("access-token", {default: ()=> null})
  const refreshToken = useCookie<string | null>("refresh-token", {default: ()=> null})
  const role = useCookie<string>("role", {default: ()=> "guest"})
  const isAuthenticated = computed(() => !!accessToken.value)

  async function login(username: string, password: string) {
    try {
      const authData = await $fetch<AuthResponse>('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: { username, password }
      })

      if (!authData.id) throw new Error('User ID not found')
      
      const userData = await $fetch<UserResponse>(`https://dummyjson.com/users/${authData.id}`)
      
      accessToken.value = authData.accessToken;
      refreshToken.value = authData.refreshToken;
      role.value = userData.role;      
      
      // if (role.value === "user") {
      //   navigateTo("/client/loans")
      // }

      // if (role.value === "admin") {
      //   navigateTo("/investor/overview")
      // }
    } catch (err) {
      console.error('Login failed:', err)
      throw err
    }
  }

  function logout() {
    accessToken.value = null;
    refreshToken.value = null;
    role.value = "guest";
    navigateTo("/")
  }

  return { accessToken, refreshToken, role, isAuthenticated, login, logout }
})

export default useAuthStore;
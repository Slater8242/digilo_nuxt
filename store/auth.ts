import { defineStore } from 'pinia'
import useUserStore from './user'

interface AuthResponse {
  id: number
  username: string
  email?: string
  accessToken: string 
  refreshToken: string
}

const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore();

  const accessToken = useCookie<string | null>("access-token", {default: ()=> null})
  const refreshToken = useCookie<string | null>("refresh-token", {default: ()=> null})
  const isAuthenticated = computed(() => !!accessToken.value)

  async function login(username: string, password: string) {
    try {
      const authData = await $fetch<AuthResponse>('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: { username, password }
      })

      if (!authData.id) throw new Error('User ID not found')
      
      await userStore.fetchUserData(authData.id);
      
      accessToken.value = authData.accessToken;
      refreshToken.value = authData.refreshToken;
    } catch (err) {
      console.error('Login failed:', err)
      throw err
    }
  }

  function logout() {
    accessToken.value = null;
    refreshToken.value = null;
    userStore.resetUserRole();
    userStore.resetUserData();
    navigateTo("/")
  }

  return { accessToken, refreshToken, isAuthenticated, login, logout }
})

export default useAuthStore;
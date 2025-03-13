import { defineStore } from 'pinia'

interface User {
  id: number
  username: string
  email: string
  role: string
  token: string
}

interface AuthResponse {
  id: number
  username: string
  email?: string
  token: string
}

interface UserResponse {
  id: number
  role: string
}

const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  async function login(username: string, password: string) {
    try {
      const authData = await $fetch<AuthResponse>('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: { username, password }
      })

      if (!authData.id) throw new Error('User ID not found')
      
      const userData = await $fetch<UserResponse>(`https://dummyjson.com/users/${authData.id}`)
      
      user.value = {
        id: authData.id,
        username: authData.username,
        email: authData.email || '',
        role: userData.role || 'user',
        token: authData.token
      }

      return userData.role
    } catch (err) {
      console.error('Login failed:', err)
      throw err
    }
  }

  function logout() {
    user.value = null
    navigateTo("/")
  }

  return { user, isAuthenticated, login, logout }
})

export default useAuthStore;
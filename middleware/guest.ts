import useAuthStore from "~/store/auth"

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (authStore.isAuthenticated) {
    if (authStore.user?.role === 'admin') {
      return navigateTo('/investor')
    } else {
      return navigateTo('/client')
    }
  }
})

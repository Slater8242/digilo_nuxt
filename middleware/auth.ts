import useAuthStore from "~/store/auth"

export default defineNuxtRouteMiddleware((to,from) => {
  const authStore = useAuthStore()

  console.log(to);
  console.log(from);
  
  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }
  console.log(authStore.isAuthenticated);

  // Redirect based on role
  if (authStore.user?.role === 'admin') {
    return navigateTo('/investor')
  }
  if(authStore.user?.role === "user"){
    return navigateTo('/client')
  }
})


export default defineNuxtRouteMiddleware((to,from)=>{
  if (to.path === '/client') {
    return navigateTo('/client/loans', { redirectCode: 301 })
  }
})
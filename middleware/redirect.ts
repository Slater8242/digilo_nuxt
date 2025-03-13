
export default defineNuxtRouteMiddleware((to,from)=>{
  if (to.path === '/client') {
    return navigateTo('/client/loans', { redirectCode: 302 })
  }
  console.log(to.path);
  
  if (to.path === "/investor") {
    return navigateTo('/investor/overview', { redirectCode: 302 })
  }
})
export default defineNuxtRouteMiddleware((to)=>{  
  if (to.path.split('/')[2] === "investor") {
    return navigateTo("investor/overview")
  }
  if (to.path.split('/')[2] === "client") {
    return navigateTo("client/loans")
  }
})
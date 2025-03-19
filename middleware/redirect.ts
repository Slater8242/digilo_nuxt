import useAuthStore from "~/store/auth";

export default defineNuxtRouteMiddleware((to)=>{
  const auth = useAuthStore();
  console.log(auth.isAuthenticated)
  if (!auth.isAuthenticated){
    return navigateTo('/login');
  }

  if (to.path.split('/')[2] === "investor") {
    return navigateTo("investor/overview")
  }

  if (to.path.split('/')[2] === "client") {
    return navigateTo("client/loans")
  }
})
import useAuthStore from '~/store/auth';

export default defineNuxtRouteMiddleware((to, from)=>{
  const authStore = useAuthStore();
  
  const allowedRoutes = [...rolePermissions.guest , ...(rolePermissions[authStore.role] || [])];

  const isAllowed = allowedRoutes.some(route => to.path === route || to.path.startsWith(route + "/"));
  
  if(!isAllowed){
    return navigateTo("/")
  }
});
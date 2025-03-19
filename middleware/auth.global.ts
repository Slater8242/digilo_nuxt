import useUserStore from '~/store/user';

export default defineNuxtRouteMiddleware((to, from)=>{
  const {$i18n} = useNuxtApp();
  const currentLocale = $i18n.locale.value;

  // Получаем старый и новый языковые префиксы
  const oldLocale = from.path.split('/')[1] || $i18n.defaultLocale;
  const newLocale = to.path.split('/')[1] || $i18n.defaultLocale;

  // Если язык меняется (например, /en -> /lv), разрешаем переход
  if (oldLocale !== newLocale) {
    return
  }

  const normalizedPath = to.path.replace(`/${currentLocale}`,'') || '/';
  
  const userStore = useUserStore();
  
  const allowedRoutes = [...rolePermissions.guest , ...(rolePermissions[userStore.role] || [])];

  const isAllowed = allowedRoutes.some(route => normalizedPath === route || normalizedPath.startsWith(route + "/"));
  
  if(!isAllowed){
    return navigateTo("/" + currentLocale)
  }
});
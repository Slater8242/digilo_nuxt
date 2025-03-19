import useUserStore from '~/store/user';
import useAuthStore from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from)=>{
    const userStore = useUserStore();
    const authStore = useAuthStore();

    const {$i18n} = useNuxtApp();
    const currentLocale = $i18n.locale.value;

    // Получаем старый и новый языковые префиксы
    const oldLocale = from.path.split('/')[1] || $i18n.defaultLocale;
    const newLocale = to.path.split('/')[1] || $i18n.defaultLocale;

    // Если язык меняется (например, /en -> /lv), разрешаем переход
    if (oldLocale !== newLocale) {
        return
    }

    const normalizePath = (path: string)=>{     // Removes the locale from the path
        return path.replace(`/${currentLocale}`,'') || '/'
    }

    if (authStore.isAuthenticated && normalizePath(to.path) === '/login'){
        return navigateTo('/'+currentLocale);
    }

    // const allowedRoutes = [...rolePermissions.guest , ...(rolePermissions[userStore.role] || [])];
    //
    // const isAllowed = allowedRoutes.some(route => normalizePath(to.path) === route || normalizePath(to.path).startsWith(route + "/"));
    //
    // if(!isAllowed){
    //     return navigateTo("/" + currentLocale)
    // }
});
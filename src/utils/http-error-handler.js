import i18next from "i18next";

import notification from "./notification";
//import { logout } from "../services/auth.service";
//import { router } from "..";

export const httpErrorHandler = (error) => {
    if (error.response) {
        console.log(error.response)
        if (error.response?.status === 401 && !error.request.responseURL.includes('/token')) {
//            logout();
//            router.navigate('/login')
                console.log("err");
        }
        if (error.response.data?.detail) {
            notification(i18next.t(`errors.${error.response.data.detail.split(':')[0]}`) , 'error');
        } else {
            notification(i18next.t(`errors.internalServerError`) , 'error');
        }
    } else if (error.request) {
        notification(i18next.t(`errors.internalServerError`) , 'error');
        console.error('Network Error:', error.request);
    } else {
        if (error.code === 'ECONNABORTED') {
            notification(i18next.t(`errors.econnaborted`) , 'error');
          } else {
            console.log(error)
          }
    }
}
//import authHeader from '../utils/auth-header';
import { httpClient } from '../utils/http-client';

export const getSupersetLogin = () => {

    const data = {
      "password": import.meta.env.VITE_SUPERSET_PASSWORD,
      "provider": "db",
      "refresh": true,
      "username": import.meta.env.VITE_SUPERSET_USER
    }

    return httpClient.post(import.meta.env.VITE_SUPERSET_HOST+`/api/v1/security/login`, data);
}


export const getSupersetToken = (token) => {

    const data = {
      "resources": [
        {
          "id": "f47023d3-5f1f-4f8c-a7c1-69475a1e1694",
          "type": "dashboard"
        }
      ],
        "rls": [
//        {
//        "clause": "partner_zip = '08820'"
//        }
      ],
      "user": {
        "username": import.meta.env.VITE_SUPERSET_USER
      }
    }
    let headersSuper = {};
    headersSuper['Authorization'] = `Bearer ${token}`;
    return httpClient.post(import.meta.env.VITE_SUPERSET_HOST+`/api/v1/security/guest_token/`, data, {headers: headersSuper});
}


//https://bi-ubuntu24.coopdevs.org/apidata/invoices/metrics?metric_names=count(distinct partner_id) as cnt&metric_names=sum(amount_untaxed_signed) as amt&dimension_names=date_Trunc('month', date) as data&dimension_names=name_provincia&journal=INV&from_date=2025-01-01&skip=0&limit=100
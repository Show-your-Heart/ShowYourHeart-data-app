//import authHeader from '../utils/auth-header';
import { httpClient } from '../utils/http-client';

export async function getAnswers () {
   const response = await fetch(`/results.json`);
   const res = await response.json()
//   console.log(res[0]);
   return await res[0];
}



export const getInvoiceIndicator = (metric_names, dimension_names, journal, from_date, to_date, order_by) => {
    var strmetricnames = ""
    for (const element of metric_names) {
        strmetricnames = strmetricnames + `&metric_names=${element}`
    }

    var strdimensionnames = ""
    for (const element of dimension_names) {
        strdimensionnames = strdimensionnames + `&dimension_names=${element}`
    }
    const strjournal = journal ? `&journal=${journal}` : ""
    const strfromdate = from_date ? `&from_date=${from_date}` : ""
    const strtodate = to_date ? `&to_date=${to_date}` : ""
    const strorderby = order_by ? `&orderby=${order_by}` : ""
    return httpClient.get(`/invoices/metrics?${strmetricnames}${strdimensionnames}${strjournal}${strfromdate}${strtodate}${strorderby}`);
//    return httpClient.get(`/invoices/metrics?${strmetricnames}${strdimensionnames}${strjournal}${strfromdate}${strtodate}`, {headers: authHeader()});
}

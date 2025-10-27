//import authHeader from '../utils/auth-header';
import { httpClient } from '../utils/http-client';

export async function getAnswers () {
   const response = await fetch(`/sub/results.json`);
   const res = await response.json()
   return await res[0];
}

export async function getAnswersApi (organization, campaign) {
    const strorganization = organization ? `organization=${organization}` : ""
    const strcampaign = campaign ? `&campaign=${campaign}` : ""
    return httpClient.get(`/answers?${strorganization}${strcampaign}`);
}

export async function getAnswersApiLanguage (organization, campaign, language, direct) {
    const strorganization = organization ? `organization=${organization}` : ""
    const strcampaign = campaign ? `&campaign=${campaign}` : ""
    const strlanguage = language ? `&language=${language}` : ""
    console.log(direct);
    const strdirect = (direct !== undefined) ? `&direct_indicators=${direct}` : ""
    return httpClient.get(`/answers?${strorganization}${strcampaign}${strlanguage}${strdirect}`);
}


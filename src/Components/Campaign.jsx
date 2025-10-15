import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"
import i18next from "i18next"

import { login } from '../services/auth.service';
import Survey from '../Components/Survey';


const Campaign = (campaign) =>{
    const { t, i18n } = useTranslation()

    useEffect(() => {
          fetchCampaign();
        }
        , []
    );

    async function fetchCampaign() {
        let camp = campaign;
    }



    return(
       <div id="idhead" key="divcamp">
               {campaign.campaign.surveys.map((survey) => (
                     <Survey survey={survey} campaign={campaign.campaign.campaign_name}/>
               ))}
        </div>
    )

}

  export default Campaign;
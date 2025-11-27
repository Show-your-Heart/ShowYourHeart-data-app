import React, { useEffect, useState } from "react";

import { login } from '../services/auth.service';
import Survey from '../Components/Survey';


const Campaign = (campaign) =>{

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
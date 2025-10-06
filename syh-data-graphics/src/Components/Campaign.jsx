import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';
import Survey from '../Components/Survey';


const Campaign = (campaign) =>{
//     defineixo les variables
    const [data, setData] = useState(null);

    useEffect(() => {
          fetchCampaign();
        }
        , []
    );

    async function fetchCampaign() {
        let camp = campaign;
        setData(camp);
    }

    if (!data) return <p>Carregant...</p>;

    return(
       <div key="divcamp">
           <h1>Campanya: {data.campaign.campaign_name}</h1>
               {data.campaign.surveys.map((survey) => (
                     <Survey survey={survey}/>
               ))}
        </div>
    )

}

  export default Campaign;
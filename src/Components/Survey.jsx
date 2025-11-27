import React, { useEffect, useState } from "react";

import { login } from '../services/auth.service';
import Method from '../Components/Method';


const Survey = (survey) =>{
    useEffect(() => {
          fetchSurvey();
        }
        , []
    );

    async function fetchSurvey() {
        let surv = survey;

    }


    return(
        <>
         <div className="entitat" key="survey" style={{ marginBottom: "1rem" }}>
            <h2>{survey.survey.organization_name}</h2>
         </div>
         <div key={survey.survey.id_survey}>
                {survey.survey.methods.map((method) => (
                    <Method method={method} campaign={survey.campaign}/>
                ))}
         </div>
         </>
    )

}

  export default Survey;
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

             <img style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }} src={'https://ensenyaelcor.org/media/'+survey.survey.organization_logo} alt=""/>

            <h3>{survey.survey.project_name}</h3>
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
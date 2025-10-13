import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"
import i18next from "i18next"

import { login } from '../services/auth.service';
import Method from '../Components/Method';


const Survey = (survey) =>{
    const { t, i18n } = useTranslation()


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
         <div className="entitat" key={survey.survey.id_survey} style={{ marginBottom: "1rem" }}>
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
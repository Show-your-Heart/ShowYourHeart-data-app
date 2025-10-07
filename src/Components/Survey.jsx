import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"
import i18next from "i18next"

import { login } from '../services/auth.service';
import Method from '../Components/Method';


const Survey = (survey) =>{
    const { t, i18n } = useTranslation()
    const [data, setData] = useState(null);

    useEffect(() => {
          fetchSurvey();
        }
        , []
    );

    async function fetchSurvey() {
        let surv = survey;
        setData(surv);
    }

    if (!data) return <p>Carregant...</p>;

    return(

         <div key={data.survey.id_survey} style={{ marginBottom: "1rem" }}>
            <h2>{t("survey.organization")}: {data.survey.organization_name}</h2>
            <p>NIF: {data.survey.vat_number}</p>
                {data.survey.methods.map((method) => (
                    <Method method={method}/>
                ))}
         </div>
    )

}

  export default Survey;
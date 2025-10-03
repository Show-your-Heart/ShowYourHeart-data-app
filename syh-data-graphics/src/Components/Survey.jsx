import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';
import Method from '../Components/Method';


const Survey = (survey) =>{
//     defineixo les variables
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
            <h2>Organització: {data.survey.organization_name}</h2>
            <p>NIF: {data.survey.vat_number}</p>
                {data.survey.methods.map((method) => (
                    <Method method={method}/>
                ))}
         </div>
    )

}

  export default Survey;
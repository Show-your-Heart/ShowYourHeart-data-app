import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';


const Answer = (answer) =>{
//     defineixo les variables
    const [data, setData] = useState(null);

    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        let answ = answer;
        setData(answ);
    }

    if (!data) return <p>Carregant...</p>;
    console.log(data);
    return(
         <div key={data.answer.id_indicatorresult} style={{ marginBottom: "1rem" }}>
             <p>{data.answer.gender}: {data.answer.value}  </p>
         </div>
    )

}

  export default Answer;
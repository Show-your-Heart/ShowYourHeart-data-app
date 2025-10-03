import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';
import Answer from '../Components/Answer';


const Indicator = (indicator) =>{
//     defineixo les variables
    const [data, setData] = useState(null);

    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        let ind = indicator;
        setData(ind);
    }

    if (!data) return <p>Carregant...</p>;
//     console.log(data);
    return(
         <div key={data.indicator.id_indicator} style={{ marginBottom: "1rem" }}>
             <p class="question" dangerouslySetInnerHTML={{ __html: data.indicator.indicator_name }} />
             {data.indicator.results?.map((answer) => (
                 <Answer answer={answer}/>
             ))}
         </div>
    )

}

  export default Indicator;
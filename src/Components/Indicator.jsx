import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';
import Answer from '../Components/Answer';


const Indicator = (indicator) =>{

    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        let ind = indicator;
    }


    return(
         <div key={indicator.indicator.id_indicator} style={{ marginBottom: "1rem" }}>
             <p className="question" dangerouslySetInnerHTML={{ __html: indicator.indicator.indicator_name }} />
             {indicator.indicator.results?.map((answer) => (
                 <Answer answer={answer}/>
             ))}
         </div>
    )

}

  export default Indicator;
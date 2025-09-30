import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';
import Indicator from '../Components/Indicator';


const MethodSection = (methodsection) =>{
//     defineixo les variables
    const [data, setData] = useState(null);

    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        let methsec = methodsection;
        setData(methsec);
    }

    if (!data) return <p>Carregant...</p>;
    console.log(data);
    return(
         <div key={data.methodsection.id_method} style={{ marginBottom: "1rem" }}>
             <h5>{data.methodsection.method_section_title}  </h5>
             {data.methodsection.indicators.map((indicator) => (
                 <Indicator indicator={indicator}/>
             ))}
         </div>
    )

}

  export default MethodSection;
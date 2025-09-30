import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";


import { login } from '../services/auth.service';
import MethodSection from '../Components/MethodSection';


const Method = (method) =>{
//     defineixo les variables
    const [data, setData] = useState(null);

    useEffect(() => {
          fetchMethod();
        }
        , []
    );

    async function fetchMethod() {
        let meth = method;
        setData(meth);
    }

    if (!data) return <p>Carregant...</p>;
    console.log(data);
    return(
         <div key={data.method.id_method} style={{ marginBottom: "1rem" }}>
             <h4>{data.method.method_name} - {data.method.method_description} </h4>
             {data.method.method_section.map((method_section) => (
                <MethodSection methodsection={method_section}/>
             ))}
         </div>
    )

}

  export default Method;
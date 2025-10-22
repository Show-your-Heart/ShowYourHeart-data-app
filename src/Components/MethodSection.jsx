import React, { useEffect, useState } from "react";
import { login } from '../services/auth.service';
import Indicator from '../Components/Indicator';


const MethodSection = (methodsection) =>{

    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
    }

    return(
         <div id={methodsection.methodsection.id_methods_section} key={methodsection.methodsection.id_methods_section} style={{ marginBottom: "1rem" }}>
             <h5 className={"ml_" + methodsection.methodsection.method_level}>
                 {methodsection.methodsection.path_order} - {methodsection.methodsection.method_section_title}
                 <a className="internal-link" href="#idhead">&#8657;</a>
                 </h5>
             {methodsection.methodsection.indicators.map((indicator) => (
                 <Indicator indicator={indicator}/>
             ))}
         </div>
    )
}

  export default MethodSection;
import React, { useEffect, useState } from "react";

import { login } from '../services/auth.service';
import Indicator from '../Components/Indicator';


const MethodSection = (methodsection) =>{
//     defineixo les variables
    const [data, setData] = useState(null);
    const [anchor, setAnchor] = useState(null);


    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        let methsec = methodsection;
        console.log(methodsection);
        setAnchor("#"+methodsection.methodsection.id_methods_section);
        setData(methsec);
    }

    if (!data) return <p>Carregant...</p>;
//     console.log(data);
    return(
            <div>
            {(() => {
                if (data.methodsection.method_level==1) {
                    return (
                    <a href={anchor}>{data.methodsection.path_order} - {data.methodsection.method_section_title}</a>
                    )
                }
            })()}
            </div>
    )

}

  export default MethodSection;
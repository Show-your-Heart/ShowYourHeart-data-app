import React, { useEffect, useState } from "react";


import { login } from '../services/auth.service';
import MethodSection from '../Components/MethodSection';
import { useTranslation } from "react-i18next"
import i18next from "i18next"

const Method = (method) =>{
    const { t, i18n } = useTranslation()


      useEffect(() => {
          fetchMethod();
        }
        , []
    );

    async function fetchMethod() {

    }

    return(
         <div id="idhead" key={method.method.id_method} style={{ marginBottom: "1rem" }}>

             <div className="metode">
             <h1>{method.method.method_name} - {method.campaign}</h1>
              <p className="description"> {method.method.method_description} </p>
              </div>

              <div>
             {method.method.method_section.map((method_section) => (
                <MethodSection methodsection={method_section}/>
             ))}
             </div>
         </div>
    )

}

  export default Method;
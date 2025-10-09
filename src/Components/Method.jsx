import React, { useEffect, useState } from "react";


import { login } from '../services/auth.service';
import MethodSection from '../Components/MethodSection';
import MethodSectionMenu from '../Components/MethodSectionMenu';
import { useTranslation } from "react-i18next"
import i18next from "i18next"

const Method = (method) =>{
    const { t, i18n } = useTranslation()
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
//     console.log(data);
    return(
         <div id="idhead" key={data.method.id_method} style={{ marginBottom: "1rem" }}>
             <h3>{data.method.method_name}</h3>
              <p className="description"> {data.method.method_description} </p>
              <p className="menu"> {t("menu")}</p>
                  <div className="menuelement">
                      {data.method.method_section.map((method_section) => (
                        <MethodSectionMenu methodsection={method_section}/>
                     ))}
                  </div>

             {data.method.method_section.map((method_section) => (
                <MethodSection methodsection={method_section}/>
             ))}
         </div>
    )

}

  export default Method;
import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { login } from '../services/auth.service';
import AnswerGender from '../Components/AnswerGender';


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
//     console.log(data);
    return(
         <div class="answer" key={data.answer.id_indicatorresult} style={{ marginBottom: "1rem" }}>

             <p>
             {data.answer.str_value}
             {data.answer.str_gender}
             </p>
              {data.answer.prev_str_value && (
             <p class="prev_answer">
                 Resposta campanya anterior:<br></br>
                 {data.answer.prev_str_value}
                 {data.answer.prev_str_gender}
             </p>
             )}

             {data.answer.value && (
              <>
                {data.answer.str_gender && (
                    <div>
                    <AnswerGender values={data.answer.str_value} columns={data.answer.str_gender} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <AnswerGender values={data.answer.prev_str_value} columns={data.answer.prev_str_gender} />
                    </div>
                    )
                }
              </>
            )}
         </div>
    )

}

  export default Answer;
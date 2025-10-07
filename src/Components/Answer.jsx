import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"
import i18next from "i18next"

import { login } from '../services/auth.service';
import AnswerGender from '../Components/AnswerGender';


const Answer = (answer) =>{
    const { t, i18n } = useTranslation()
    const [data, setData] = useState(null);

    const [list, setList] = useState(null);
    const [prev_list, setPrevList] = useState(null);

    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        try{
            if (answer.answer.str_value.startsWith("[")){
                const arr = answer.answer.str_value.replace('["','').replace('"]','').split('","');
                const itemList = arr.map((item, index) => (
                    <li key={index}>{item}</li>
                  ));
                setList(itemList);
            }
        }
        catch (e){
            const a = 0;
        }

        try{
            if (answer.answer.prev_str_value.startsWith("[")){
                const arr = answer.answer.prev_str_value.replace('["','').replace('"]','').split('","');
                const itemList = arr.map((item, index) => (
                    <li key={index}>{item}</li>
                  ));
                setPrevList(itemList);
            }
        }
        catch (e){
            const a = 0;
        }

        setData(answer);
    }

    if (!data) return <p>Carregant...</p>;
//     console.log(data);
    return(
         <div className="answer" key={data.answer.id_indicatorresult} style={{ marginBottom: "1rem" }}>

             <div>

               {(() => {
                if (data.answer.str_value=="true") {
                    return (
                    <p>&#9989;</p>
                    )
                } else if (data.answer.str_value=="false") {
                  return (
                     <p>&#10060;</p>
                  )
                }
                else if (! data.answer.str_gender && data.answer.str_value && data.answer.str_value.startsWith('[')) {
                  return (
                     <p>{list}</p>
                  )
                }
                else if (! data.answer.str_gender ) {
                  return (
                     <p>{data.answer.str_value}</p>
                  )
                }
                else if (data.answer.str_gender
                        && (data.answer.str_value=="[,,]" || data.answer.str_value=="[0,0,0]")) {
                  return (
                     <p>N/A</p>
                  )
                }
                else {
                    return (
                    <>
                     <table className="tableGender" style={{ width: 500 }}>
                        <thead>
                            <tr className="tableGender">
                                {data.answer.gender.map((head, headID) => (
                                    <th className="tableGender" key={headID}>{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody><tr>
                            {data.answer.value.map((rowContent, rowID) => (
                                 <td className="tableGender" key={rowID}>{rowContent}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>


                     <AnswerGender values={data.answer.str_value} columns={data.answer.str_gender} />
                     </>
                     )
                    }
              })()}
             </div>


              {data.answer.prev_str_value && (
                  <div>
                      <p className="prev_answer_title">{t("answer.prev_campaign")}:</p>

                      {(() => {
                            if (data.answer.prev_str_value=="true") {
                                return (
                                    <p className="prev_answer">&#9989;</p>
                                )
                            }
                            else if (data.answer.prev_str_value=="false") {
                                return (
                                    <p className="prev_answer">&#10060;</p>
                                )
                            }
                            else if (! data.answer.prev_str_gender && data.answer.prev_str_value && data.answer.prev_str_value.startsWith('[')) {
                                return (
                                    <p className="prev_answer">{prev_list}</p>
                                )
                            }
                            else if (! data.answer.prev_str_gender ) {
                                return (
                                    <p className="prev_answer">{data.answer.prev_str_value}</p>
                                )
                            }
                            else if (data.answer.prev_str_gender
                                && (data.answer.prev_str_value=="[,,]" || data.answer.prev_str_value=="[0,0,0]")) {
                                return (
                                    <p className="prev_answer">
                                        N/A
                                    </p>
                                )
                            }
                            else {
                                return (
                                     <>
                                     <table className="tableGender" style={{ width: 500 }}>
                                        <thead>
                                            <tr className="tableGender">
                                                {data.answer.prev_gender.map((head, headID) => (
                                                    <th className="tableGender" key={headID}>{head}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody><tr>
                                            {data.answer.prev_value.map((rowContent, rowID) => (
                                                 <td className="tableGender" key={rowID}>{rowContent}</td>
                                            ))}
                                        </tr>
                                        </tbody>
                                    </table>


                                     <AnswerGender values={data.answer.prev_str_value} columns={data.answer.prev_str_gender} />
                                     </>
                                 )
                            }
                      })()}

                </div>
             )}

         </div>
    )

}

  export default Answer;
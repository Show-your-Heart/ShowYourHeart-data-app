import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"
import i18next from "i18next"

import { login } from '../services/auth.service';
import AnswerGenderTwo from '../Components/AnswerGenderTwo';


const Answer = (answer) =>{
    const { t, i18n } = useTranslation()

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


    }


    return(
         <div className="answer" key={answer.answer.id_indicatorresult} style={{ marginBottom: "1rem" }}>

             <div>

               {(() => {
                if (answer.answer.str_value=="true") {
                    return (
                    <p>&#9989;</p>
                    )
                } else if (answer.answer.str_value=="false") {
                  return (
                     <p>&#10060;</p>
                  )
                }
                else if (! answer.answer.str_gender && answer.answer.str_value && answer.answer.str_value.startsWith('[')) {
                  return (
                     <p>{list}</p>
                  )
                }
                else if (! answer.answer.str_gender ) {
                  return (
                     <p>{answer.answer.str_value}</p>
                  )
                }
                else if (answer.answer.str_gender
                        && (answer.answer.str_value=="[,,]" || answer.answer.str_value=="[0,0,0]")) {
                  return (
                     <p>N/A</p>
                  )
                }
                else {
                    return (
                    <>
                     <table className="tableGender">
                        <thead>
                            <tr className="">
                                    <th className=" th">{t("year")}</th>
                                {answer.answer.gender.map((head, headID) => (
                                    <th className=" th" key={headID}>{i18next.t(head)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=""> {t("current_year")} </td>
                            {answer.answer.value.map((rowContent, rowID) => (
                                 <td className="" key={rowID}>{rowContent}</td>
                            ))}
                        </tr>
                        {answer.answer.prev_str_value && (
                            <tr>
                                <td className=" tdprev"> {t("previous_year")}  </td>
                                {answer.answer.prev_value.map((rowContent, rowID) => (
                                     <td className="tdprev" key={rowID}>{rowContent}</td>
                                ))}
                            </tr>
                        )}
                        </tbody>
                    </table>


                     <AnswerGenderTwo values={answer.answer.str_value} columns={answer.answer.str_gender}
                        prev_values={answer.answer.prev_str_value} prev_columns={answer.answer.prev_str_gender}
                      />
                     </>
                     )
                    }
              })()}
             </div>


              {answer.answer.prev_str_value && (
                  <div>
                         {(() => {
                            if (answer.answer.prev_str_value=="true") {
                                return (
                                    <>
                                    <p className="prev_answer_title">{t("answer.prev_campaign")}:</p>
                                    <p className="prev_answer">&#9989;</p>
                                    </>
                                )
                            }
                            else if (answer.answer.prev_str_value=="false") {
                                return (
                                    <>
                                    <p className="prev_answer_title">{t("answer.prev_campaign")}:</p>
                                    <p className="prev_answer">&#10060;</p>
                                    </>
                                )
                            }
                            else if (! answer.answer.prev_str_gender && answer.answer.prev_str_value && answer.answer.prev_str_value.startsWith('[')) {
                                return (
                                    <>
                                    <p className="prev_answer_title">{t("answer.prev_campaign")}:</p>
                                    <p className="prev_answer">{prev_list}</p>
                                    </>
                                )


                            }
                            else if (! answer.answer.prev_str_gender ) {
                                return (
                                    <>
                                    <p className="prev_answer_title">{t("answer.prev_campaign")}:</p>
                                    <p className="prev_answer">{answer.answer.prev_str_value}</p>
                                    </>
                                )
                            }
                            else if (answer.answer.prev_str_gender
                                && (answer.answer.prev_str_value=="[,,]" || answer.answer.prev_str_value=="[0,0,0]")) {
                                return (
                                    <>
                                    <p className="prev_answer_title">{t("answer.prev_campaign")}:</p>
                                    <p className="prev_answer">
                                        N/A
                                    </p>
                                    </>
                                )
                            }
                            else {
                                return (
                                     <>
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
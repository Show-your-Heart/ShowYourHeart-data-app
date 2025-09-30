import '../css/bootstrap.css';

import '../App.css';

import { Flex, Image } from "@chakra-ui/react"
import React, { useState, useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { getAnswers } from '../services/data.service';
import Campaign from '../Components/Campaign';

function AppCharts() {

    const [answers, setAnswers] = useState(null);

    useEffect(() => {
        fetchAnswers()
        }
        ,[]
    );

    async function fetchAnswers() {
        const data = await getAnswers();
        // Assigno el camp data
        setAnswers(data);
//         console.log(data)

    }

     if (!answers) return <p>Carregant...</p>;



    return (
        <div
          className="App"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Campaign campaign={answers}/>
{/*             <h1>Campanya: {answers.campaign_name}</h1> */}

{/*                 {answers.surveys.map((survey) => ( */}
{/*                     <div key={survey.id_survey} style={{ marginBottom: "1rem" }}> */}
{/*                         <h2>Organització {survey.organization_name}</h2> */}
{/*                         <h3>Mètodes</h3> */}
{/*                         {survey.methods.map((method) => ( */}
{/*                          <div key={method.id_method} > */}
{/*                          <h4>{method.method_name} - {method.method_description} </h4> */}
{/*                             {method.method_section.map((method_section) => ( */}
{/*                                 <div key={method_section.id_methods_section}> */}
{/*                                     <h5> */}
{/*                                         {method_section.method_section_title} */}
{/*                                     </h5> */}
{/*                                     {method_section.indicators.map((indicator) => ( */}
{/*                                         <div key={indicator.id_indicator}> */}
{/*                                             <p> */}
{/*                                                 {indicator.indicator_name} */}
{/*                                             </p> */}
{/*                                             {indicator.results?.map((result) => ( */}
{/*                                                 <div key={result.id_indicatorresult}> */}
{/*                                                     <p> */}
{/*                                                         {result.gender} -- */}
{/*                                                         {result.value} */}
{/*                                                     </p> */}

{/*                                                 </div> */}
{/*                                              ))} */}
{/*                                         </div> */}
{/*                                      ))} */}
{/*                                 </div> */}
{/*                              ))} */}
{/*                          </div> */}
{/*                          ))} */}
{/*                     </div> */}
{/*                 ))} */}
        </div>
    );
}

export default AppCharts;

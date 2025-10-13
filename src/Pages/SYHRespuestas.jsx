// import '../css/bootstrap.css';

import '../App.css';
import '../styles.css';
import '../output.css';
import '../css/bootstrap.css';

import logo from '../static/images/syh_logo.png';

import { Flex, Image } from "@chakra-ui/react"
import React, { useState, useEffect } from "react";
import { Navigate, useLocation, Outlet, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


import { getAnswers } from '../services/data.service';
import { getAnswersApi, getAnswersApiLanguage } from '../services/data.service';
import Campaign from '../Components/Campaign';
import MethodSectionMenuAccordion from '../Components/MethodSectionMenuAccordion';

function AppCharts() {

    const [answers, setAnswers] = useState(null);
    const [searchParams] = useSearchParams();
    const organization = searchParams.get("organization");
    const campaign = searchParams.get("campaign");
    const language = searchParams.get("lang");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetchAnswers()
        }
        ,[]
    );

    async function fetchAnswers() {
//          DAdes del json
//         const data = await getAnswers();
//         setAnswers(data);
        var data = "";
        if (searchParams.has('lang') ){
            data = await getAnswersApiLanguage(organization, campaign, language);
            i18n.changeLanguage(language);
        }
        else {
            data = await getAnswersApi(organization, campaign);
            i18n.changeLanguage("ca");
        }
//         Assigno el camp data
        setAnswers(data.data);
//                 console.log(data.data)


    }

     if (!answers) return <p>Carregant...</p>;
//     console.log(answers.surveys[0].methods[0]);

    return (
        <div key="respuesta"
          className="App"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >



            {/*  Header*/}
            <div className="p-3 lg:px-5 lg:pl-3 rounded-md w-[80%]  bg-pink-600 ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <img src={logo} className="h-8 me-10" alt="Show your heart logo"/>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex gap-2 mt-0 pt-0 p-2 items-stretch">

                <aside id="logo-sidebar" className="py-[240px] asidewidth bg-gray-800 rounded-md transition-transform left-0 top-0" aria-label="Sidebar" aria-hidden="true">

                    <div className="overflow-y-auto asidediv">
                        <nav>
                            <MethodSectionMenuAccordion methodsection={answers[0].surveys[0].methods[0].method_section}/>
                        </nav>
                    </div>
                </aside>


                 <div className="cos mx-auto p-4 flex flex-col grow min-w-0 ">
 <Campaign campaign={answers[0]}/>
{/*                      <div id="content-wrapper" class="d-flex flex-column"> */}

{/*                     <Campaign campaign={answers}/> */}
{/*                     </div> */}
                </div>
            </div>

        </div>
    );
}

export default AppCharts;

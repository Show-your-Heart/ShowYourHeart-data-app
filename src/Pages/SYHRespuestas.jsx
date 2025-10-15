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
           <div className="fixed top-0 left-0 w-full z-50 p-3 lg:px-5 lg:pl-3 bg-pink-600 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                  <img src={logo} className="h-8 me-10" alt="Show your heart logo"/>
                </div>
              </div>
            </div>

            <div className="flex-grow flex gap-2 mt-0 pt-0 p-2 items-stretch">
                <aside id="logo-sidebar"
                className="fixed pt-16 h-screen py-[240px] asidewidth bg-gray-800
                rounded-md left-0 top-10 overflow-y-auto menu" aria-label="Sidebar" aria-hidden="true">
                    <div className="overflow-y-auto asidediv">
                        <nav>
                            <MethodSectionMenuAccordion methodsection={answers[0].surveys[0].methods[0].method_section}/>
                        </nav>
                    </div>
                </aside>


                 <div className="contingut ml-[240px] p-4 fixed h-screen overflow-y-auto grow min-w-0 ">
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

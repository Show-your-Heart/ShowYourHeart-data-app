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
          className="App overflow-x-auto"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
      >


           <div className="fixed w-full z-50 p-3 bg-pink-600 rounded-md">
                  <img src={logo} className="h-8 me-10" alt="Show your heart logo"/>
           </div>

           <div className="flex-grow flex ml-10 mt-0 pt-0 p-2 items-stretch">
                <div id="logo-sidebar"
                className="fixed pt-4 h-screen bg-gray-800
                rounded-md left-10 top-10 overflow-y-auto menu asidediv"
                aria-label="Sidebar" aria-hidden="true">
                        <MethodSectionMenuAccordion methodsection={answers[0].surveys[0].methods[0].method_section}/>
                </div>
           </div>


         <div className="contingut p-4 fixed h-screen v-screen overflow-y-auto overflow-x-auto  ">
             <Campaign campaign={answers[0]}/>
        </div>



        </div>
    );
}

export default AppCharts;

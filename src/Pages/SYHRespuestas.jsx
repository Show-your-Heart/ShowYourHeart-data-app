import '../css/bootstrap.css';

import '../App.css';

import { Flex, Image } from "@chakra-ui/react"
import React, { useState, useEffect } from "react";
import { Navigate, useLocation, Outlet, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getAnswers } from '../services/data.service';
import { getAnswersApi, getAnswersApiLanguage } from '../services/data.service';
import Campaign from '../Components/Campaign';

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
        var data = "";
        if (searchParams.has('lang') ){
            data = await getAnswersApiLanguage(organization, campaign, language);
            i18n.changeLanguage(language);
        }
        else {
            data = await getAnswersApi(organization, campaign);
            i18n.changeLanguage("ca");
        }
        // Assigno el camp data
        setAnswers(data.data);
        //         console.log(data.data)


    }

     if (!answers) return <p>Carregant...</p>;
//     console.log(answers[0]);


    return (
        <div key="respuesta"
          className="App"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Campaign campaign={answers[0]}/>

        </div>
    );
}

export default AppCharts;

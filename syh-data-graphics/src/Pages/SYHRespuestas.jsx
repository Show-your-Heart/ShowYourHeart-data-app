import '../css/bootstrap.css';

import '../App.css';

import { Flex, Image } from "@chakra-ui/react"
import React, { useState, useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { getAnswers } from '../services/data.service';
import { getAnswersApi } from '../services/data.service';
import Campaign from '../Components/Campaign';

function AppCharts() {

    const [answers, setAnswers] = useState(null);

    useEffect(() => {
        fetchAnswers()
        }
        ,[]
    );

    async function fetchAnswers() {
//         const data = await getAnswers();
        const data = await getAnswersApi('058ba7e6-fab1-75af-2123-b056abcaa858', '38c732ac-ab07-af68-8417-7f9e1812a710');
        // Assigno el camp data
        setAnswers(data.data);
//         console.log(data.data)


    }

     if (!answers) return <p>Carregant...</p>;
    console.log(answers[0]);


    return (
        <div
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

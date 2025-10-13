import React, { useEffect, useState } from "react";

import Plot from "react-plotly.js";

import { useTranslation } from "react-i18next"
import i18next from "i18next"
import { login } from '../services/auth.service';


const AnswerGender = (props) =>{
    const { t, i18n } = useTranslation()
    const [data, setData] = useState(null);
    const [lay, setLayout] = useState(null);
    const [dataVal, setDataVal] = useState(null);
    const [dataValPrev, setDataValPrev] = useState(null);


    useEffect(() => {
          fetchMethodSection();
        }
        , []
    );

    async function fetchMethodSection() {
        let val = ""
        try {
            val = JSON.parse(props.values);
        }
        catch (e){
             val = [];
        }

        let col = ""
        let colTrans = []
        try {
            col = JSON.parse(props.columns);
            col.forEach(element => {
                colTrans.push(
                  i18next.t(element)
                );
            });
        col = colTrans;
        }
        catch (e){
             col = [];
        }

//         prev
        let prev_val = ""
        try {
            prev_val = JSON.parse(props.prev_values);
        }
        catch (e){
             prev_val = [];
        }

        let prev_col = ""
        let prev_colTrans = []
        try {
            prev_col = JSON.parse(props.prev_columns);
            prev_col.forEach(element => {
                prev_colTrans.push(
                  i18next.t(element)
                );
            });
        prev_col = prev_colTrans;
        }
        catch (e){
             prev_col = [];
        }


        const datacalc = [
            // Donut exterior (gran)
            {
              type: "pie",
              labels: col,
              values: val,
              hole: 0.6,
              sort: true,
              direction: "clockwise",
              domain: { x: [0, 1], y: [0, 1] },
              "textinfo": "value+percent",
              showlegend: true,
              "hoverinfo": 'label+percent+value',
              marker: {
                   line: { color: "#fff", width: 2 },
                   colors: ["#ffcf47", "ea517a", "#0526ff"]
              },
            },
            // Donut interior (més petit i centrat)
            {
              type: "pie",
              labels: prev_col,
              values: prev_val,
              hole: 0.3,
              sort: true,
              direction: "clockwise",
              domain: { x: [0.25, 0.75], y: [0.25, 0.75] },
              "textinfo": "value+percent",
              showlegend: false,
              "hoverinfo": 'label+percent+value',
              marker: {
                  line: { color: "#fff", width: 2 },
                   colors: ["#ffcf8b", "e795ab", "#a0abef"]
              },
            }

        ];
        // Assigno el camp dataVal
        setDataVal(datacalc)

        const layout = {
            width: 600
            , height: 480
            , font: { family: "Coustard", size: 12, color: "#555"}
            , paper_bgcolor: "#e1e8e9" //background color of the chart container space
            , plot_bgcolor: "#e1e8e9" //background color of plot area
             ,yaxis: {
                tickformat: ".0%" // Mostra els valors com a percentatges
                ,fixedrange: true
            }
            , legend: {
                // bgcolor : '#FF0000',
                font: {
                    family: 'Nunito',
                    size: 20,
                    color: '#26493e'
                },
            }
            , xaxis: {
                tickfont: {
                    family: 'Nunito',
                    size: 20,
                    color: '#26493e'
                },
                fixedrange: true
            }
            };

        setLayout(layout);
    }

    var config = {
        'responsive': true
        ,'displayModeBar': true
        ,'displaylogo': true
//         ,'modeBarButtonsToRemove': ['zoom', 'pan','select', 'zoomIn', 'zoomOut', 'autoScale', 'resetScale','lasso2d']
    }


//     if (!data) return <p>Carregant...</p>;
    if (!dataVal) return <>Carregant...</>;
//      console.log(dataVal);
    return(

        <Plot
            data={dataVal}
            layout={lay}
            config={config}
            style={{ width: "100%", height: "100%" }}
        />

    )

}

  export default AnswerGender;
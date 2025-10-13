import React, { useEffect, useState } from "react";

import { login } from '../services/auth.service';
import Indicator from '../Components/Indicator';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from "@mui/material/Typography";


const MethodSection = (methodsections) =>{
//     defineixo les variables
    const grouped = [];
  let current = null;

  methodsections.methodsection.forEach((s) => {
    if (s.method_level === 1) {
      // Comencem una nova secció principal
      current = { ...s, details: [] };
      grouped.push(current);
    } else if (s.method_level === 2 && current) {
      // Afegim com a detall del darrer level 1
      current.details.push(s);
    }
    // Nivells > 2 els ignorem
  });

  return (
    <div>
      {grouped.map((section) => (
        <Accordion className="my-accordion" key={section.id_methods_section}>
          <AccordionSummary className="my-accordion-summary">
            <Typography className="linkmenuparent">{section.method_section_title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="my-accordion-details" key={section.id_methods_section}>
              <a className="ms-3 linkmenu" href={`#${section.id_methods_section}`}> {section.path_order}  -  {section.method_section_title} </a>
            </AccordionDetails>
          {section.details.map((detail) => (
            <AccordionDetails className="my-accordion-details" key={detail.id_methods_section}>
              <a className="ms-3 linkmenu" href={`#${detail.id_methods_section}`}> {detail.path_order}  -  {detail.method_section_title} </a>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );

}

  export default MethodSection;
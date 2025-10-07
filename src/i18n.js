import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import caJSON from './locale/ca.json'
import esJSON from './locale/es.json'

i18n.use(initReactI18next).init({
 resources: {
    ca: { ...caJSON },
    es: { ...esJSON }
 },
 lng: "ca",
});
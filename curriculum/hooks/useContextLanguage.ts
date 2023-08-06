import { useContext } from "react"
import { LanguageContext } from "@/context/language"



export default function useContextLanguage(){

    return useContext(LanguageContext)
}
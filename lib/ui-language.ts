import { I18N } from "./i18n";
import { DONATE_FEATURE_TRANSLATIONS } from "./feature-translations";
export function uiText(language:string,key:string){return I18N[language]?.t[key]??DONATE_FEATURE_TRANSLATIONS[language]?.[key]??I18N.en.t[key]??key}
export function interfaceDictionary(language:string){return Object.fromEntries(Object.keys(I18N.en.t).map(key=>[key,uiText(language,key)]))}

import { BRAND_NAMES, I18N } from "./i18n";
import { HADITH_FEATURE_TRANSLATIONS, DONATE_FEATURE_TRANSLATIONS } from "./feature-translations";
export function uiText(language:string,key:string){return I18N[language]?.t[key]??HADITH_FEATURE_TRANSLATIONS[language]?.[key]??DONATE_FEATURE_TRANSLATIONS[language]?.[key]??I18N.en.t[key]??key}
export function interfaceDictionary(language:string){return Object.fromEntries(Object.keys(I18N.en.t).map(key=>[key,uiText(language,key)]))}
export const SEO_LABELS:Record<string,Record<string,string>>={
 en:{home:BRAND_NAMES.en,library:"Hadith Library",translation:"English translation",source:"Authoritative source",machine:"Machine translation",fallback:"English fallback — translation retry pending",previous:"Previous",next:"Next"},
 ar:{home:BRAND_NAMES.ar,library:"مكتبة الحديث",translation:"النص العربي",source:"النص العربي المعتمد",machine:"ترجمة آلية",fallback:"النص الإنجليزي مؤقتًا — ستُعاد محاولة الترجمة",previous:"السابق",next:"التالي"},
 ur:{home:BRAND_NAMES.ur,library:"حدیث لائبریری",translation:"اردو ترجمہ",source:"مستند ماخذ",machine:"مشینی ترجمہ",fallback:"عارضی انگریزی متن — ترجمہ دوبارہ آزمایا جائے گا",previous:"پچھلا",next:"اگلا"},
 ru:{home:BRAND_NAMES.ru,library:"Библиотека хадисов",translation:"Перевод на русский",source:"Авторитетный источник",machine:"Машинный перевод",fallback:"Временно показан английский текст — перевод будет повторен",previous:"Предыдущий",next:"Следующий"},
 de:{home:BRAND_NAMES.de,library:"Hadith-Bibliothek",translation:"Deutsche Übersetzung",source:"Verbindliche Quelle",machine:"Maschinelle Übersetzung",fallback:"Vorübergehend englischer Text — Übersetzung wird erneut versucht",previous:"Zurück",next:"Weiter"}
};
export function seoLabel(language:string,key:string){return SEO_LABELS[language]?.[key]??SEO_LABELS.en[key]??key}

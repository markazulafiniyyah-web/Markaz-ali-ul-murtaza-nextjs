import { I18N } from "./i18n";
import { HADITH_FEATURE_TRANSLATIONS, DONATE_FEATURE_TRANSLATIONS } from "./feature-translations";
export function uiText(language:string,key:string){return I18N[language]?.t[key]??HADITH_FEATURE_TRANSLATIONS[language]?.[key]??DONATE_FEATURE_TRANSLATIONS[language]?.[key]??I18N.en.t[key]??key}
export function interfaceDictionary(language:string){return Object.fromEntries(Object.keys(I18N.en.t).map(key=>[key,uiText(language,key)]))}
export const SEO_LABELS:Record<string,Record<string,string>>={
 en:{home:"Markaz ul Murtaza (may Allah be pleased with him)",library:"Hadith Library",translation:"English translation",source:"Authoritative source",machine:"Machine translation",fallback:"English fallback — translation retry pending",previous:"Previous",next:"Next"},
 ar:{home:"مركز المرتضى رضي الله عنه",library:"مكتبة الحديث",translation:"النص العربي",source:"النص العربي المعتمد",machine:"ترجمة آلية",fallback:"النص الإنجليزي مؤقتًا — ستُعاد محاولة الترجمة",previous:"السابق",next:"التالي"},
 ur:{home:"مرکز المرتضیٰ رضی اللہ عنہ",library:"حدیث لائبریری",translation:"اردو ترجمہ",source:"مستند ماخذ",machine:"مشینی ترجمہ",fallback:"عارضی انگریزی متن — ترجمہ دوبارہ آزمایا جائے گا",previous:"پچھلا",next:"اگلا"},
 ru:{home:"Markaz ul Murtaza (да будет доволен им Аллах)",library:"Библиотека хадисов",translation:"Перевод на русский",source:"Авторитетный источник",machine:"Машинный перевод",fallback:"Временно показан английский текст — перевод будет повторен",previous:"Предыдущий",next:"Следующий"},
 de:{home:"Markaz ul Murtaza (möge Allah mit ihm zufrieden sein)",library:"Hadith-Bibliothek",translation:"Deutsche Übersetzung",source:"Verbindliche Quelle",machine:"Maschinelle Übersetzung",fallback:"Vorübergehend englischer Text — Übersetzung wird erneut versucht",previous:"Zurück",next:"Weiter"}
};
export function seoLabel(language:string,key:string){return SEO_LABELS[language]?.[key]??SEO_LABELS.en[key]??key}

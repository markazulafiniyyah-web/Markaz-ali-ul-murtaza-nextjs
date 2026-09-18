import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { I18N, LANG_ORDER } from "@/lib/i18n";

const title=I18N.en.t.meta_title||"Online Quran Classes | Markaz Al Murtaza Al Islami";
const description=I18N.en.t.meta_desc;
const languages=Object.fromEntries([...LANG_ORDER.map(code=>[code,`/${code}`]),["x-default","/"]]);
export const metadata:Metadata={
 title,
 description,
 robots:{index:true,follow:true},
 alternates:{canonical:"/",languages},
 openGraph:{type:"website",title,description,url:"/",locale:"en",images:[{url:"/images/institute-wide-front.webp",width:1376,height:768,alt:"Architectural visualization of the Quran learning institute"}]},
 twitter:{card:"summary_large_image",title,description,images:["/images/institute-wide-front.webp"]}
};
export default function Page(){return <HomePage language=""/>}

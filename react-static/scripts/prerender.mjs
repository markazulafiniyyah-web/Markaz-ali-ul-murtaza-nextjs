import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {pathToFileURL} from 'node:url';

const root=resolve(process.cwd());
const SITE=(process.env.STATIC_SITE_URL||'https://markazulmurtaza.vercel.app').replace(/\/$/,'');
const BRAND='Markaz Al Murtaza Al Islami & Safia Islamic Institute';
const langs=['en','ar','ur','fa','ps','sd','ks','pa','tr','az','kk','uz','id','ms','bn','hi','ta','so','sw','ha','am','fr','es','de','it','pt','ru','zh','ja','ko'];
const rtl=new Set(['ar','ur','fa','ps','sd','ks']);
const pages={
 home:{title:'Online Quran Classes | Markaz Al Murtaza Al Islami',description:'Learn Quran online in one-to-one Hifz, Nazra and Tajweed classes for kids and adults with flexible guidance from experienced Quran teachers.',keywords:'online Quran classes, online Quran teacher, learn Quran online, Hifz classes, Tajweed classes, Nazra Quran'},
 donate:{title:`Support Quran Learning | Donate to ${BRAND}`,description:'Support Quran teaching, student access and the learning platform through a secure bank or wallet donation.',keywords:'donate Quran education, support Quran students, sadaqah jariyah'},
 portfolio:{title:`Quran Teachers and Leadership | ${BRAND}`,description:'Meet the Quran teaching leadership of Markaz Al Murtaza Al Islami and Safia Islamic Institute.',keywords:'online Quran teacher, Qari Ahmed Azizi, Quran tutor Pakistan'},
 hifz:{title:'Online Hifz Classes | Personal Quran Memorization Teacher',description:'Join one-to-one online Hifz classes with a personal Sabaq, Sabqi and Manzil plan for kids and adults.',keywords:'online Hifz classes, Hifz teacher online, Quran memorization course'},
 tajweed:{title:'Online Tajweed Classes | Learn Quran Recitation',description:'Improve Makharij, Sifat and Quran recitation through practical one-to-one online Tajweed classes.',keywords:'online Tajweed classes, Tajweed teacher online, Makharij classes'},
 nazra:{title:'Online Nazra Quran Classes | Learn Quran Reading',description:'Learn accurate Quran reading from Noorani Qaida foundations through one-to-one online Nazra classes.',keywords:'online Nazra Quran classes, Noorani Qaida online, learn Quran reading'},
 'online-quran-classes':{title:'Online Quran Classes for Kids and Adults | Learn Quran Online',description:'Find one-to-one online Quran classes in Hifz, Nazra and Tajweed for kids, beginners and adults.',keywords:'online Quran classes, Quran tutor online, Quran classes for kids'},
 'online-hifz-tajweed-institute':{title:'Online Hifz and Tajweed Institute | One-to-One Quran Classes',description:'Online Hifz and Tajweed classes combining Quran memorization, revision and practical recitation correction.',keywords:'online Hifz and Tajweed institute, Hifz with Tajweed online'},
 'jamia-riaz-ul-jannah':{title:'Jamia Riaz-ul-Jannah Lahore | Qari Ahmed Azizi',description:'Learn about Qari Ahmed Azizi, Mudir of Jamia Riaz-ul-Jannah in Allama Iqbal Town, Lahore.',keywords:'Jamia Riaz ul Jannah, Masjid Riaz ul Jannah, Qari Ahmed Azizi'}
};
const localized={
 ar:{home:['دروس القرآن عبر الإنترنت | مركز المرتضى الإسلامي','دروس فردية عبر الإنترنت في الحفظ والناظرة والتجويد للأطفال والكبار.'],donate:['دعم تعليم القرآن | التبرع','ساهم في دعم تعليم القرآن والطلاب ومنصة التعلم.'],portfolio:['معلمو القرآن والقيادة التعليمية','تعرف على قيادة تعليم القرآن وأدوار المعلمين.']},
 ur:{home:['آن لائن قرآن کلاسز | مرکز المرتضٰی الاسلامی','بچوں اور بڑوں کے لیے حفظ، ناظرہ اور تجوید کی ون آن ون آن لائن کلاسیں۔'],donate:['قرآنی تعلیم کی معاونت | عطیہ','قرآن کی تدریس، طلبہ اور تعلیمی پلیٹ فارم کی معاونت کریں۔'],portfolio:['قرآن اساتذہ اور تدریسی قیادت','قرآنی اساتذہ کی قیادت، عہدوں اور تدریسی خدمات کا تعارف۔']}
};
const routes=[{path:'/',output:'index.html',page:'home',lang:'en'}];
for(const page of Object.keys(pages).filter(x=>x!=='home'))routes.push({path:`/${page}`,output:`${page}/index.html`,page,lang:'en'});
for(const lang of langs){for(const page of ['home','donate','portfolio']){const suffix=page==='home'?'':`/${page}`;routes.push({path:`/${lang}${suffix}`,output:`${lang}${suffix}/index.html`,page,lang})}}
const template=await readFile(resolve(root,'dist/index.html'),'utf8');
const {render}=await import(pathToFileURL(resolve(root,'.ssr/entry-server.js')).href);
for(const route of routes){
 const fallback=pages[route.page];const local=localized[route.lang]?.[route.page];const title=local?.[0]||fallback.title;const description=local?.[1]||fallback.description;const canonical=`${SITE}${route.path==='/'?'':route.path}`;
 const alternateLinks=['home','donate','portfolio'].includes(route.page)?[
  ...langs.map(code=>({language:code,href:`${SITE}/${code}${route.page==='home'?'':`/${route.page}`}`})),
  {language:'x-default',href:`${SITE}/en${route.page==='home'?'':`/${route.page}`}`}
 ]:[];
 const schema={"@context":"https://schema.org","@graph":[{"@type":"WebSite",url:SITE,name:BRAND},{"@type":"EducationalOrganization",name:BRAND,url:SITE,logo:`${SITE}/images/institute-logo.png`},{"@type":"WebPage",url:canonical,name:title,description,inLanguage:route.lang}]};
 const seo={title,description,keywords:fallback.keywords,canonical,image:`${SITE}/images/institute-wide-front.webp`,alternates:alternateLinks,schema,rtl:rtl.has(route.lang)};
 const props={initialPage:route.page,initialLang:route.lang,seo};
 const rendered=render(props);
 // React 19 renders document-metadata elements from react-helmet-async inline when
 // renderToString is used. Extract those Helmet-managed elements into <head> so
 // crawlers and verification services see standards-compliant document metadata.
 const extracted=[];
 let appHtml=rendered.html
  .replace(/<title>[^<]*<\/title>/g,tag=>{extracted.push(tag);return''})
  .replace(/<meta\s[^>]*\/>/g,tag=>{extracted.push(tag);return''})
  .replace(/<link\s[^>]*rel="(?:canonical|alternate)"[^>]*\/>/g,tag=>{extracted.push(tag);return''})
  .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/g,tag=>{extracted.push(tag);return''});
 const helmetHead=(rendered.head||'')+extracted.join('');
 let html=template.replace('<html lang="en">',`<html lang="${route.lang}" dir="${rtl.has(route.lang)?'rtl':'ltr'}">`).replace(/<title>.*?<\/title>/,'').replace('<!--seo-head-->',helmetHead).replace('<!--app-html-->',appHtml).replace('<!--initial-state-->',`<script>window.__PRERENDER__=${JSON.stringify(props).replaceAll('<','\\u003c')}</script>`);
 const out=resolve(root,'dist',route.output);await mkdir(dirname(out),{recursive:true});await writeFile(out,html);if(route.path!=='/'){const extensionAlias=resolve(root,'dist',`${route.path.slice(1)}.html`);await mkdir(dirname(extensionAlias),{recursive:true});await writeFile(extensionAlias,html);}
}
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>${SITE}${r.path==='/'?'':r.path}</loc></url>`).join('')}</urlset>`;
await writeFile(resolve(root,'dist/sitemap.xml'),sitemap);await writeFile(resolve(root,'dist/robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);await rm(resolve(root,'.ssr'),{recursive:true,force:true});
console.log(`Prerendered ${routes.length} crawlable HTML pages for ${SITE}`);

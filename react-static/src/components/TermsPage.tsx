"use client";
import Link from "next/link";
import { Footer, Header } from "./SiteChrome";

const highlights=[
 {n:"01",title:"Clear learning arrangements",text:"Class format, schedule, teacher availability, fees and any trial arrangement should be confirmed before regular lessons begin."},
 {n:"02",title:"Respectful learning environment",text:"Students, guardians and teachers are expected to communicate respectfully and protect the dignity, safety and privacy of everyone in a class."},
 {n:"03",title:"Responsible use of the website",text:"Website material and learning resources may be used for personal education, but may not be copied, sold, impersonated or misused."},
 {n:"04",title:"Privacy-conscious communication",text:"Only information reasonably needed to answer enquiries, arrange lessons, process support or improve the service should be shared with the Institute."}
];
const terms=[
 ["1. Acceptance of these terms","By visiting this website, contacting the Institute, enrolling in a class or using an Institute service, you agree to these terms. A parent or legal guardian must act for a student who is under the age of legal consent."],
 ["2. Educational services","Programs may include Hifz, Nazra and Tajweed instruction, assessments, revision planning and related Quran-learning guidance. Class arrangements depend on teacher availability, the learner’s level, time zone and agreed schedule. The Institute may adjust a teacher or timetable when reasonably necessary and will communicate material changes."],
 ["3. Trials, enrollment and fees","A trial or assessment helps establish suitability and level; it does not guarantee a permanent time slot or a particular teacher. Current fees, payment frequency and start date should be confirmed directly before payment. Students or guardians are responsible for providing accurate enrollment and payment information."],
 ["4. Attendance, rescheduling and cancellations","Students should join on time with a suitable device and connection. Requests to reschedule or pause lessons should be made as early as reasonably possible. Any credit, replacement lesson, cancellation or refund is considered according to the arrangement confirmed at enrollment and the circumstances of the missed class. Technical failure outside the Institute’s reasonable control does not automatically create a refund entitlement."],
 ["5. Student conduct and safeguarding","Harassment, abusive language, discrimination, inappropriate recording, impersonation or unsafe conduct is not permitted. Guardians should provide suitable supervision for younger learners. The Institute may restrict or end access where conduct creates a safety, dignity, legal or integrity concern."],
 ["6. Privacy and class communications","Information submitted through forms, email, phone or WhatsApp may be used to answer enquiries, arrange classes, maintain necessary records and provide support. Do not send sensitive information that is not required. Classes, calls, messages, photographs or student work must not be recorded or published without appropriate permission."],
 ["7. Donations","Donation instructions identify the payment channel and intended educational support. Donors should verify account details before transferring funds. Unless required by law or needed to correct a proven payment error, a completed voluntary donation is generally treated as final. A donation does not purchase admission, certification or preferential treatment."],
 ["8. Intellectual property","The Institute’s name, logo, page design, original text, artwork and original learning resources are protected. Personal, non-commercial learning use is permitted where appropriate. Republishing, selling, modifying, scraping or presenting Institute material as your own requires prior written permission. Quranic text itself is not claimed as Institute property."],
 ["9. External services and links","The website may link to WhatsApp, banks, social platforms, video platforms or other third-party services. Those providers operate under their own terms and privacy practices. The Institute is not responsible for a third party’s availability, security or independent content."],
 ["10. Educational outcomes and availability","Progress in recitation and memorization depends on attendance, revision, ability, effort and other individual circumstances. The Institute does not promise a particular result, completion date, ranking or uninterrupted availability. Nothing on the website replaces qualified legal, medical or financial advice."],
 ["11. Changes and termination","These terms and service arrangements may be updated to reflect operational, safety, legal or technical needs. The date shown on this page identifies the latest published version. Access may be suspended or ended for non-payment, misuse, repeated disruption, safety concerns or a serious breach of these terms."],
 ["12. Questions and concerns","Questions about these terms, an enrollment arrangement or a policy concern should be raised promptly so the matter can be reviewed fairly. Contact the Institute at info@markazalimurtaza.com or through the official WhatsApp number shown on this website."]
];
const definitions=[
 ["Institute","Markaz Al Murtaza Al Islami & Safia Islamic Institute — مرکز المرتضٰی الاسلامی و صفیہ اسلامک انسٹیٹیوٹ."],
 ["Website","The Institute’s official pages, content and web-based interfaces."],
 ["Services","Lessons, assessments, learning support, communications and related educational facilities offered by the Institute."],
 ["Student","A person enrolled in, assessed for or attending an Institute learning service."],
 ["Guardian","A parent or legally responsible adult acting for a minor student."],
 ["Teacher","A Quran instructor assigned or authorised by the Institute."],
 ["Trial or assessment","An introductory session used to understand level, goals and class suitability; it is not a guarantee of permanent enrollment."],
 ["Hifz","Structured memorization of the Quran, including new lesson and revision cycles."],
 ["Nazra","Learning to read the Quran by looking at the Arabic text with guided correction."],
 ["Tajweed","The applied rules and articulation principles used for accurate Quran recitation."],
 ["Donation","A voluntary contribution that does not purchase a commercial service or guaranteed benefit."],
 ["Content","Text, images, branding, layouts, downloads and learning materials made available through the Website or Services."]
];

export default function TermsPage(){return <><Header dark active="terms" forcedLanguage="en"/><main className="terms-page">
 <section className="terms-hero"><div><p className="kicker gold">Legal information · Plain-language guide</p><h1>Terms, policies and key terminology.</h1><p>Clear expectations protect students, families, teachers and the trust placed in Quran education. This page explains how our website and learning services should be used.</p><div className="terms-meta"><span>Effective September 16, 2026</span><span>Last updated September 16, 2026</span></div></div></section>
 <section className="terms-shell"><aside className="terms-index"><p className="kicker">On this page</p><a href="#highlights">Policy highlights</a><a href="#terms">Detailed terms</a><a href="#terminology">Key terminology</a><a href="#contact-policy">Contact</a></aside>
 <div className="terms-content"><section id="highlights"><div className="section-head terms-head"><p className="kicker">At a glance</p><h2>Policy highlights</h2><p>These summaries are a quick guide. The detailed terms below provide the fuller context.</p></div><div className="policy-highlight-grid">{highlights.map(item=><article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
 <section id="terms" className="terms-detail"><div className="section-head terms-head"><p className="kicker">Full policy</p><h2>Terms of use and service</h2></div>{terms.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</section>
 <section id="terminology" className="terminology"><div className="section-head terms-head"><p className="kicker">Definitions</p><h2>Key terminology</h2><p>These meanings apply when the following words appear on this page.</p></div><dl>{definitions.map(([word,meaning])=><div key={word}><dt>{word}</dt><dd>{meaning}</dd></div>)}</dl></section>
 <section id="contact-policy" className="terms-contact"><p className="kicker gold">Need clarification?</p><h2>Ask before you enroll or pay.</h2><p>If a class arrangement or policy is unclear, contact us and request written confirmation.</p><div><a className="btn btn-light" href="mailto:info@markazalimurtaza.com">Email the Institute</a><a className="btn btn-outline-light" href="https://wa.me/923014592661" target="_blank" rel="noopener">WhatsApp</a></div></section>
 <p className="terms-note">These terms are intended as a clear operational policy for this website and its educational services. Applicable law may provide rights or obligations that cannot be excluded by these terms.</p><Link className="terms-home-link" href="/">← Return to the homepage</Link></div></section>
 </main><Footer forcedLanguage="en"/></>}

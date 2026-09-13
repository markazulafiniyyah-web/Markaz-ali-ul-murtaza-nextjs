"use client";
import { useEffect } from "react";
import { useI18n } from "./I18nProvider";
import { HonorificText } from "./HonorificText";
export default function ExactHomeContent(){const {t,lang}=useI18n();useEffect(()=>{const scrollToHash=()=>{const id=decodeURIComponent(location.hash.slice(1));if(!id)return;requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}))};scrollToHash();addEventListener("hashchange",scrollToHash);return()=>removeEventListener("hashchange",scrollToHash)},[]);useEffect(()=>{const counters=Array.from(document.querySelectorAll<HTMLElement>(".stat-num[data-count]"));const reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;const animate=(element:HTMLElement)=>{const target=Number(element.dataset.count||0);if(reduceMotion){element.textContent=target.toLocaleString();return}const start=performance.now(),duration=1400;const frame=(now:number)=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);element.textContent=Math.round(target*eased).toLocaleString();if(progress<1)requestAnimationFrame(frame)};requestAnimationFrame(frame)};const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){animate(entry.target as HTMLElement);observer.unobserve(entry.target)}}),{threshold:.35});counters.forEach(counter=>observer.observe(counter));return()=>observer.disconnect()},[]);const handleClick=(event:React.MouseEvent<HTMLElement>)=>{const button=(event.target as HTMLElement).closest<HTMLButtonElement>(".vthumb");if(!button)return;const url=button.dataset.open||(button.dataset.embed?button.dataset.embed.replace("youtube-nocookie.com/embed/","youtube.com/watch?v=").split("?")[0]:"");if(url)window.open(url,"_blank","noopener")};return (
<main id="main" onClick={handleClick}>
  {/* ================= HERO ================= */}
  <section className="hero" id="home">
    <div className="hero-inner reveal">
      <p className="hero-badge"><span className="dot" /><span data-i18n="hero_badge">{t("hero_badge")}</span></p>
      <h1 data-i18n="hero_title"><HonorificText text={t("hero_title")} language={lang}/></h1>
      <p className="hero-sub" data-i18n="hero_sub">{t("hero_sub")}</p>
      <div className="hero-ctas">
        <a href="#enroll" className="btn btn-primary" data-i18n="hero_cta1">{t("hero_cta1")}</a>
        <a href="#programs" className="btn btn-ghost link-more" data-i18n="hero_cta2">{t("hero_cta2")}</a>
      </div>
    </div>
    <div className="hero-art reveal">
      <svg viewBox="0 0 1200 560" role="img" aria-label="Al-Qur'an al-Karim — Hifz, Nazra and Tajweed">
        <defs>
          <linearGradient id="hAbg" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#01411C" /><stop offset=".55" stopColor="#0B6E4F" /><stop offset={1} stopColor="#0E7C86" /></linearGradient>
          <linearGradient id="hAgold" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#F9E9B9" /><stop offset=".5" stopColor="#F0C75E" /><stop offset={1} stopColor="#D9A62E" /></linearGradient>
          <pattern id="hApat" width={90} height={90} patternUnits="userSpaceOnUse"><path d="M45 10l9 26 26 9-26 9-9 26-9-26-26-9 26-9z" fill="none" stroke="#F0C75E" strokeOpacity=".12" /></pattern>
        </defs>
        <rect width={1200} height={560} rx={28} fill="url(#hAbg)" />
        <rect width={1200} height={560} rx={28} fill="url(#hApat)" />
        <rect x={26} y={26} width={1148} height={508} rx={20} fill="none" stroke="#F0C75E" strokeOpacity=".35" strokeWidth="1.5" />
        <rect x={40} y={40} width={1120} height={480} rx={16} fill="none" stroke="#fff" strokeOpacity=".12" />
        <path d="M1030 108a72 72 0 1 0 40 133 80 80 0 1 1-40-133z" fill="url(#hAgold)" opacity=".92" />
        <circle cx={1082} cy={132} r={11} fill="#F0C75E" />
        <text x={600} y={272} textAnchor="middle" fontFamily="Amiri Quran,'Noto Naskh Arabic',serif" fontSize={118} fontWeight={400} fill="url(#hAgold)">الْقُرْآنُ الْكَرِيمُ</text>
        <text x={600} y={356} textAnchor="middle" fontFamily="Amiri Quran,'Noto Naskh Arabic',serif" fontSize={30} fill="#fff" opacity=".88">حِفْظٌ · تِلَاوَةٌ · تَجْوِيدٌ</text>
        <g><circle cx={510} cy={440} r={11} fill="#F0C75E" /><circle cx={570} cy={440} r={11} fill="#34D399" /><circle cx={630} cy={440} r={11} fill="#F472B6" /><circle cx={690} cy={440} r={11} fill="#FB923C" /></g>
      </svg>
    </div>
  </section>
  {/* verse band */}
  <section className="verse">
    <p className="verse-ar" lang="ar" dir="rtl">﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾</p>
    <p className="verse-trans"><span data-i18n="verse_trans">{t("verse_trans")}</span> <span className="verse-ref" data-i18n="verse_ref">{t("verse_ref")}</span></p>
  </section>
  {/* ================= PROGRAMS ================= */}
  <section className="programs" id="programs">
    <div className="section-head reveal">
      <p className="kicker" data-i18n="programs_kicker">{t("programs_kicker")}</p>
      <h2 data-i18n="programs_title">{t("programs_title")}</h2>
      <p className="section-sub" data-i18n="programs_sub">{t("programs_sub")}</p>
    </div>
    <div className="feature-row reveal">
      <div className="feature-copy">
        <h3 data-i18n="p1_title" className={lang==="ur"||lang==="ar"?"quran-program-title":undefined} lang={lang==="ur"||lang==="ar"?"ar":undefined} dir={lang==="ur"||lang==="ar"?"rtl":undefined}>{t("p1_title")}</h3>
        <p data-i18n="p1_desc">{t("p1_desc")}</p>
        <ul className="checks">
          <li data-i18n="p1_b1">{t("p1_b1")}</li>
          <li data-i18n="p1_b2">{t("p1_b2")}</li>
          <li data-i18n="p1_b3">{t("p1_b3")}</li>
        </ul>
        <a href="#enroll" className="link-more" data-i18n="programs_more">{t("programs_more")}</a>
      </div>
      <div className="feature-media">
        <svg className="poster" viewBox="0 0 800 600" role="img" aria-label="Hifz-ul-Qur'an">
          <defs>
            <linearGradient id="gH" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#10B981" /><stop offset={1} stopColor="#0E7490" /></linearGradient>
            <pattern id="pH" width={80} height={80} patternUnits="userSpaceOnUse"><path d="M40 8l8 24 24 8-24 8-8 24-8-24-24-8 24-8z" fill="none" stroke="#fff" strokeOpacity=".12" /></pattern>
          </defs>
          <rect width={800} height={600} rx={24} fill="url(#gH)" /><rect width={800} height={600} rx={24} fill="url(#pH)" />
          <text x={400} y={150} textAnchor="middle" fontFamily="Amiri Quran,'Noto Naskh Arabic',serif" fontSize={76} fontWeight={400} fill="#FDE68A">حِفْظُ الْقُرْآنِ</text>
          <g transform="translate(400,370)">
            <path d="M-180,-45 C-95,-78 -25,-78 0,-55 L0,70 C-25,47 -95,47 -180,80 Z" fill="#FFF7E6" />
            <path d="M180,-45 C95,-78 25,-78 0,-55 L0,70 C25,47 95,47 180,80 Z" fill="#FBEFD4" />
            <path d="M0,-55 L0,70" stroke="#D9A62E" strokeWidth={5} />
            <g stroke="#CBB27E" strokeWidth={4} strokeLinecap="round"><path d="M-150,-20 C-90,-42 -40,-42 -20,-30" /><path d="M-150,5 C-90,-17 -40,-17 -20,-5" /><path d="M-150,30 C-90,8 -40,8 -20,20" /><path d="M150,-20 C90,-42 40,-42 20,-30" /><path d="M150,5 C90,-17 40,-17 20,-5" /><path d="M150,30 C90,8 40,8 20,20" /></g>
          </g>
          <g><circle cx={165} cy={225} r={14} fill="#F0C75E" /><circle cx={645} cy={205} r={12} fill="#F472B6" /><circle cx={135} cy={430} r={11} fill="#38BDF8" /><circle cx={665} cy={440} r={13} fill="#FDE047" /><circle cx={240} cy={140} r={7} fill="#fff" opacity=".8" /><circle cx={585} cy={120} r={6} fill="#fff" opacity=".7" /></g>
          <rect x={30} y={524} width={230} height={48} rx={24} fill="#fff" opacity=".94" />
          <text x={145} y={556} textAnchor="middle" fontFamily="-apple-system,'Segoe UI',Arial,sans-serif" fontSize={24} fontWeight={600} fill="#065F46">Hifz-ul-Qur'an</text>
        </svg>
      </div>
    </div>
    <div className="feature-row flip reveal">
      <div className="feature-copy">
        <h3 data-i18n="p2_title" className={lang==="ar"?"quran-program-title":undefined}>{t("p2_title")}</h3>
        <p data-i18n="p2_desc">{t("p2_desc")}</p>
        <ul className="checks">
          <li data-i18n="p2_b1">{t("p2_b1")}</li>
          <li data-i18n="p2_b2">{t("p2_b2")}</li>
          <li data-i18n="p2_b3">{t("p2_b3")}</li>
        </ul>
        <a href="#enroll" className="link-more" data-i18n="programs_more">{t("programs_more")}</a>
      </div>
      <div className="feature-media">
        <svg className="poster" viewBox="0 0 800 600" role="img" aria-label="Tajweed — colour-coded recitation rules">
          <defs>
            <linearGradient id="gT" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#7C3AED" /><stop offset={1} stopColor="#DB2777" /></linearGradient>
            <pattern id="pT" width={80} height={80} patternUnits="userSpaceOnUse"><path d="M40 8l8 24 24 8-24 8-8 24-8-24-24-8 24-8z" fill="none" stroke="#fff" strokeOpacity=".12" /></pattern>
          </defs>
          <rect width={800} height={600} rx={24} fill="url(#gT)" /><rect width={800} height={600} rx={24} fill="url(#pT)" />
          <text x={400} y={190} textAnchor="middle" fontFamily="Amiri Quran,'Noto Naskh Arabic',serif" fontSize={64} fontWeight={400}><tspan fill="#fff">بِسْمِ </tspan><tspan fill="#FDE047">اللَّهِ </tspan><tspan fill="#4ADE80">الرَّحْمَٰنِ </tspan><tspan fill="#38BDF8">الرَّحِيمِ</tspan></text>
          <text x={400} y={315} textAnchor="middle" fontFamily="Amiri Quran,'Noto Naskh Arabic',serif" fontSize={44} fontWeight={400}><tspan fill="#FB923C">مَدّ </tspan><tspan fill="#fff">· </tspan><tspan fill="#F472B6">غُنَّة </tspan><tspan fill="#fff">· </tspan><tspan fill="#4ADE80">إِدْغَام </tspan><tspan fill="#fff">· </tspan><tspan fill="#22D3EE">إِخْفَاء</tspan></text>
          <g><circle cx={250} cy={410} r={13} fill="#FB923C" /><circle cx={350} cy={410} r={13} fill="#F472B6" /><circle cx={450} cy={410} r={13} fill="#4ADE80" /><circle cx={550} cy={410} r={13} fill="#22D3EE" /></g>
          <rect x={30} y={524} width={150} height={48} rx={24} fill="#fff" opacity=".94" />
          <text x={105} y={556} textAnchor="middle" fontFamily="-apple-system,'Segoe UI',Arial,sans-serif" fontSize={24} fontWeight={600} fill="#6D28D9">Tajweed</text>
        </svg>
      </div>
    </div>
    <div className="feature-row reveal">
      <div className="feature-copy">
        <h3 data-i18n="p3_title" className={lang==="ar"?"quran-program-title":undefined}>{t("p3_title")}</h3>
        <p data-i18n="p3_desc">{t("p3_desc")}</p>
        <ul className="checks">
          <li data-i18n="p3_b1">{t("p3_b1")}</li>
          <li data-i18n="p3_b2">{t("p3_b2")}</li>
          <li data-i18n="p3_b3">{t("p3_b3")}</li>
        </ul>
        <a href="#enroll" className="link-more" data-i18n="programs_more">{t("programs_more")}</a>
      </div>
      <div className="feature-media">
        <svg className="poster" viewBox="0 0 800 600" role="img" aria-label="Nazra Qur'an — fluent recitation">
          <defs>
            <linearGradient id="gN" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#1E3A8A" /><stop offset={1} stopColor="#0E7490" /></linearGradient>
            <pattern id="pN" width={80} height={80} patternUnits="userSpaceOnUse"><path d="M40 8l8 24 24 8-24 8-8 24-8-24-24-8 24-8z" fill="none" stroke="#fff" strokeOpacity=".12" /></pattern>
          </defs>
          <rect width={800} height={600} rx={24} fill="url(#gN)" /><rect width={800} height={600} rx={24} fill="url(#pN)" />
          <text x={400} y={142} textAnchor="middle" fontFamily="Amiri Quran,'Noto Naskh Arabic',serif" fontSize={68} fontWeight={400} fill="#FDE68A">تِلَاوَةُ الْقُرْآنِ نَظَرًا</text>
          <g transform="translate(400,370)">
            <path d="M-185,-52 C-100,-82 -28,-82 0,-58 L0,78 C-28,52 -100,52 -185,86 Z" fill="#FFF7E6" />
            <path d="M185,-52 C100,-82 28,-82 0,-58 L0,78 C28,52 100,52 185,86 Z" fill="#FBEFD4" />
            <path d="M0,-58 L0,78" stroke="#D9A62E" strokeWidth={5} />
            <g stroke="#CBB27E" strokeWidth={4} strokeLinecap="round"><path d="M-154,-24 C-94,-44 -43,-44 -20,-32" /><path d="M-154,2 C-94,-18 -43,-18 -20,-6" /><path d="M-154,28 C-94,8 -43,8 -20,20" /><path d="M154,-24 C94,-44 43,-44 20,-32" /><path d="M154,2 C94,-18 43,-18 20,-6" /><path d="M154,28 C94,8 43,8 20,20" /></g>
          </g>
          <g fill="#F0C75E"><circle cx={190} cy={205} r={10} /><circle cx={610} cy={205} r={10} /><circle cx={145} cy={440} r={8} /><circle cx={655} cy={440} r={8} /></g>
          <rect x={30} y={524} width={210} height={48} rx={24} fill="#fff" opacity=".94" />
          <text x={135} y={556} textAnchor="middle" fontFamily="-apple-system,'Segoe UI',Arial,sans-serif" fontSize={24} fontWeight={600} fill="#1E3A8A">Nazra Qur'an</text>
        </svg>
      </div>
    </div>
  </section>
  {/* ================= QURRAS ================= */}
  <section className="qurras" id="qurras">
    <div className="section-head reveal">
      <p className="kicker" data-i18n="qurras_kicker">{t("qurras_kicker")}</p>
      <h2 data-i18n="qurras_title">{t("qurras_title")}</h2>
      <p className="section-sub" data-i18n="qurras_sub">{t("qurras_sub")}</p>
    </div>
    <div className="qurras-grid">
      <article className="qari reveal">
        <div className="qari-video">
          <button className="vthumb" type="button" data-open="https://www.facebook.com/MURCenter.official/videos/qari-ahmad-azizi-sb/939381090526629/" aria-label="Watch Qari Ahmed Azizi on Facebook">
            <img src="/images/qari-azizi-thumb.jpg" alt="Qari Ahmed Azizi reciting the Qur'an" loading="lazy" />
            <span className="vplay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg></span>
            <span className="vbadge">Facebook&nbsp;→</span>
          </button>
        </div>
        <div className="qari-info">
          <h3>Qari Ahmed Azizi</h3>
          <p className="qari-role" data-i18n="head_role">{t("head_role")}</p>
          <a className="qari-watch" href="https://www.facebook.com/watch/?v=939381090526629" target="_blank" rel="noopener" data-i18n="watch_fb">{t("watch_fb")}</a>
          <a className="qari-phone" href="tel:+923014592661" dir="ltr">+92 301 4592661</a>
          <div className="qari-actions">
            <a className="btn btn-call" href="tel:+923014592661" data-i18n="call_label">{t("call_label")}</a>
            <a className="btn btn-wa" href="https://wa.me/923014592661" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </article>
      <article className="qari reveal">
        <div className="qari-video">
          <button className="vthumb" type="button" data-embed="https://www.youtube-nocookie.com/embed/sFiDyMgbhJ4?autoplay=1&rel=0" aria-label="Play Qari Abdur Rahman Al Afin recitation">
            <img src="/images/qari-abdurrahman-thumb.jpg" alt="Qari Abdur Rahman Al Afin — Qur'an recitation video" loading="lazy" />
            <span className="vplay" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg></span>
            <span className="vbadge">YouTube</span>
          </button>
        </div>
        <div className="qari-info">
          <h3>Qari Abdur Rahman Al Afin</h3>
          <p className="qari-role" data-i18n="qari_role">{t("qari_role")}</p>
          <a className="qari-watch" href="https://www.youtube.com/watch?v=sFiDyMgbhJ4" target="_blank" rel="noopener" data-i18n="watch_yt">{t("watch_yt")}</a>
          <a className="qari-phone" href="tel:+923168724692" dir="ltr">+92 316 8724692</a>
          <div className="qari-actions">
            <a className="btn btn-call" href="tel:+923168724692" data-i18n="call_label">{t("call_label")}</a>
            <a className="btn btn-wa" href="https://wa.me/923168724692" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </article>
    </div>
  </section>
  {/* ================= FEATURES ================= */}
  <section className="features" id="features">
    <div className="section-head reveal">
      <p className="kicker" data-i18n="features_kicker"><HonorificText text={t("features_kicker")} language={lang}/></p>
      <h2 data-i18n="features_title">{t("features_title")}</h2>
    </div>
    <div className="feature-grid">
      <article className="card reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x={2} y={6} width={13} height={12} rx="2.5" /><path d="m15 10.5 6-3.5v10l-6-3.5" /></svg>
        <h3 data-i18n="f1_t">{t("f1_t")}</h3>
        <p data-i18n="f1_d">{t("f1_d")}</p>
      </article>
      <article className="card reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx={12} cy={9} r="5.2" /><path d="m9.2 13.4-2 7.6 4.8-2.8 4.8 2.8-2-7.6" /></svg>
        <h3 data-i18n="f2_t">{t("f2_t")}</h3>
        <p data-i18n="f2_d">{t("f2_d")}</p>
      </article>
      <article className="card reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx={12} cy={12} r="9.2" /><path d="M12 6.8V12l3.4 3.4" /></svg>
        <h3 data-i18n="f3_t">{t("f3_t")}</h3>
        <p data-i18n="f3_d">{t("f3_d")}</p>
      </article>
      <article className="card reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3l2 5.4L19.6 10 14 11.9 12 17.4 10 11.9 4.4 10 10 8.4z" /></svg>
        <h3 data-i18n="f4_t">{t("f4_t")}</h3>
        <p data-i18n="f4_d">{t("f4_d")}</p>
      </article>
      <article className="card reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" /><path d="M9.5 9h6M9.5 13h6" /></svg>
        <h3 data-i18n="f5_t">{t("f5_t")}</h3>
        <p data-i18n="f5_d">{t("f5_d")}</p>
      </article>
      <article className="card reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx={9} cy={8} r="3.4" /><path d="M2.8 20c.8-3.2 3.3-5 6.2-5s5.4 1.8 6.2 5" /><circle cx={17} cy={9} r="2.5" /><path d="M16.8 15.4c2.3.5 4 2 4.6 4.6" /></svg>
        <h3 data-i18n="f6_t">{t("f6_t")}</h3>
        <p data-i18n="f6_d">{t("f6_d")}</p>
      </article>
    </div>
  </section>
  {/* ================= STATS ================= */}
  <section className="stats">
    <div className="stats-grid">
      <div className="stat reveal"><span className="stat-num" data-count={12000}>0</span><span className="stat-label" data-i18n="stats_students">{t("stats_students")}</span></div>
      <div className="stat reveal"><span className="stat-num" data-count={45}>0</span><span className="stat-label" data-i18n="stats_countries">{t("stats_countries")}</span></div>
      <div className="stat reveal"><span className="stat-num" data-count={300}>0</span><span className="stat-label" data-i18n="stats_teachers">{t("stats_teachers")}</span></div>
      <div className="stat reveal"><span className="stat-num" data-count={16}>0</span><span className="stat-label" data-i18n="stats_years">{t("stats_years")}</span></div>
    </div>
  </section>
  {/* ================= HOW IT WORKS ================= */}
  <section className="method" id="method">
    <div className="section-head reveal">
      <p className="kicker" data-i18n="method_kicker">{t("method_kicker")}</p>
      <h2 data-i18n="method_title">{t("method_title")}</h2>
    </div>
    <div className="steps">
      <div className="step reveal"><span className="step-num">1</span><h3 data-i18n="m1_t">{t("m1_t")}</h3><p data-i18n="m1_d">{t("m1_d")}</p></div>
      <div className="step reveal"><span className="step-num">2</span><h3 data-i18n="m2_t">{t("m2_t")}</h3><p data-i18n="m2_d">{t("m2_d")}</p></div>
      <div className="step reveal"><span className="step-num">3</span><h3 data-i18n="m3_t">{t("m3_t")}</h3><p data-i18n="m3_d">{t("m3_d")}</p></div>
    </div>
  </section>
  {/* ================= TESTIMONIALS ================= */}
  <section className="testimonials" id="testimonials">
    <div className="section-head reveal">
      <p className="kicker" data-i18n="test_kicker">{t("test_kicker")}</p>
      <h2 data-i18n="test_title">{t("test_title")}</h2>
    </div>
    <div className="testi-grid">
      <figure className="testi reveal">
        <blockquote data-i18n="ts1_q">{t("ts1_q")}</blockquote>
        <figcaption><strong data-i18n="ts1_n">{t("ts1_n")}</strong><span data-i18n="ts1_l">{t("ts1_l")}</span></figcaption>
      </figure>
      <figure className="testi reveal">
        <blockquote data-i18n="ts2_q">{t("ts2_q")}</blockquote>
        <figcaption><strong data-i18n="ts2_n">{t("ts2_n")}</strong><span data-i18n="ts2_l">{t("ts2_l")}</span></figcaption>
      </figure>
      <figure className="testi reveal">
        <blockquote data-i18n="ts3_q">{t("ts3_q")}</blockquote>
        <figcaption><strong data-i18n="ts3_n">{t("ts3_n")}</strong><span data-i18n="ts3_l">{t("ts3_l")}</span></figcaption>
      </figure>
    </div>
  </section>
  {/* ================= FAQ ================= */}
  <section className="faq" id="faq">
    <div className="section-head reveal">
      <p className="kicker" data-i18n="faq_kicker">{t("faq_kicker")}</p>
      <h2 data-i18n="faq_title">{t("faq_title")}</h2>
    </div>
    <div className="faq-list reveal">
      <details className="faq-item"><summary data-i18n="fq1_q">{t("fq1_q")}</summary><p data-i18n="fq1_a">{t("fq1_a")}</p></details>
      <details className="faq-item"><summary data-i18n="fq2_q">{t("fq2_q")}</summary><p data-i18n="fq2_a">{t("fq2_a")}</p></details>
      <details className="faq-item"><summary data-i18n="fq3_q">{t("fq3_q")}</summary><p data-i18n="fq3_a">{t("fq3_a")}</p></details>
      <details className="faq-item"><summary data-i18n="fq4_q">{t("fq4_q")}</summary><p data-i18n="fq4_a">{t("fq4_a")}</p></details>
      <details className="faq-item"><summary data-i18n="fq5_q">{t("fq5_q")}</summary><p data-i18n="fq5_a">{t("fq5_a")}</p></details>
      <details className="faq-item"><summary data-i18n="fq6_q">{t("fq6_q")}</summary><p data-i18n="fq6_a">{t("fq6_a")}</p></details>
    </div>
  </section>
  {/* ================= CTA ================= */}
  <section className="cta" id="enroll">
    <div className="cta-inner reveal">
      <h2 data-i18n="cta_title">{t("cta_title")}</h2>
      <p data-i18n="cta_sub">{t("cta_sub")}</p>
      <div className="hero-ctas">
        <a href="https://wa.me/923014592661" className="btn btn-light" target="_blank" rel="noopener" data-i18n="cta_btn">{t("cta_btn")}</a>
        <a href="mailto:info@markazalimurtaza.com" className="btn btn-outline-light" data-i18n="nav_contact">{t("nav_contact")}</a>
      </div>
    </div>
  </section>
</main>

)}

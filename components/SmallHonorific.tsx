export function HonorificText({text}:{text:string;language:string}){
 const parenthetical=text.match(/[（(][^）)]*[）)]/u)?.[0];
 const arabic=text.match(/رض[يىی]\s+(?:الله|اللہ)\s+عنه/u)?.[0];
 const honorific=parenthetical||arabic||"";
 const at=honorific?text.indexOf(honorific):-1;
 if(at<0)return <>{text}</>;
 return <>{text.slice(0,at)}<span className="brand-honorific">{honorific}</span>{text.slice(at+honorific.length)}</>;
}

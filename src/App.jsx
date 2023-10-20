import React, { useEffect, useState } from "react";
import "./App.css";
import CodeDive from "./component/codeDiv";

const App = () => {
  // input store
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [javaScriptCode, setJavaScriptCode] = useState("");

  //lock & unlock
  const [lock,setLock]=useState(true)
  useEffect(() => {
    setHtmlCode(localStorage.getItem('htmlCode')||"")
    setCssCode(localStorage.getItem('cssCode')||"")
    setJavaScriptCode(localStorage.getItem('js')||"")

   
  }, [])
  

  // output handle
  const handleOutput = (e) => {
    const iframe = document.getElementById("output");
    //html and css handle
    iframe.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";
    //javaScript handle
    iframe.contentWindow.eval(javaScriptCode);
  };

  return (
    <div className="app">
      <div className="left">
        <CodeDive  lock={lock } title='HTML' changeCode={setHtmlCode} code={htmlCode} codeName='htmlCode' />
        <CodeDive lock={lock} title='CSS' changeCode={setCssCode} code={cssCode} codeName='cssCode' />
        <CodeDive lock={lock} title='Javascript' changeCode={setJavaScriptCode} code={javaScriptCode} codeName='js' />
      </div>
      <div className="right"> 
        <button className="output" onClick={handleOutput}>
          Run
        </button>
        <button className="output" onClick={()=>setLock(!lock)}>{lock? "unlock" : "lock"}</button> 


        <iframe id="output"></iframe>
      </div>
    </div>
  );
};

export default App;

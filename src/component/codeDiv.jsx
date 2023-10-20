import React from 'react'

const CodeDive = ({title,changeCode,code,codeName,lock}) => {
  return (
    <>
        <div className="label">
          <span>{title}</span>
          <div className="lebelRight">
          <button disabled={lock}
            onClick={() => {
              navigator.clipboard.writeText(code);
              alert("Copid");
            }}
          >
            Copy
          </button>
          <button disabled={lock} onClick={()=>{
            localStorage.setItem(codeName,code);
            alert("saved")
          }}>save</button>
          </div>
        
        </div>
        <textarea
        disabled={lock}
        name={title}
          value={code}
          onChange={(e) => changeCode(e.target.value)}
        ></textarea>
    </>
  )
}

export default CodeDive
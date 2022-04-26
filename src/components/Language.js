import React from "react";
import "../assets/sass/language.scss";

function Language() {
  return (
    <div className="language">
      <span>Dil bilikləri</span>   <span><i class="fas fa-language"></i></span>
      <div className="lan d-flex">
        <div className="languages">
          <ul>
          <li style={{color:"white"}}><b>Azərbaycan</b></li>
            <li><b>Ingilis</b></li>
            <li ><b style={{color:"blue"}}>Türk</b></li>
            <li style={{color:"red"}}><b>Rus</b></li>
            
          </ul>
        </div>
        
      </div>
      <hr />
    </div>
  );
}

export default Language;

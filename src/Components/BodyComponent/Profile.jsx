import React from "react";
import Raman from "../Header/ActionTab/unnamed.jpg";
import { ListItem, FormRow } from "@material-ui/core";

export default function Profile() {
  return (

    <>
     <div>
     <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "100px 290px",
      }}>
         <div>
           <img style = {{width: "160px", height: "160px", borderRadius: "80px"}}
             src = {Raman}
           />
         </div>
         <div>
           <h1>Ramandeep</h1>
           <div style={{
        display: "flex",
        justifyContent: "space-around",
        width: "150%",
      }}>
              <h3>Mail</h3>
              <h3>phone</h3>
              <h3>linkedin</h3>

              <h3>github</h3>

           </div>
         </div>
      </div>

      <div className="About" style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "100px 290px",
      }}>
        <div>
           <h1>Overall Experience</h1> 
        </div>
        <div>
           <h3>1 Year / Front-end web developer at KSP solutions</h3>
           <div style={{
        display: "flex",
        justifyContent: "space-around",
        width: "150%",
      }}>
              

           </div>
         </div>

      </div>

      <div className="Availability" style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "100px 100px",
      }}>
        <div>
           <h1>Availability</h1> 
        </div>
        <div>
           <h3>Available</h3>
           <div style={{
        display: "flex",
        justifyContent: "space-around",
        width: "150%",
      }}>
              

           </div>
         </div>

      </div>

      <div className="Availability" style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "100px 250px",
      }}>
        <div>
           <h1>Role and current salaray</h1> 
        </div>
        <div>
           <h3>Front-end developer / NULL</h3>
           <div style={{
        display: "flex",
        justifyContent: "space-around",
        width: "150%",
      }}>
              

           </div>
         </div>

      </div>

     </div>
    
    </>
    
  )
}

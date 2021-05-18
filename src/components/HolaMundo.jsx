import React, { useState } from "react";
import PropTypes from "prop-types";


 const HolaMundo = () => {
    const [state,setState] = useState("");

    return (
             <div>
             <input type="text" placeholder="escribe tu texto"  onKeyPress={(e) => {setState(e.target.value)}}/>

             <h2>{state}</h2>
             </div>
        
    )

    }


    export default HolaMundo
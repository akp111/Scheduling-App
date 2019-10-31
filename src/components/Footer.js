import React from "react";
//footerelement

function Footer(){
    return(
        <footer className="end">
            <h3>Hope you completed your task!!</h3>
            <button onClick={()=>{
                    let date=new Date();
                    alert(date.getUTCDate());
            }}>Click to know date</button>
        </footer>
    )
}

export default Footer;
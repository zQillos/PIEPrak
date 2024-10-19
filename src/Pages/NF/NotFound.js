import React from "react";
import './NotFound.css'
import '../../reset.css'
import '../../index.css'
import '../../media.css'

function NotFound() {
    return (
        <div className="NotFound">
            <h2>Not found</h2>
            <div className="NFimg"><img src="/img/NF.png" alt="Тechworks"/></div>
        </div>
    );
}

export { NotFound }
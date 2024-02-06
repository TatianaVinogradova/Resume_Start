import React from "react"
import { Link } from "react-router-dom"

export default function Calculator() {
    return (
        <div className="calculator-page-container">
            <iframe src="https://giphy.com/embed/fMJDsRF41tKWi42K3T" width="380" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/primevideo-prime-video-saltburn-salt-burn-fMJDsRF41tKWi42K3T"></a></p>
            <div className="calculator-page-content">
                <h1> Calculator Program in JavaScript</h1>
                <p>Middle text about calculator</p>
            </div>
                <Link className="link-button" to="/">Back</Link>
            </div>
    )
}

import React from "react"
import { Link } from "react-router-dom"

export default function Game() {
    return (
        <div className="game-page-container">
            <iframe src="https://giphy.com/embed/fMJDsRF41tKWi42K3T" width="380" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/primevideo-prime-video-saltburn-salt-burn-fMJDsRF41tKWi42K3T"></a></p>
            <div className="game-page-content">
                <h1>Studying this course</h1>
                <p>In process...</p>
            </div>
            <div classNmae="game-page-cta">
                <h2></h2>
                <Link className="link-button" to="/">Back</Link>
            </div>
        </div>
    )
}

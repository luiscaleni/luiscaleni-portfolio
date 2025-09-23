import React from "react"
import "./CompContainerListApp.css"

export default function CompContainerListApp({elements}){
    return (
        <>
            <div className="container_list_app">
                <div className="container_apps">
                    {elements}
                </div>
            </div>
        </>
    )
}
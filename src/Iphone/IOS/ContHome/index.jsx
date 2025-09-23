import React from "react"
import './ContHome.css'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import AppIcons from "../CompSystem/CompAppIcons"
import Dock from "../CompSystem/CompDock"
import CompContainerListApp from "../CompUtils/CompContainerListApp"

export default function ContHome(){
    return (
        <>
        <div id="cont_home">
                <div id="navHome"></div>
                <Splide aria-label="Apps home">
                    <SplideSlide>
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="curriculum" classNameApp="appImg" id="Curriculum" text="Curriculum" contTotalValue="home"/>
                                <AppIcons name="youtube" classNameApp="appImg" id="Youtube" text="Reels CV" contTotalValue="home"/>
                                <AppIcons name="photos" classNameApp="appImg" id="Photos" text="Photos" contTotalValue="home"/>
                                <AppIcons name="camera" classNameApp="appImg" id="Camera" text="Camera" contTotalValue="home"/>
                                <AppIcons name="xcode" classNameApp="appImg" id="Atribution" text="Atributions" contTotalValue="home"/>
                                <AppIcons name="calendar" classNameApp="appImg" id="Calendar" text="Calendar" contTotalValue="home"/>
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="home" classNameApp="appImg" id="Home" text="Home" contTotalValue="home"/>
                                <AppIcons name="find-my" classNameApp="appImg" id="findMy" text="Find my" contTotalValue="home"/>
                                <AppIcons name="facetime" classNameApp="appImg" id="FaceTime" text="FaceTime" contTotalValue="home"/>
                                <AppIcons name="app-store" classNameApp="appImg" id="AppStore" text="App Store" contTotalValue="home"/>
                                <AppIcons name="news" classNameApp="appImg" id="news" text="News" contTotalValue="home"/>
                                <AppIcons name="clock" classNameApp="appImg" id="Clock" text="Clock" contTotalValue="home"/>
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="wallet" classNameApp="appImg" id="wallet" text="Wallet" contTotalValue="home"/>
                            </>
                        } />
                    </SplideSlide>
                    <SplideSlide>
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="calculator" classNameApp="appImg" id="Calculator" text="Calculator" contTotalValue="home"/>
                                <AppIcons name="weather" classNameApp="appImg" id="Weather" text="Weather" contTotalValue="home"/>
                                <AppIcons name="reminders" classNameApp="appImg" id="reminders" text="Reminders" contTotalValue="home"/>
                                <AppIcons name="settings" classNameApp="appImg" id="settings" text="Settings" contTotalValue="home"/>
                                <AppIcons name="health" classNameApp="appImg" id="health" text="Health" contTotalValue="home"/>
                                <AppIcons name="voice-memos" classNameApp="appImg" id="voiceMemos" text="Voice Memos" contTotalValue="home"/>
                            </>
                        } />
                    </SplideSlide>
                </Splide>
                <Dock />
            
        </div>
        </>
    )
}
import React, { FC, useState } from "react"
import { RobotImg } from "./RobotImg"


export const InputSection: FC<{}> = () => {

    const [state, setPlace] = useState({});

    const setXposition = (event: React.FormEvent<HTMLInputElement>) => {
    //    setPlace({...state, xpos: event.target.value});
    }

    const setYposition = (event: React.FormEvent<HTMLInputElement>) => {
        // setPlace({...state, ypos: event.target.value});
    }

    const setDirection = (event: React.FormEvent<HTMLInputElement>) => {
        // setPlace({...state, facing: event.target.value});
    }


    return(
        <>
            <div>
                Start by placing the robot on the grid.<br/>
                Then click on the buttons to move the robot around
            </div>
            <div style={{marginTop:"1em"}}>
               
                <input type="number" style={{width:"3em", height:"3em", marginRight:"0.5em"}} placeholder="x" onChange={e => setXposition(e)} name="xpos"></input>
                <input type="number" style={{width:"3em", height:"3em", marginRight:"0.5em"}} placeholder="y" onChange={e => setYposition(e)} name="ypos"></input>
                <input type="text" style={{width:"5em", height:"3em", marginRight:"0.5em" }} placeholder="direction" onChange={e => setDirection(e)} name="facing"></input>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>
                    PLACE 
                </button>
                
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>MOVE</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>LEFT</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>RIGHT</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>REPORT</button>
            </div>
            <div id="reportSection">
            </div>

            <div style={{marginTop:"2em"}}>
                {RobotImg}
            </div>
            
        </>
    )
}
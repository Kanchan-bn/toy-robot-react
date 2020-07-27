import React, { FC } from "react"
import { RobotImg } from "./RobotImg"

type Props = {
    onPosition: Function,
    onDirection: Function,
}

export const InputSection: FC<Props> = (props) => {
    return(
        <>
            <div>
                Start by placing the robot on the grid.<br/>
                Then click on the buttons to move the robot around
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>
                    PLACE 
                </button>
                <input type="number" style={{width:"3em", height:"3em", marginRight:"0.5em"}} placeholder="x" onChange={e => props.onPosition(e)} name="xpos"></input>
                <input type="number" style={{width:"3em", height:"3em", marginRight:"0.5em"}} placeholder="y" onChange={e => props.onPosition(e)} name="ypos"></input>
                <input type="text" style={{width:"5em", height:"3em" }} placeholder="direction" onChange={e => props.onDirection(e)} name="facing"></input>
                
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
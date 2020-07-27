import React, { FC } from "react";
import { maxRows, maxColumns } from '../constants';

export const Table: FC<{}> = () => {
    let rows = [];

    let cols = [];

    let col = <div style={{height:"7em", width:"7em", margin: "0.1em", backgroundColor:"lightGrey", borderRadius:"0.3em"}}></div>;

    for(let j=0; j < maxColumns; j++) {
    cols.push(<div style={{display:"inline-block"}} key={j}>{col}</div>)
    }

    for(let i=0; i<maxRows; i++) {
    rows.push(<div style={{display:"block", margin: 0}} key={"row"+i}>{cols}</div>)
    }
    
    return (
        <>
            {rows}            
        </>
    );
    
}

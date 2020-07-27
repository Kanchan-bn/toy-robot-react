import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { Table } from './Table';
import { InputSection } from './InputSection';

export const RobotApp: FC<{}> = () => {
    const [state, setPosition] = useState({});

    const handlePosition = (event: React.FormEvent<HTMLInputElement>) => {
        setPosition({...state, [event.target.name] : event.target.value})
    }

    const handleDirection = () => {

    }

    const handlePlace = () => {

    }


    return(
    <>
        <div style={{display:"inline-block", width:"40%", verticalAlign:"top"}}>
          <InputSection onPosition={handlePosition} onDirection={handleDirection} onPlace={handlePlace} />
        </div>
        <div style={{display:"inline-block"}}>
          <Table />
        </div>
    </>
    );
}
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { Table } from './Table';
import { InputSection } from './InputSection';

export const RobotApp: FC<{}> = () => {
    const [state, setPosition] = useState({});

    const handlePlace = () => {

    }


    return(
    <>
        <div style={{display:"inline-block", width:"40%", verticalAlign:"top"}}>
          <InputSection />
        </div>
        <div style={{display:"inline-block"}}>
          <Table />
        </div>
    </>
    );
}
import React, { FC } from "react";
import { maxColumns } from "../constants";

import { Col } from './Col';

export const Row: FC<{}> = () => {
    let cols = [];

    for(let j=0; j < maxColumns; j++) {
        cols.push(<div style={{display:"inline-block"}}><Col /></div>)
    }
    return (
    <>
        {cols}
    </>);
}
import React from 'react';
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import OursGridDataHandler from "../../logic/GridDataHandler/OursGridDataHandler";

const Ours = () => {
    return (
        <div>
            <GridDisplay layoutHandler={OursGridDataHandler}/>
        </div>
    )
}

export default Ours;
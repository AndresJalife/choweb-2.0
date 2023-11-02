import React from 'react';
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import VideoclipsGridDataHandler from "../../logic/GridDataHandler/VideoclipsGridDataHandler";

const Videoclips = () => {
    return (
        <div>
            <GridDisplay layoutHandler={VideoclipsGridDataHandler} view={'videoclips'}/>
        </div>
    )
}

export default Videoclips;
import React from 'react';
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import AdvertisementGridDataHandler from "../../logic/GridDataHandler/AdvertisementGridDataHandler";

const Advertising = () => {
    return (
        <div>
            <GridDisplay layoutHandler={AdvertisementGridDataHandler}/>
        </div>
    )
}

export default Advertising;
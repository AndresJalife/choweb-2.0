import React from 'react';

const GenericProjectDetails = ({className, src}) => {
    return (
        <div className={className}>
            <img src={src} alt={'generic-project-info'} style={{width: '80%'}}/>
        </div>
    )
}

export default GenericProjectDetails;
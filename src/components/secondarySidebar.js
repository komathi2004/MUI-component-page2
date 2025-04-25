import React from 'react'
import SecondarySidebar1 from './secondarySidebars/secondarySidebar1'
import SecondarySidebar2 from './secondarySidebars/secondarySidebar2';

const SecondarySidebar = ({selectedIndex, open}) => {
    console.log(selectedIndex);
    switch(selectedIndex){
        case 1:
            return <SecondarySidebar1 open={open}/>
        case 2:
            return <SecondarySidebar2 />
        default:
            return <SecondarySidebar1 />
    }
}

export default SecondarySidebar
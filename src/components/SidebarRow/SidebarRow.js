import React from 'react';
import './SidebarRow.css'
const SidebarRow = ({title,Icon}) => {
    return (
        <div className='sidebar-row'  >
            {Icon && <Icon/>}
        
           <p> {title}  </p> 
        </div>
    );
};

export default SidebarRow;
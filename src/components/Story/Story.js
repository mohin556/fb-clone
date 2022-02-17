import React from 'react';
import Myday from '../Myday/Myday';
import './Story.css';

import StoryRel from '../StoryRel/StoryRel';
import PostOption from '../PostOption/PostOption';


const Story = () => {
    return (
        <div className='story'>
           <StoryRel></StoryRel>
            <PostOption></PostOption>
        </div>
    );
};

export default Story;
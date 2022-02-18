import React from 'react';
import Myday from '../Myday/Myday';
import './Story.css';

import StoryRel from '../StoryRel/StoryRel';
import PostOption from '../PostOption/PostOption';
import Upload from '../Upload/Upload';
import profile from '../../image/student.jpg';
import image from '../../image/confident.jpg';


const Story = () => {
    return (
        <div className='story'>
           <StoryRel></StoryRel>
            <PostOption></PostOption>
            <Upload profile={profile} user="mohin@alhoque" message='wow its really nice' image={image} ></Upload>
           

        </div>
    );
};

export default Story;
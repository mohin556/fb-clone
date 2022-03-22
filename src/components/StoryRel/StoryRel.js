import React from 'react';
import './StoryRel.css';
import student2 from '../../image/student.jpg'
import student5 from '../../image/cartoon.webp'
import student from '../../image/confident.jpg'
import student3 from '../../image/head.jpg'
import student1 from '../../image/mohin.jpg'
import Myday from './../Myday/Myday';
const StoryRel = () => {
    return (
        <div className='storyRel' >
            <Myday image={student5} title="extra" src="https://www.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_10686287.htm#query=programmer&from_query=pogrammer&position=34&from_view=search" />
            <Myday image={student2} title="advocate" src="https://www.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_10686287.htm#query=programmer&from_query=pogrammer&position=34&from_view=search" />
            <Myday image={student3} title="extra" src="https://www.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_10686287.htm#query=programmer&from_query=pogrammer&position=34&from_view=search" />
            <Myday image={student} title="Mr John" src="https://www.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_10686287.htm#query=programmer&from_query=pogrammer&position=34&from_view=search" />
            <Myday image={student1} title="Mohin" src="https://www.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_10686287.htm#query=programmer&from_query=pogrammer&position=34&from_view=search" />
            <Myday image={student1} title="Ervin" src="https://www.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_10686287.htm#query=programmer&from_query=pogrammer&position=34&from_view=search" />
        
        </div>
    );
};

export default StoryRel;
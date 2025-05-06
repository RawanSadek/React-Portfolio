import React from 'react'

export default function Experience() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 my-5'>
        <div className="content">
            <p className='page-title text-uppercase'>experience</p>
            <h4 className='page-headline text-uppercase my-4'>work experience</h4>

            <ul className="experiences-container px-4 ms-4 mb-5">
                
                <li className="experience position-relative mb-4">
                    <div className="exp-icon position-absolute bg-primary text-white fs-5 rounded-circle">
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <i className="fa-solid fa-caret-left arrow position-absolute"></i>
                    <div className="exp-content position-relative p-4">
                        <h5>Full Stack Developer <span className='text-secondary fs-6'>2017-2018</span></h5>
                        <p className='my-4'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                </li>

                <li className="experience position-relative mb-4">
                    <div className="exp-icon position-absolute bg-danger text-white fs-5 rounded-circle">
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <i className="fa-solid fa-caret-left arrow position-absolute"></i>
                    <div className="exp-content position-relative p-4">
                        <h5>Front End Developer at Google Company <span className='text-secondary fs-6'>2017-2018</span></h5>
                        <p className='my-4'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                </li>

                <li className="experience position-relative mb-4">
                    <div className="exp-icon position-absolute bg-warning text-white fs-5 rounded-circle">
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <i className="fa-solid fa-caret-left arrow position-absolute"></i>
                    <div className="exp-content position-relative p-4">
                        <h5>System Analyst <span className='text-secondary fs-6'>2017-2018</span></h5>
                        <p className='my-4'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                </li>

                <li className="experience position-relative">
                    <div className="exp-icon position-absolute rounded-circle">
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

import React from 'react'

export default function About() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div className="content">
            <p className='page-title text-uppercase'>about us</p>
            <h4 className='page-headline text-uppercase my-4'>who am i?</h4>
            <p className='description text-dark-emphasis '><span className='fw-semibold'>Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p className='description text-dark-emphasis '>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

            <div className="row justify-content-between mt-4">
                <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
                    <div className='feature border-bottom border-2 border-primary'>
                        <i className="fa-regular fa-lightbulb mb-4 fs-3 text-primary"></i>
                        <h5 className='feature-name text-capitalize'>graphic design</h5>
                    </div>
                </div>

                <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
                    <div className='feature border-bottom border-2 border-danger'>
                        <i className="fa-solid fa-earth-africa mb-4 fs-3 text-danger"></i>
                        <h5 className='feature-name text-capitalize'>web design</h5>
                    </div>
                </div>

                <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
                    <div className='feature border-bottom border-2 border-warning'>
                        <i className="fa-solid fa-database mb-4 fs-3 text-warning"></i>
                        <h5 className='feature-name text-capitalize'>software</h5>
                    </div>
                </div>

                <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
                    <div className='feature border-bottom border-2 border-success'>
                        <i className="fa-solid fa-mobile-screen-button mb-4 fs-3 text-success"></i>
                        <h5 className='feature-name text-capitalize'>application</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

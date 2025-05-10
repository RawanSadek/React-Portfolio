import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import NotFound from '../Notfound/NotFound'

export default function MasterLayout() {
    return (
        <>
            <div className="container-fluid p-0">

                <div className="row g-0 justify-content-between vw-100 vh-100">
                    <div className="sidebar-container col-sm-12 col-md-3 col-lg-3 col-xl-2 py-4 px-4 bg-light">
                        <Sidebar />
                    </div>
                    <div className="content-container col-sm-12 col-md-8 col-lg-9 col-xl-10">
                        
                        <Outlet/> {/*refers to children*/}
                    </div>
                </div>
            </div>
        </>
    )
}

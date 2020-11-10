import React from 'react'
import {Link} from 'react-router-dom'


import './footer-company.css'

const FooterCompany = () => {
    return (
        <div className='containe-fluid background-dark mt-5'>
            <div className='container'>
                <div className='row mt-4'>

                            <Link to='/' className='d-block col-sm-2 footer-text'>
                                Home
                            </Link>

                            <Link to='/' className='d-block col-sm-2 footer-text'>
                                Profile
                            </Link>

                            <Link to='/' className='d-block col-sm-2 footer-text'>
                                News
                            </Link>

                            <Link to='/auth' className='d-block col-sm-2 footer-text'>                               
                                Authorization
                            </Link>

                </div>
            </div>
        </div>
    )
}

export default FooterCompany;
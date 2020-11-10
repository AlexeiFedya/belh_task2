import React from 'react'

import AdvantagesCompany from './advantages-company/advantages-company'
import DescriptionCompany from './description-company/description-company'
import earth from './earth_k.png'



const Main = () => {
    return (
        <div style={{position: 'relative'}}>
            <div className='gradient'>
            <DescriptionCompany/>

            <img src={earth} alt='earth' className='earth-img' />

            <AdvantagesCompany/>
            </div>

            {/* <div>
                <ReviewCompany/>
            </div> */}
            
        </div>
    )
}

export default Main;
import React from 'react';

import facebook_icon from './002-facebook.png'
import twitter_icon from './003-twitter.png'
import instagram_icon from './004-instagram.png'
import youtube_icon from './001-youtube.png'

const DescriptionCompany = () => {
    return(
        <div className='container'>
<div className="DescriptionCompany row mt-3">
            <div className="col-sm-6">
                    <h1 className='header-text'>Организация семинаров и коучингов под ключ</h1>
                    <h2 className='top-h2'>Оставьте заявку до <span className='bold'>10 октября</span> и получите в порадок кейтеринг <span className='bold'> на 10 персон</span></h2>
                    <ul className='text'>
                        <li>Конференции</li>
                        <li>Тимбилдинги и корпоративы</li>
                        <li>Бизнес-завтраки</li>
                    </ul>
                    <button className='button mt-4'>Оставить заявку</button>
                </div>
                <div className='col-sm-6 d-flex flex-row-reverse justify-content align-items-end'>
                    <div>
                        <a href='https://www.facebook.com/' className='mx-2'>
                            <img src={facebook_icon} alt="facebook_icon"/>
                        </a>
                        <a href='https://www.youtube.com/'>
                            <img src={youtube_icon} alt="youtube_icon"  className='mx-2'/>
                        </a>
                        <a href='https://www.instagram.com/'>
                            <img src={instagram_icon} alt="instagram_icon"  className='mx-2'/>
                        </a>
                        <a href='https://twitter.com/explore'>
                            <img src={twitter_icon} alt="twitter_icon"  className='mx-2' />
                        </a>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}

export default DescriptionCompany;
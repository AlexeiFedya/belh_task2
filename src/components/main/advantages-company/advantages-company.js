import React from 'react'

import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'

import './advantages-company.css'

const AdvantagesCompany = () => {
    return(
        <div className='container'>
<div className='row py-5'>
            <div className='col-sm-10'>
                <div>
                    <h1 className='header-text'>4 Главных преимущества</h1>
                    <h2 className='h2-text'>Благодаря которым нам доверили уже 473 семнинаров и коучингов</h2>
                    <hr/>
                </div>
                <div className='row mt-5'>
                    <div className='col-sm-6 mt-5'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <img src={icon1} alt="icon1"/>
                            </div>
                            <div className='col-sm-9'>
                                <h2 className='bold'>Многолетний опыт</h2>
                                <p className='text'>Занимаемся профессиональной организацией с 2006 года</p>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-sm-6 mt-5'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <img src={icon2} alt="icon2"/>
                            </div>
                            <div className='col-sm-9'>
                                <h2 className='bold'>473 мероприятий</h2>
                                <p className='text'>Именно столько бизнес семинаров мы провели за 13 лет работы</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 mt-5'>
                    <div className='row'>
                            <div className='col-sm-3'>
                                <img src={icon3} alt="icon3"/>
                            </div>
                            <div className='col-sm-9'>
                                <h2 className='bold'>Снимаем все оргвопросы</h2>
                                <p className='text'>Брендирование пространства, кейтеринг, входная зона, фото и видео, размещение гостей</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 mt-5'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <img src={icon4} alt="icon4"/>
                            </div>
                            <div className='col-sm-9'>
                                <h2 className='bold'>Сильная IT-сторона</h2>
                                <p className='text'>Каждый шаг фиксируется в CRM, к которой у вас будет доступ, чтобы все контролировать</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default AdvantagesCompany;
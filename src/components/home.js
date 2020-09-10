import React from 'react'
import '../css/home.css'
import Product from './product'

function Home() {
    return (
        <div className="home">   
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                className="home__image"
                alt=""/>
                <div className="home__row">
                    <Product price={100}
                        image={'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544636345l/43205859._SY475_.jpg'}
                    title={'Children Nameless'}
                    rating={4}
                    id={1}
                    />
                    <Product price={20.78}
                        image={'https://static.bhphoto.com/images/images2000x2000/1536057364_1432359.jpg'}
                        title={'Sony WH-1000XM3 Wireless Noise-Canceling Over-Ear'}
                        rating={4}
                        id={2}
                    />
                </div>
                <div className="home__row">
                    <Product price={200}
                        image={'https://images-na.ssl-images-amazon.com/images/I/81YlJ3OrMWL._AC_SX569_.jpg'}
                        title={'Bold N 1 6.4'}
                        rating={3}
                        id={65}
                    />
                    <Product price={1009.3}
                        image={'https://cdn.shopify.com/s/files/1/0019/7758/1666/products/JRL_1654T-SNG_Angle_Open_00_1400x.jpg?v=1562368194'}
                        title={'Just Racks JRL1654T-SNG Gloss White Extra Wide TV'}
                        rating={2}
                        id={78}
                    />
                    <Product price={200}
                        image={'https://snpi.dell.com/snp/images/products/large/en-ca~AA640623/AA640623.jpg'}
                        title={'Logitech G502 Lightspeed Wireless Gaming Mouse'}
                        rating={4}
                        id={11}
                    />
                </div>
                <div className="home__row">
                    <Product price={1700}
                        image={'https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg'}
                        title={"Amazon.co.ukSamsung LC49J890DKUXEN 49' Curved Ultra Wide LED"}
                        rating={5}
                        id={13}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

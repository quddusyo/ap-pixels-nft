import React, {useEffect, useState} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import instagramLogoLight from '../assets/owner/instagramLight.png'
import twitterLogoLight from '../assets/owner/twitterLight.png'
import moreIconLight from '../assets/owner/moreLight.png'
import './Main.css'

const Main = ({ selectedPixel, pixelListData, themeSwitch}) => {
    const [activePixel, setActivePixel] = useState(pixelListData[0])

    useEffect(() => {
        setActivePixel(pixelListData[selectedPixel])
    }, [pixelListData, selectedPixel])

    return (
        <div className='main'>
            <div className={ themeSwitch ? 'mainContent' : 'mainContentDark' }>
                <div className='punkHighlight'>
                    <div className='pixelContainer'>
                        <img
                            className='selectedPixel'
                            src={activePixel.image_original_url}
                            alt=''
                        />
                    </div>
                </div>

                <div className='pixelDetails'
                    style={{ color: themeSwitch ? '#FFF' : '#000' }}
                >
                    <div className='title'>
                        {activePixel.name}
                    <span className='itemNumber'> ·#{Number(activePixel.token_id)+1}</span>
                    </div>
                
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img
                                src={activePixel.owner.profile_img_url} alt='' />
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div>{activePixel.owner.address}</div>
                                <div className={themeSwitch ? 'ownerHandle' : 'ownerHandleLight'}>@Yahyousuf</div>
                            </div>
                            <a 
                                className={themeSwitch ? 'ownerLink instagramContainer' : 'ownerLinkLight'}
                                href='https://www.instagram.com/yahyousuf/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={themeSwitch ? instagramLogo : instagramLogoLight} alt='' />
                            </a>
                            <a
                                className={themeSwitch ? 'ownerLink twitterContainer' : 'ownerLinkLight'}
                                href='https://www.twitter.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={themeSwitch ? twitterLogo : twitterLogoLight} alt='' />
                            </a>
                            <div className={themeSwitch ? 'ownerLink moreContainer' : 'ownerLinkLight'}>
                                <img src={themeSwitch ? moreIcon : moreIconLight} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

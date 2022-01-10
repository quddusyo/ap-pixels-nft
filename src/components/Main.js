import React, {useEffect, useState} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({ selectedPixel, pixelListData, themeSwitch}) => {
    const [activePixel, setActivePixel] = useState(pixelListData[0])

    useEffect(() => {
        setActivePixel(pixelListData[selectedPixel])
    }, [pixelListData, selectedPixel])

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='pixelContainer'>
                        <img
                            className='selectedPixel'
                            src={activePixel.image_original_url}
                            alt=''
                        />
                    </div>
                </div>

                <div className='pixelDetails' style={{ color: themeSwitch ? '#FFF' : '#000' }}>
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
                                <div className='ownerHandle'>@Yahyousuf</div>
                            </div>
                            <a className='ownerLink' href='https://www.instagram.com/yahyousuf/' target='_blank' rel='noreferrer'>
                                <img src={instagramLogo} alt='' />
                            </a>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

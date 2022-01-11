import React from 'react'
import CollectionCard from './CollectionCard'
import './PixelList.css'

const PixelList = ({ pixelListData, setSelectedPixel, themeSwitch }) => {
    return (
        <div className='pixelList'>
            {pixelListData.map(pixel => (
                <div onClick={() => setSelectedPixel(pixel.token_id)}>
                    <CollectionCard
                        key={pixel.token_id}
                        id={pixel.token_id}
                        name={pixel.name}
                        traits={pixel.traits}
                        description={pixel.description}
                        image={pixel.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default PixelList

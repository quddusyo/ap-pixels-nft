import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({ id, name, traits, description, image }) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt='' />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'> · #{Number(id)+1}</div>
                </div>

                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt='' />
                    <div className='price'>{Number(traits[0].value)?traits[0].value:traits[1].value}</div>
                </div>

                <div className='descriptionContainer'>
                    <div className='description'>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard

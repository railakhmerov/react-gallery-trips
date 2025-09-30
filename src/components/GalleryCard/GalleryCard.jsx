import './GalleryCard.css'

function GalleryCard(props) {
   console.log(props)
   return (
   	<a href="#" className='card'>
         <img src={props.image} alt="card-image" />
         <div className='card__top-info'>
            <p className='card__transport'>{props.transport}</p>
            {props.numberOfPeople && <p className='card__count-people'>{props.countPeople}</p>}
         </div>
         <p className='card__place-month-price'>{props.place}, {props.month} - {props.price}</p>
      </a>
   )
}

export default GalleryCard
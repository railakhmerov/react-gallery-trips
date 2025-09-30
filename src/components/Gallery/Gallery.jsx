import './Gallery.css'
import galleryPlace1 from '../../assets/gallery-place-1.jpg'
import galleryPlace2 from '../../assets/gallery-place-2.jpg'
import galleryPlace3 from '../../assets/gallery-place-3.jpg'
import galleryPlace4 from '../../assets/gallery-place-4.jpg'
import GalleryCard from '../GalleryCard/GalleryCard'

const gallery = [
  {
    place: "Тбилиси",
    month: "апрель",
    price: "83.000",
    transport: "на автобусе",
    numberOfPeople: true,
    countPeople: 10,
    image: galleryPlace1,
    link: '/card-1'
  },
  {
    place: "Стамбул",
    month: "март",
    price: "110.000",
    transport: "на самолете",
    numberOfPeople: false,
    image: galleryPlace2,
    link: '/card-2'
  },
  {
    place: "Дубай",
    month: "июнь",
    price: "220.000",
    transport: "на самолете",
    numberOfPeople: true,
    countPeople: 22,
    image: galleryPlace3,
    link: '/card-3'
  },
  {
    place: "Пхукет",
    month: "сентябрь",
    price: "135.000",
    transport: "самолет + паром",
    numberOfPeople: true,
    countPeople: 11,
    image: galleryPlace4,
    link: '/card-4'
  },
]

function Gallery() {
  return (
   	<section className='gallery'>
      { gallery.map(card => (
        <GalleryCard 
          image={card.image}
          link={card.link}
          place={card.place}
          month={card.month}
          price={card.price}
          transport={card.transport}
          numberOfPeople={card.numberOfPeople}
          countPeople={card.countPeople}
        />
      )) }
    </section>
  )
}

export default Gallery
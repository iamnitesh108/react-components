import Accordion from './components/accordion'
import Carousel from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import {slides} from './components/image-slider/data.json'
function App() {
  return (
    <div className='App'>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      <Carousel data={slides}/> 
    </div>
  )
}

export default App

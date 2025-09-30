import './App.css'
import Gallery from './components/Gallery/Gallery'
import Title from './components/Title/Title'

function App() {
  return (
   <div className='container'>
		<Title
			title="Галерея путешествий"
		/>
		<Gallery />
   </div>
  )
}

export default App
import './App.css'
import { useEffect,useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './components/home'
import { Aside } from './components/aside'
import { Movies } from './pages/movies'
import { Series } from './pages/series'
import { Bookmark } from './pages/bookmarks'
import { SearchProvider } from './context/searchContext'
import { getMovies } from './api'

function App() {  
  const [data,setData] = useState([])

  useEffect(()=>{
    getMovies().then(data=>setData(data))
},[])

  return (
    <SearchProvider>
      <div>
      <BrowserRouter>
        <div className="flex flex-col h-[100vh] w-[100vw] xl:flex-row">
            <Aside/>
          <Routes>
            <Route path="/" element={<Home data={data}/>}/>
            <Route path="/movies" element={<Movies data={data}/>}/>
            <Route path="/series" element={<Series data={data}/>}/>
            <Route path="/bookmark" element={<Bookmark data={data}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </SearchProvider>
  )
}

export default App

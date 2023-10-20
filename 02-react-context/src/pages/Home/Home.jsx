import Header from '@/components/Header/Header'
import SongList from '@/components/SongList/SongList'
import SongDetails from '@/components/SongDetails/SongDetails'
import { SongProvider } from '@/context/SongContext'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <Header />
      <div className='home-container'>
        <div className='izquierdo'>
          <SongList />
        </div>
        <div className='derecho'>
          <SongDetails />
        </div>
      </div>
    </SongProvider>
  )
}
export default Home

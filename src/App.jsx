import Overview from './components/Overview';
import Header from './components/Header';
import Features from './components/Features';
import Github from './components/Github';
export default function App() {
  return (
    <div className='overflow-auto bg-black'>
      <Header/>
      <Overview/>
      <Features/>
      <Github/>
    </div>
  )
}

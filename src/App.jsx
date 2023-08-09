import Overview from './components/Overview';
import Header from './components/Header';
import Features from './components/Features';
import Github from './components/Github';
import Blog from './components/Blog';
import Team from './components/Team';

export default function App() {
  return (
    <div className='overflow-auto bg-black'>
      <Header/>
      <Overview/>
      <Features/>
      <Github/>
      <Blog/>
      <Team/>
    </div>
  )
}

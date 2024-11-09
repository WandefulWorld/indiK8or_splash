import Overview from '../components/Overview';
import Features from '../components/Features';
import Github from '../components/Github';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Header from '../components/Header';

const Home = () => {
  return (
    <main className='overflow-auto bg-black'>
      <Header/>
      <Overview/>
      <Features/>
      <Github/>
      <Blog/>
      <Team/>
    </main>
  )
}

export default Home;

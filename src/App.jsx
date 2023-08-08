import Overview from './components/Overview';
import Header from './components/Header';
import Features from './components/Features';

export default function Example() {
  return (
    <div className='overflow-auto'>
      <Header/>
      <Overview/>
      <Features/>
    </div>
  )
}

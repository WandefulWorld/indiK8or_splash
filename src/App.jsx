import Overview from './components/Overview';
import Header from './components/Header';

export default function Example() {
  return (
    <div className='overflow-auto bg-gradient-to-b from-indigo-500'>
      <Header/>
      <Overview/>
    </div>
  )
}

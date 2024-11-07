import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function Team() {
  return (
      <div className="mt-24 mb-24 max-w-7xl mx-auto px-4 sm:px-4 md:px-8 font-serif">
        <div className='w-12 h-12 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-lime-600 dark:highlight-white/20'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>


        </div>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl'>Meet Our Team</h2>
        <div className='mt-8 w-full space-y-6 text-gray-400 text-2xl'>
          <p>We are a dynamic group of Software Engineers who are passionate about what we do</p>
        </div>
        <ul role='list' className='flex flex-row mt-1 gap-12'>
          <li className=''>
            <h3 className='text-center mt-4 font-bold text-xl'>Yueran Li</h3>
            <div className='flex flex-row justify-center pt-4'>
              <a href="https://www.linkedin.com/in/yueranli/"><img className='w-12' src={linkedin}/></a>
              <a href="https://github.com/kneazle714"><img className='w-12' src={github}/></a>
            </div>
          </li>
          <li>
            <h3 className='text-center mt-4 font-bold text-xl'>Ivy Wang </h3>
            <div className='flex flex-row justify-center pt-4'>
              <a href="https://www.linkedin.com/in/wanwang12/"><img className='w-12' src={linkedin}/></a>
              <a href="https://github.com/WandefulWorld"><img className='w-12' src={github}/></a>
            </div>
          </li>
          <li>
            <h3 className='text-center mt-4 font-bold text-xl'>Julian Babon</h3>
            <div className='flex flex-row justify-center pt-4'>
              <a href="https://www.linkedin.com/in/julianbabon/"><img className='w-12' src={linkedin}/></a>
              <a href="https://github.com/babonjmc"><img className='w-12' src={github}/></a>
            </div>

          </li>
          <li>
            <h3 className='text-center mt-4 font-bold text-xl'>Tadd LeRocque</h3>
            <div className='flex flex-row justify-center pt-4'>
              <a href="https://www.linkedin.com/in/taddlerocque/"><img className='w-12' src={linkedin}/></a>
              <a href="https://github.com/LeRocque"><img className='w-12' src={github}/></a>
            </div>
          </li>
      </ul>
      </div>
  )
}


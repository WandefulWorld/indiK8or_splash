
const Blog = () => {
  return (
    <div className='mt-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 font-serif'>
      <div className='w-12 h-12 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-yellow-500 dark:highlight-white/20'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>

      </div>
      <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl'>IndiK8or: A New Game Player</h2>
      <div className='mt-8 max-w-3xl space-y-6 text-gray-400'>
        <p>Read more about the launch of IndiK8or on Medium! This article will show you why IndiK8or is an ideal solution for senior developers and organizations, ensuring the health and performance of their Kubernetes-based applications.</p>
      </div>
      <a className='group inline-flex items-center h-9 rounded-full text-lg font-semibold whitespace-nowrap px-5 focus:outline-none focus:ring-2 bg-indigo-50 text-gray-200
      hover:bg-yellow-500 hover:text-gray-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-slate-100
      dark:hover:text-gray-800 dark:focus:ring-slate-500 mt-8' href="https://medium.com/@wanwangbtb/a-new-game-player-indik8or-237daac583d6">Read on Medium
        <span className='sr-only'>, responsive design</span>
        <svg className='overflow-visible ml-4 text-indigo-300 group-hover:text-indigo-400 dark:text-s;ate-500 dark:group-hover:text-slate-400
        ' width='3' height='6' viewBox='0 0 3 6' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M0 0L3 3L0 6'></path>
        </svg>
      </a>
    </div>
  )
}

export default Blog

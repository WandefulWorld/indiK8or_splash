const Github = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 font-serif'>
      <div className='w-12 h-12 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-indigo-500 dark:highlight-white/20'>

      </div>
      <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl'>Visit Github Repository</h2>
      <div className='mt-8 max-w-3xl space-y-6'>
        <p>Check out INDIK8OR on our Github where you will find everything you need to start the application.</p>
        <p>Feel free to submit any issues or contribute as a fellow developer to the open source product on Github.</p>
      </div>
      <a className='group inline-flex items-center h-9 rounded-full text-lg font-semibold whitespace-nowrap px-5 focus:outline-none focus:ring-2 bg-indigo-50 text-gray-200
      hover:bg-indigo-500 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-slate-100
      dark:hover:text-white dark:focus:ring-slate-500 mt-8' href="https://github.com/oslabs-beta/indiK8or">Get Started
        <span className='sr-only'>, responsive design</span>
        <svg className='overflow-visible ml-4 text-indigo-300 group-hover:text-indigo-400 dark:text-s;ate-500 dark:group-hover:text-slate-400
        ' width='3' height='6' viewBox='0 0 3 6' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M0 0L3 3L0 6'></path>
        </svg>
      </a>
    </div>
  )
}

export default Github

const features = [
  { name: 'Visual Overview', 
    description: 'It provides a visual overview including information on the nodes, pods, services, and other critical components of the cluster. With this information, administrators can quickly detect and respond to any issues such as node or pod failures, before they cause major problems.'
  },
  { name: 'Pod Health', 
    description: "It shows you the health and status of the pods, providing the details including image's name, ready, status, age, and IP. It additionally offers images & vulnerability scan."
  },
];
const images = [
  {
    id: 1,
    name: 'screenshot1',
    href: '#',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*mnkjsMs9rZ2-nURrbjwWvQ.png',
    imageAlt: 'overview',
  },
  {
    id: 3,
    name: 'screenshot3',
    href: '#',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*dpyiEcATS0FnWXXHqmXOew.png',
    imageAlt: 'pod',
  },
];

export default function Features() {
  return (
    <section className='bg-black font-serif '>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <div className='animate-spin w-12 h-12 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-pink-500 dark:highlight-white/30'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-400 text-2xl">
            INDIK8OR provides a user-friendly interface for developers to set up and interact with their Kubernetes clusters. By leveraging Kubernetes orchestration for
            optimal scalability and effiency, INDIK8OR is able to provide real-time monitoring of the various architectural layers of the cluster.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-gray-400 text-2xl pt-4">{feature.name}</dt>
                <dd className="mt-2 text-gray-400 text-xl pt-2">{feature.description}</dd>
              </div>
            ))}
            {images.map((product) => (
              <div key={product.id} className="group relative">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full object-fill object-center lg:h-full lg:w-full rounded-lg"
                  />
              </div>  
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
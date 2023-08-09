const features = [
  { name: 'Visual Overview', description: 'It provides a visual overview including information on the nodes, pods, services, and other critical components of the cluster. With this information, administrators can quickly detect and respond to any issues such as node or pod failures, before they cause major problems.' },
  { name: 'Pod Health', description: "It shows you the health and status of the pods, providing the details including image's name, ready, status, age, and IP. It additionally offers images & vulnerability scan." },
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
    <div className='bg-black font-serif '>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <div className='w-12 h-12 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-pink-500 dark:highlight-white/30'></div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-400">
           INDIK8OR provides a user-friendly interface for developers to set up and interact with their Kubernetes clusters. By leveraging Kubernetes orchestration for
           optimal scalability and effiency, INDIK8OR is able to provide real-time monitoring of the various architectural layers of the cluster.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-gray-400">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400">{feature.description}</dd>
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
    </div>
  )
}



import biglogo from '../assets/biglogo.png';

const Overview = () => {
    return ( 
        <div className="bg-gradient-to-b from-gray-400 bg-black flex items-center flex-col">
            <img src={biglogo} className='w-96 mt-24' />
            <div className="space-y-24 flex-column  justify-center items-center">
                <h1 className="pt-24 text-gray-100 font-semibold font-serif text-3xl text-center">Simplify and Visualize Your Kubernetes Environment Today</h1>
                <p className='max-w-6xl bg-gray-200 opacity-70 rounded-xl shadow-md border p-8 m-10 text-gray-900 text-center text-lg font-serif pl-12 pr-12 font-serif'>
                Designed to enhance your Kubernetes cluster management experience while ensuing the security of your infrastructure. 
                By combining metrics visualization and vulnerability scanning, indiK8or empowers you to maintain a secure Kubernetes environment.
                </p>
            </div>
    </div>
    );
};

export default Overview;

import logo from '../assets/logo.png';
import k8s from '../assets/k8s.jpg';
const Overview = () => {
    return (
//  <div className='relative'>
//  <img className='' src={k8s} alt='k8s'/>
//  <div className='absolute top-40 space-y-12 container-cover mx-auto'>
//    <h1 className='text-white font-semibold text-3xl flex justify-center font-serif'>Simplify and Visualize Your Kubernetes Environment Today</h1>
//    <p className='text-gray-200 text-center text-lg font-serif pl-72 pr-72 font-serif'>
//      Designed to enhance your Kubernetes cluster management experience while ensuing the security of your infrastructure. 
//      By combining metrics visualization and vulnerability scanning, indiK8or empowers you to maintain a secure Kubernetes environment.
//    </p>
//  </div>
// </div> 
 
 
<div className="flex h-screen items-center  flex-col">
    <div
        className="w-full h-90vh] bg-[url('https://images.unsplash.com/photo-1667372459470-5f61c93c6d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center">
        <div className="space-y-96 w-full h-full flex-column  justify-center items-center">
                <h1 className="pt-36 text-white font-semibold font-serif text-3xl text-center">Simplify and Visualize Your Kubernetes Environment Today</h1>
                <p className='text-gray-200 text-center text-lg font-serif pl-72 pr-72 font-serif'>
                Designed to enhance your Kubernetes cluster management experience while ensuing the security of your infrastructure. 
      By combining metrics visualization and vulnerability scanning, indiK8or empowers you to maintain a secure Kubernetes environment.
    </p>
        </div>
    </div>
</div>
    );
};

export default Overview;

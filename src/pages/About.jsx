import Header from '../components/Header';

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="mx-auto p-16 max-w-7xl px-4 sm:px-6 md:px-8">
        <h2 className="text-6xl font-bold text-left p-12">More about IndiK8or</h2>
        <p className="text-2xl leading-relaxed p-12">
          IndiK8or is an open-source web application that provides a user-friendly interface 
          for developers to set up and interact with their K8s clusters.
          In addition to its comprehensive monitoring capabilities, indiK8or also provides 
          an automated configuration process for Prometheus and Grafana, incorporating them 
          into the Kubernetes cluster. Users can also view the pods and scan the contents 
          of a container image to find known vulnerabilities. This is a powerful open-source tool 
          that provides real-time monitoring and management of Kubernetes clusters. 
          With its automated configuration process, comprehensive monitoring capabilities, 
          and user-friendly dashboard, indiK8or is an ideal solution for organizations 
          that want to ensure the health and performance of their Kubernetes-based applications.
        </p>
      </div>
      <img
        src= '/assets/kubernetesImg.png'
        alt='K8s'
        className= 'mx-auto max-w-7xl fade-edges'
      />
      </div>
  );
};

export default About;
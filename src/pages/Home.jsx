import { useEffect, useRef, useState } from 'react';
import Overview from '../components/Overview';
import Features from '../components/Features';
import Github from '../components/Github';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Header from '../components/Header';
import Technologies from '../components/Technologies';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const Home = () => {
  const [overviewRef, isOverviewVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [featuresRef, isFeaturesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [technologiesRef, isTechnologiesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [githubRef, isGithubVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [blogRef, isBlogVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [teamRef, isTeamVisible] = useIntersectionObserver({ threshold: 0.1 });

  // return (
  //   <main className='overflow-auto bg-black'>
  //     <Header />
  //     <div ref={overviewRef} className={`transition-opacity duration-1000 ${isOverviewVisible ? 'opacity-100' : 'opacity-0'}`}>
  //       <Overview />
  //     </div>
  //     <div ref={featuresRef} className={`transition-opacity duration-1000 ${isFeaturesVisible ? 'opacity-100' : 'opacity-0'}`}>
  //       <Features />
  //     </div>
  //     <div ref={technologiesRef} className={`transition-opacity duration-1000 ${isTechnologiesVisible ? 'opacity-100' : 'opacity-0'}`}>
  //       <Technologies />
  //     </div>
  //     <div ref={githubRef} className={`transition-opacity duration-1000 ${isGithubVisible ? 'opacity-100' : 'opacity-0'}`}>
  //       <Github />
  //     </div>
  //     <div ref={blogRef} className={`transition-opacity duration-1000 ${isBlogVisible ? 'opacity-100' : 'opacity-0'}`}>
  //       <Blog />
  //     </div>
  //     <div ref={teamRef} className={`transition-opacity duration-1000 ${isTeamVisible ? 'opacity-100' : 'opacity-0'}`}>
  //       <Team />
  //     </div>
  //   </main>
  // );
  return (
    <main className='overflow-auto bg-black'>
      <Header />
      <div ref={overviewRef} className={`transition-transform duration-1000 ${isOverviewVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        <Overview />
      </div>
      <div ref={featuresRef} className={`transition-transform duration-1000 ${isFeaturesVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        <Features />
      </div>
      <div ref={technologiesRef} className={`transition-transform duration-1000 ${isTechnologiesVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        <Technologies />
      </div>
      <div ref={githubRef} className={`transition-transform duration-1000 ${isGithubVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        <Github />
      </div>
      <div ref={blogRef} className={`transition-transform duration-1000 ${isBlogVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        <Blog />
      </div>
      <div ref={teamRef} className={`transition-transform duration-1000 ${isTeamVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        <Team />
      </div>
    </main>
  );
}


export default Home;

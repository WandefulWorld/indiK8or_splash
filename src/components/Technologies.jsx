import FeatureCards from './FeatureCards';
import { technologyCards } from '../contants';

const TestComp = () => {

  const backgroundColors = ['bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologyCards.map((technology, index) => (
          <FeatureCards
            key={index}
            title={technology.title}
            tech={technology.tech}
            backgroundColor={backgroundColors[index % backgroundColors.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default TestComp;
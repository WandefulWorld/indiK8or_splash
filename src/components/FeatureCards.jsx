import { IoMdCheckmark } from "react-icons/io";
import PropTypes from 'prop-types';

const FeatureCards = ({ title, tech, backgroundColor }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 m-4 ${backgroundColor}`}>
      <h3 className="text-gray-900 text-4xl font-bold mb-2 text-center">{title}</h3>
      <hr className="border-t-1 border-gray-400 my-4" />
      <ul className="space-y-2 text-left">
        {tech.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <IoMdCheckmark className="text-green-900" />
            </span>
            <p className="text-gray-900 text-xl">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeatureCards.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default FeatureCards;
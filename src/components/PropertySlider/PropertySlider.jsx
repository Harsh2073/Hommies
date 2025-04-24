<<<<<<< HEAD
import { useState, useEffect } from 'react';
import beirut from '../../../public/Images/beirut.jpg'
import tyre from '../../../public/Images/tyre.jpg'
import keserwen from '../../../public/Images/keserwen.jpg'
import Jounieh from '../../../public/Images/jounieh.jpg'
import Byblos from '../../../public/Images/byblos.jpg'
import Chouf from '../../../public/Images/chouf.jpg'
import Batroun from '../../../public/Images/batroun.jpg'

const PropertySlider = () => {
  const propertyslider = [
    {key:'1', name: 'Ahmedabad', image: beirut},{key:'2', name: 'Surat', image: Jounieh},{key:'3', name: 'Mumbai', image: Chouf},{key:'4', name: 'Delhi', image: Batroun},
    {key:'5', name: 'Udaipur', image: keserwen},{key:'6', name: 'Kashmir', image: Byblos},{key:'7', name: 'Kerela', image: tyre},{key:'8', name: 'Dehradun', image: Batroun},{ key:'9', name: 'Kutch', image: Jounieh},
  ];

  const [visibleRegions, setVisibleRegions] = useState([0, 1, 2]);
  const [activeRoundedDiv, setActiveRoundedDiv] = useState(0); 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 3;

      if (currentIndex >= propertyslider.length) {
        currentIndex = 0;
      }

      setVisibleRegions([currentIndex, currentIndex + 1, currentIndex + 2]);
      setActiveRoundedDiv(currentIndex / 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex md:flex-row flex-col flex-wrap justify-between">
      {visibleRegions.map((index) => (
        <div key={propertyslider[index].key} className="card md:w-[29%] md:h-[31rem] h-60 w-full bg-gray-200 relative overflow-hidden">
          <p className="text-center text-lg font-bold mt-2 text-secondary">{propertyslider[index].name}</p>
          <img src={propertyslider[index].image} className="w-full h-[100%] object-cover" alt={propertyslider[index].name} />
        </div>
      ))}
      <div className="w-full mt-4 text-center">
        {Array.from({ length: propertyslider.length / 3 }, (_, i) => (
          <div key={i} className={`rounded-div inline-block w-4 h-4 m-2 ${activeRoundedDiv === i ? 'bg-violet-700' : 'bg-gray-300'}`}>
          </div>
        ))}
      </div>
    </div>
  );
};

=======
import { useState, useEffect } from 'react';
import beirut from '../../images/beirut.jpg'
import tyre from '../../images/tyre.jpg'
import keserwen from '../../images/keserwen.jpg'
import Jounieh from '../../images/junieh.jpg'
import Byblos from '../../images/byblos.jpg'
import Chouf from '../../images/chouf.jpg'
import Batroun from '../../images/batroun.jpg'

const PropertySlider = () => {
  const propertyslider = [
    {key:'1', name: 'Ahmedabad', image: beirut},{key:'2', name: 'Surat', image: Jounieh},{key:'3', name: 'Mumbai', image: Chouf},{key:'4', name: 'Delhi', image: Batroun},
    {key:'5', name: 'Udaipur', image: keserwen},{key:'6', name: 'Kashmir', image: Byblos},{key:'7', name: 'Kerela', image: tyre},{key:'8', name: 'Dehradun', image: Batroun},{ key:'9', name: 'Kutch', image: Jounieh},
  ];

  const [visibleRegions, setVisibleRegions] = useState([0, 1, 2]);
  const [activeRoundedDiv, setActiveRoundedDiv] = useState(0); 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 3;

      if (currentIndex >= propertyslider.length) {
        currentIndex = 0;
      }

      setVisibleRegions([currentIndex, currentIndex + 1, currentIndex + 2]);
      setActiveRoundedDiv(currentIndex / 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex md:flex-row flex-col flex-wrap justify-between">
      {visibleRegions.map((index) => (
        <div key={propertyslider[index].key} className="card md:w-[29%] md:h-[31rem] h-60 w-full bg-gray-200 relative overflow-hidden">
          <p className="text-center text-lg font-bold mt-2 text-secondary">{propertyslider[index].name}</p>
          <img src={propertyslider[index].image} className="w-full h-[100%] object-cover" alt={propertyslider[index].name} />
        </div>
      ))}
      <div className="w-full mt-4 text-center">
        {Array.from({ length: propertyslider.length / 3 }, (_, i) => (
          <div key={i} className={`rounded-div inline-block w-4 h-4 m-2 ${activeRoundedDiv === i ? 'bg-violet-700' : 'bg-gray-300'}`}>
          </div>
        ))}
      </div>
    </div>
  );
};

>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
export default PropertySlider;
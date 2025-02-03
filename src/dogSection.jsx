import { DogCards } from './dogCards';
import { DogDatabase } from './dogsDatabase';

export const DogSection = () => {
  return (
    <div className="bg-rose-50 p-8 rounded-2xl shadow-lg border border-rose-200">
      <h3 className="text-2xl font-semibold text-rose-800 mb-6 text-center">Hunder</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DogDatabase.map((dog, index) => (
          <DogCards 
            key={index} 
            name={dog.name} 
            age={dog.age} 
            personality={dog.personality} 
            breed={dog.breed} 
            img={dog.img} 
          />
        ))}
      </div>
    </div>
  );
};

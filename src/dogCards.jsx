export const DogCards = ({ name, age, personality, breed, background, img}) => {
    
    return (
      <div className="max-w-sm bg-rose-100 shadow-md rounded-2xl p-4 flex flex-col items-center text-center border border-rose-200">
        <img className="w-40 h-40 object-cover rounded-full border-4 border-rose-300" src={img} alt={name} />
        <h1 className="text-xl font-semibold mt-4 text-rose-800">{name}</h1>
        <h4 className="text-rose-700 mt-2">Alder: {age} år</h4>
        <h4 className="text-rose-700">Personlighet: {personality}</h4>
        <h4 className="text-rose-700">Rase: {breed}</h4>
        <button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition">
          Adopter meg!
        </button>
      </div>
    );
  };
  
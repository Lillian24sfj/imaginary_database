import { useParams } from 'react-router-dom';
import { DogDatabase } from './DogDatabase'; 

const AboutPage = () => {
  const { id } = useParams(); 
  const dog = DogDatabase.find((dog) => dog.id === parseInt(id));

  if (!dog) {
    return <div>Hunden ble ikke funnet.</div>;
  }

  return (
    <div className="dog-info">
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <p>Alder: {dog.age} år</p>
      <p>Personlighet: {dog.personality}</p>
      <p>Rase: {dog.breed}</p>
      <p>Bakgrunn: {dog.background}</p>
    
    </div>
  );
};

export default AboutPage;
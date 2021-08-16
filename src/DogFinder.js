import DogDetails from "./DogDetails";
import {useParams} from 'react-router-dom';

function DogFinder({ dogs }) {
  const { name } = useParams();

  let dog = dogs.filter(d => d.name === name)[0];

  return (
    <DogDetails dog={dog} />
  );
}

export default DogFinder
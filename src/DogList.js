import DogDetails from "./DogDetails";

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(dog => <DogDetails key={dog.name} dog={dog} />)}
    </div>
  )
}

export default DogList
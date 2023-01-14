import { useState } from "react";

// styles
import "bulma/css/bulma.css";

// components
import AnimalShow from "./components/AnimalShow";

function getRandomAnimal() {
	const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

	return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
	const [animals, setAnimals] = useState([]);

	const addAnimal = () => {
		setAnimals([...animals, getRandomAnimal()]);
	};

	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShow type={animal} key={index} />;
	});

	return (
		<div className="card">
			<div className="card-content">
				<button onClick={addAnimal} className="button is-primary">
					Add Animal
				</button>
				<div className="container">
					{animals.length > 0 && (
						<p className="subtitle has-text-info">
							Click the animal to show how much you{" "}
							<span className="has-text-danger">♥</span> them
						</p>
					)}
				</div>
				<div className="subtitle">{renderedAnimals}</div>
			</div>
		</div>
	);
}

export default App;

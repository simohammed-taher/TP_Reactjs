import React, { useState } from 'react';

function App() {
	const quotes = [
		'11111111111',
		'2222222222',
		'333333333',
		'44444444444',
	];

	const [currentQuote, setCurrentQuote] = useState('');
	const generateRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setCurrentQuote(quotes[randomIndex]);
	};

	return (
		<div className="App">
			<h1>Générateur de citations aléatoires</h1>
			<p>{currentQuote}</p>
			<button onClick={generateRandomQuote}>Générer une citation aléatoire</button>
		</div>
	);
}

export default App;

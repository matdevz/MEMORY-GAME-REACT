import React, { useEffect, useState } from 'react';
import { GameOver } from './components/GameOver/index';
import { GameBoard } from './components/GameBoard/index';
import { Game } from './components/Game/index';

export function App() {
	const [showGameOver, setShowGameOver] = useState(false);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		setCards(Game.createCardsFromTechs());
	}, []);

	function restart() {
		Game.clearCards();
		setCards(Game.createCardsFromTechs());
		setShowGameOver(false);
	}

	function handleFlip(card) {
		Game.flipCard(
			card.id,
			() => {
				setShowGameOver(true);
			},
			() => {
				setCards([...Game.cards]);
			}
		);

		setCards([...Game.cards]);
	}
	return (
		<>
			<GameBoard cards={cards} handleFlip={handleFlip} />
			<GameOver showGame={showGameOver} restart={restart} />
		</>
	);
}

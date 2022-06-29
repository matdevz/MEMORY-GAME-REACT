import React from 'react';
import { GameCard } from '../GameCard/index';

export function GameBoard({ cards, handleFlip }) {
	return (
		<>
			<div id='gameBoard'>
				{cards.map((card, index) => {
					return (
						<GameCard
							handleFlip={handleFlip}
							key={index}
							card={card}
						/>
					);
				})}
			</div>
		</>
	);
}

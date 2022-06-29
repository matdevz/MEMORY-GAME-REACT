import React from 'react';

export function GameCard({ card, handleFlip }) {
	return (
		<>
			<div
				onClick={() => handleFlip(card)}
				id={card.id}
				className={`card ${card.flipped ? 'flip' : ''}`}
			>
				<div className='card_front'>
					<img
						src={`./assets/${card.icon}.png`}
						alt={card.icon}
						className='icon'
					/>
				</div>
				<div className='card_back'>{'</>'}</div>
			</div>
		</>
	);
}

import React, { Fragment } from 'react';

export function GameOver({ showGame, restart }) {
	return (
		<>
			{showGame ? (
				<div id='gameOver'>
					<div>Parabéns, você completou o jogo!</div>
					<button id='restart' onClick={restart}>
						Jogar Novamente
					</button>
				</div>
			) : (
				<Fragment />
			)}
		</>
	);
}

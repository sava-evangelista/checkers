import Game from './checkers.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.className = 'checkers-wrapper';
    document.body.appendChild(container);

    const game = new Game(container);
});
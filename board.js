class Board {
    constructor() {
        this.el = document.createElement('div');
        this.el.className = 'checkers-board';
        this.initialize();
    }

    initialize() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const tile = this.createTile(i, j);
                this.el.appendChild(tile);
            }
        }
    }

    createTile(row, col) {
        const el = document.createElement('div')
        el.className = 'checkers-tile';
        const dark = Boolean((row + col) % 2);
        if (dark) {
            el.className += ` checkers-tile-dark`;
        } else  {
            el.className += ` checkers-tile-light`;
        }
        return el;
    }

    appendTo(container) {
        container.appendChild(this.el);
    }
}

export default Board;
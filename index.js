import { useRef, useEffect } from 'react';
import Game from './checkers';

const Checkers = () => {
    const ref = useRef();

    useEffect(() => {
        const game = new Game(ref.current);
        return () => game.clear();

    }, []);

    return (
        <div className="checkers-wrapper" ref={ref} />
    );
};

export default Checkers;
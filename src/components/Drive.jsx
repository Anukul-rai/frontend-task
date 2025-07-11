import React, { useState, useEffect } from 'react';

const Drive = () => {
    const GRID_SIZE = 8
    const BLUE_CELLS_COUNT = 10
    
    const [blueCells, setBlueCells] = useState(new Set());

    const generateRandomBlueCells = () => {
        const newBlueCells = new Set();
        while (newBlueCells.size < BLUE_CELLS_COUNT) {
        const randomIndex = Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE));
        newBlueCells.add(randomIndex);
        }
        return newBlueCells;
    };

    useEffect(() => {
        setBlueCells(generateRandomBlueCells());
    }, []);

    const handleGridClick = () => {
        setBlueCells(generateRandomBlueCells());
    };

    const renderGrid = () => {
        const cells = [];
        for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const isBlue = blueCells.has(i);
        cells.push(
            <div key={i}
            className={`w-8 h-8 border border-gray-300 transition-colors duration-300 ${isBlue ? 'bg-blue-700' : 'bg-white hover:bg-gray-50'}`}/>
        );
        }
        return cells;
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">        
        <div className="inline-block bg-cyan-300 border-2 border-gray-400 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={handleGridClick}>
            <div className="grid gap-0" 
                style={{ gridTemplateColumns: `repeat(${GRID_SIZE})` }}>
            {renderGrid()}
            </div>
        </div>
        </div>
    );
};

export default Drive;
import React from 'react';
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <main className="flexbox">
          <Board id='board-2' className='board'>
            <Card id='card-2' className='card' draggable='true'>
                <p>Card 2</p>
            </Card>

            <Card id='card-3' className='card' draggable='true'>
                <p>Card 3</p>
            </Card>

            <Card id='card-4' className='card' draggable='true'>
                <p>Card 4</p>
            </Card>

            
            <Card id='card-5' className='card' draggable='true'>
                <p>Card 5</p>
            </Card>
          </Board>

          <Board id='board-1' className='board'>
            <Card id='card-1' className='card' draggable='true'>
                <p>Card 1</p>
            </Card>
          </Board>

      </main>
    </div>
  );
}

export default App;

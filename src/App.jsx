import Game from './Jogo';
import CanvasImg from './CanvasImg';
function App() {
  return (
    <div>
      <Game />

      {/* Renderizando várias imagens no canvas */}
      <div className="canvas-container">
        <CanvasImg />
        <CanvasImg />
        <CanvasImg />
      </div>
    </div>
  );
}

export default App;

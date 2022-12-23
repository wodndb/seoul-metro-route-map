import { Layer, Stage, Text } from "react-konva";

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text x={20} y={20} text={"Hello World"} />
      </Layer>
    </Stage>
  );
}

export default App;

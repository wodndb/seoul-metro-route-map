import { Circle, Group, Layer, Line, Stage, Text } from "react-konva";

const stations: string[] = [
  "암사",
  "천호",
  "강동구청",
  "몽촌토성",
  "잠실",
  "석촌",
  "송파",
  "가락시장",
  "문정",
  "장지",
  "복정",
  "남위례",
  "산성",
  "남한산성입구",
  "단대오거리",
  "신흥",
  "수진",
  "모란",
];

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Line
          points={[30, 30, 30, 30 + 50 * (stations.length - 1)]}
          stroke="#E6186C"
          strokeWidth={10}
          lineCap="round"
          lineJoin="round"
        />
        {stations.map((item, idx) => {
          return (
            <Group>
              <Circle
                x={30}
                y={30 + 50 * idx}
                radius={8}
                fill="white"
                stroke="black"
                strokeWidth={3}
              />
              <Text
                x={30 + 30}
                y={30 + 50 * idx}
                text={item}
                fontSize={16}
                verticalAlign="center"
                offsetY={6}
              />
            </Group>
          );
        })}
      </Layer>
    </Stage>
  );
}

export default App;

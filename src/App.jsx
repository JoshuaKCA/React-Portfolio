import FloatingLines from "./components/background/FloatingLines";
import BentoGrid from "./components/grid/gridLayout";
import "./App.css";

function App() {
  return (
    <>
      {/* Background Canvas Layer */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive
          parallax={true}
          animationSpeed={0.8}
          linesGradient={["#e945f5", "#4f5edb", "#1a1a2e"]}
        />
      </div>

      {/* Main Content Skeleton Grid Layout */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <BentoGrid />
      </main>
    </>
  );
}

export default App;

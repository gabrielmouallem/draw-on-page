import { useCanvas } from "../../hooks/useCanvas";
import FloatingPanel from "../FloatingPanel";
import * as SC from "./DrawableCanvas.styles";

export const DrawableCanvas = () => {
  const {
    canvasRef,
    canvasEnabled,
    printCanvas,
    startDrawing,
    finishDrawing,
    draw,
    enableCanvas,
    disableCanvas,
    clearCanvas,
  } = useCanvas();

  return (
    <>
      <FloatingPanel
        canvasEnabled={canvasEnabled}
        enableCanvas={enableCanvas}
        disableCanvas={disableCanvas}
        clearCanvas={clearCanvas}
        printCanvas={printCanvas}
      />
      <SC.Canvas
        ref={canvasRef}
        enabled={canvasEnabled}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseLeave={finishDrawing}
        onMouseMove={draw}
      />
    </>
  );
};

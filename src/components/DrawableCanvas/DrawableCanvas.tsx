import { useEffect } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import * as SC from "./DrawableCanvas.styles";

export const DrawableCanvas = () => {
  const { canvasRef, startDrawing, finishDrawing, draw } = useCanvas();

  return (
    <SC.Canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseLeave={finishDrawing}
      onMouseMove={draw}
    />
  );
};

import { useEffect, useRef, useState } from "react";

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasEnabled, setCanvasEnabled] = useState(false);

  const printCanvas = () => {
    window.print();
  }

  const enableCanvas = () => {
    setCanvasEnabled(true);
  }

  const disableCanvas = () => {
    setCanvasEnabled(false);
  }

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      var body = document.body,
      html = document.documentElement;

      var width = Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
      );

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;

      canvas.style.height = `${height}px`;

      const context = canvas.getContext("2d");

      if (context) {
        context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
      }
    }
  };

  const startDrawing = ({
    nativeEvent: { offsetX, offsetY },
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const finishDrawing = () => {
    contextRef.current && contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({
    nativeEvent: { offsetX, offsetY },
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    if (contextRef.current) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  useEffect(() => {
    prepareCanvas();
  }, []);

  return {
    canvasRef,
    contextRef,
    canvasEnabled,
    printCanvas,
    enableCanvas,
    disableCanvas,
    clearCanvas,
    startDrawing,
    finishDrawing,
    draw,
  };
};

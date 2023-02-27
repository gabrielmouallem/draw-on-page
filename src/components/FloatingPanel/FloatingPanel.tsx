import * as SC from "./FloatingPanel.styles";

interface FloatingPanelProps {
  canvasEnabled: boolean;
  printCanvas: () => void;
  enableCanvas: () => void;
  disableCanvas: () => void;
  clearCanvas: () => void;
}

export const FloatingPanel = ({
  canvasEnabled,
  printCanvas,
  enableCanvas,
  disableCanvas,
  clearCanvas,
}: FloatingPanelProps) => (
  <SC.Container>
    {!canvasEnabled && <button onClick={enableCanvas}>Enable Drawing</button>}
    {canvasEnabled && <button onClick={disableCanvas}>Disable Drawing</button>}
    <button onClick={clearCanvas}>Clear Drawing</button>
    <button onClick={printCanvas}>Print Drawing</button>
  </SC.Container>
);

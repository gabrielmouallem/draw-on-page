import DrawableCanvas from "./components/DrawableCanvas";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  @media print {
    body,
    .my-overflow-content {
      overflow: visible !important;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <DrawableCanvas />
    </Wrapper>
  );
}

export default App;

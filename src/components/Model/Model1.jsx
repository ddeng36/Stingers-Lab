
import React, { Suspense} from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { BuzzModel } from "../../assets/3D-Model/BuzzModel";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;
const Model1 = () => {
  return (
      <Container id="buzz-model">
      <Canvas camera={{ fov: 10 }}>
        <Suspense fallback={null}>
            <BuzzModel />
          <Environment
            files="/venice_sunset_1k.hdr"
            center
          />
        </Suspense>
      </Canvas>
    </Container>

  );
};

export default Model1;

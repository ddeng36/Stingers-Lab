import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../../assets/3D-Model/Buzz";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 0;
  background-color: transparent;
`;
const BuzzModel = () => {
  return (
    <Container id="buzz-model">
      <Canvas camera={{ fov: 10 }}>
        {/* <axesHelper args={[50]} /> */}
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <Model />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default BuzzModel;

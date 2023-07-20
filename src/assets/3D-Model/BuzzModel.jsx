import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
export function BuzzModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");

  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);
  useLayoutEffect(() => {
    scene.rotateY(0.5);
    groupRef.current.rotation.y = Math.PI / 11;
    groupRef.current.position.z = 0;
    camera.position.set(0, 30, 600);
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#buzz-model",
        start: "top+=100 top",
        endTrigger: "#camera",
        end: "top top",
        scrub: true,
      },
    });

    t1.to(scene.rotation, { y: 3 })
      .to(scene.rotation, { z: 1 }, "key1")
      .to(scene.rotation, { y: 2 }, "key1")
      .to(scene.rotation, { y: 1, z: 0 }, "key2")
      .to(scene.rotation, { y: 7 }, "key3")
      .to(camera.position, { x: 0, y: 30 }, "key3")
      .to(groupRef.current.position, { z: 500 }, "key4");
  }, []);
  return (
    <group {...props} ref={groupRef} dispose={null} position={[0, 0, -35]}>
 <mesh geometry={nodes['CUsersCcrrqDownloadsGA_Tech_Mascotobj_Titanium_Polished_#1_0'].geometry} material={materials.Titanium_Polished_1} position={[1.66, 0.01, 7.24]} />
    
    </group>
  );
}

useGLTF.preload('/scene.gltf')

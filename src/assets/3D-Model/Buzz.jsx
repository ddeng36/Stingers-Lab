/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 buzz.gltf
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
export function Model(props) {
  const { nodes, materials } = useGLTF('/buzz.gltf')
  const camera = useThree((state) => state.camera)
  let scene = useThree((state) => state.scene);
  useLayoutEffect(() => {
    camera.position.set(0, 0, 600);
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#buzz-model",
        start: "top+=200 top",
        endTrigger: "#camera",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });
  
    t1.fromTo(camera.position, {y:190},{y:0})
    .to(scene.rotation, {y: 0.8,})
    .to(scene.rotation, {y: 3,})
    .to(scene.rotation, {z: 2},"key1")
    .to(camera.position, {z: 750},"key1")
    .to(scene.rotation, {y:0,z: 0},"key2")
    .to(camera.position, {x:2,z: 6},"key2")
    .to(camera.position, {x:200,y:200},"key3")
  }, []);
  return (
    <group {...props} dispose={null} position={[0, 0, -35]}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/buzz.gltf')

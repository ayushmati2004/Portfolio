import React, { Suspense } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

// Fallback component for loading states
const FallbackModel = () => (
  <mesh>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="hotpink" />
  </mesh>
);

export function HackerRoom(props) {
  return (
    <Suspense fallback={<FallbackModel />}>
      <HackerRoomModel {...props} />
    </Suspense>
  );
}

function HackerRoomModel(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');
  
  // Load textures conditionally without try-catch in render
  const monitortxt = useTexture('/textures/desk/monitor.png');
  const screenTxt = useTexture('/textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      {nodes.screen_screens_0 && materials.screens && (
        <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
          {screenTxt && <meshMatcapMaterial map={screenTxt} />}
        </mesh>
      )}
      {nodes.screen_glass_glass_0 && materials.glass && (
        <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      )}
      {nodes.table_table_mat_0_1 && materials.table_mat && (
        <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      )}
      {nodes.table_table_mat_0_2 && materials.computer_mat && (
        <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
          {monitortxt && <meshMatcapMaterial map={monitortxt} />}
        </mesh>
      )}
      {nodes.table_table_mat_0_3 && materials.server_mat && (
        <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      )}
      {nodes.table_table_mat_0_4 && materials.vhsPlayer_mat && (
        <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      )}
      {nodes.table_table_mat_0_5 && materials.stand_mat && (
        <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      )}
      {nodes.table_table_mat_0_6 && materials.mat_mat && (
        <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      )}
      {nodes.table_table_mat_0_7 && materials.arm_mat && (
        <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      )}
      {nodes.table_table_mat_0_8 && materials.tv_mat && (
        <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
          {monitortxt && <meshMatcapMaterial map={monitortxt} />}
        </mesh>
      )}
      {nodes.table_table_mat_0_9 && materials.cables_mat && (
        <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      )}
      {nodes.table_table_mat_0_10 && materials.props_mat && (
        <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      )}
      {nodes.table_table_mat_0_11 && materials.ground_mat && (
        <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      )}
      {nodes.table_table_mat_0_12 && materials.key_mat && (
        <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
      )}
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');
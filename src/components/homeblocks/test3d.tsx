// import { Canvas as ThreeCanvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import React, { useEffect } from "react";
// import { AmbientLight, DirectionalLight } from "three";
// import { useThree } from "@react-three/fiber";

// type CanvasProps = React.PropsWithChildren<{}>;

// const CustomAmbientLight = ({
//   intensity,
//   color,
// }: {
//   intensity: number;
//   color: string;
// }) => {
//   const { scene } = useThree();
//   useEffect(() => {
//     const light = new AmbientLight(color, intensity);
//     scene.add(light);
//     return () => {
//       scene.remove(light);
//     };
//   }, [scene, color, intensity]);
//   return null;
// };

// const CustomDirectionalLight = ({
//   position,
//   intensity,
// }: {
//   position: [number, number, number];
//   intensity: number;
// }) => {
//   const { scene } = useThree();
//   useEffect(() => {
//     const light = new DirectionalLight(0xffffff, intensity);
//     light.position.set(...position);
//     scene.add(light);
//     return () => {
//       scene.remove(light);
//     };
//   }, [scene, position, intensity]);
//   return null;
// };

// const CustomCanvas: React.FC<CanvasProps> = ({ children }) => (
//   <ThreeCanvas style={{ width: "100%", height: "500px" }}>
//     {/* Add lighting to enhance material color */}
//     <CustomAmbientLight intensity={0.5} color="red" />
//     <CustomDirectionalLight position={[5, 5, 5]} intensity={1} />
//     <OrbitControls />
//     {children}
//   </ThreeCanvas>
// );

// export default CustomCanvas;

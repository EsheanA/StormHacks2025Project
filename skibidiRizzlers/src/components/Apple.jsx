import { tileSize } from "../constants";

export function Tree({ tileIndex, height }) {
  return (
    <group position-x={tileIndex * tileSize}> 
        <mesh position-z={height / 2 + 20}> 
            <boxGeometry args={[14, 14, 14]} />
            <meshLambertMaterial color={0x8B0000} flatShading />
        </mesh>

        <mesh position={[0, 0, 20]}>
            <boxGeometry args={[3,3,5]} />
            <meshLambertMaterial color={0x4D2926} flatShading />
        </mesh>
    </group>
  );
}

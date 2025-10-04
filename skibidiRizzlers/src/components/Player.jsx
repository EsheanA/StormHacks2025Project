import { Bounds } from "@react-three/drei"

export function Player() {
    return (
        <Bounds fit clip observe margin={10}> {/* so that the user is framed nicely in the camera */}
            <mesh position={[0, 0, 10]}>   {/* makes it so that its initialized 10 units along z axis */}
                <boxGeometry args={[15, 15, 20]} /> 
                <meshLambertMaterial color={0xffffff} flatShading /> 
            </mesh>
        </Bounds>
    );
}
export function Player() {
    return (
        <mesh position={[0, 0, 10]}>   {/* makes it so that its initialized 10 units along z axis */}
            <boxGeometry args={[15, 15, 20]} /> 
            <meshLambertMaterial color={0xffffff} flatShading /> 
        </mesh>
    );
}
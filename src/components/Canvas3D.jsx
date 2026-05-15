import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, OrbitControls, Stars } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function HeartShape() {
  const shape = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(0, 0.4)
    s.bezierCurveTo(0, 0.6, 0.25, 0.75, 0.5, 0.5)
    s.bezierCurveTo(0.75, 0.25, 0.75, -0.1, 0.5, -0.3)
    s.lineTo(0, -0.75)
    s.lineTo(-0.5, -0.3)
    s.bezierCurveTo(-0.75, -0.1, -0.75, 0.25, -0.5, 0.5)
    s.bezierCurveTo(-0.25, 0.75, 0, 0.6, 0, 0.4)
    return s
  }, [])

  const geo = useMemo(() => new THREE.ExtrudeGeometry(shape, {
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.06,
    bevelSegments: 6,
  }), [shape])

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh geometry={geo} position={[-2.2, 1.2, -1]}>
        <meshPhysicalMaterial
          color="#0A1F6E"
          metalness={0.8}
          roughness={0.15}
          reflectivity={1}
          emissive="#00C8E8"
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  )
}

function StarShape() {
  const shape = useMemo(() => {
    const s = new THREE.Shape()
    const outerR = 0.65
    const innerR = 0.28
    const points = 5
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2
      const r = i % 2 === 0 ? outerR : innerR
      const x = Math.cos(angle) * r
      const y = Math.sin(angle) * r
      if (i === 0) s.moveTo(x, y)
      else s.lineTo(x, y)
    }
    s.closePath()
    return s
  }, [])

  const geo = useMemo(() => new THREE.ExtrudeGeometry(shape, {
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.04,
    bevelSegments: 4,
  }), [shape])

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh geometry={geo} position={[2.4, -1, -0.5]}>
        <meshPhysicalMaterial
          color="#0D2040"
          metalness={0.9}
          roughness={0.1}
          reflectivity={1}
          emissive="#1B4FD8"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function CircleDisc() {
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[2.2, 1.5, -2]}>
        <cylinderGeometry args={[0.65, 0.65, 0.26, 48]} />
        <meshPhysicalMaterial
          color="#0A1F6E"
          metalness={0.85}
          roughness={0.12}
          emissive="#00C8E8"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

function FlowerShape() {
  const petalPositions = useMemo(() => {
    const pos = []
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2
      pos.push([Math.cos(angle) * 0.36, Math.sin(angle) * 0.36, 0])
    }
    return pos
  }, [])

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.7}>
      <group position={[-2.6, -1.4, -1.5]}>
        {petalPositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.28, 20, 20]} />
            <meshPhysicalMaterial
              color="#0D2040"
              metalness={0.88}
              roughness={0.1}
              emissive="#1B4FD8"
              emissiveIntensity={0.18}
            />
          </mesh>
        ))}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.22, 20, 20]} />
          <meshPhysicalMaterial
            color="#00C8E8"
            metalness={0.9}
            roughness={0.08}
            emissive="#00E5FF"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

function CentralOrb() {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.2
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1
  })

  return (
    <group ref={meshRef}>
      <Sphere args={[0.9, 64, 64]}>
        <MeshDistortMaterial
          color="#0A1F6E"
          emissive="#00C8E8"
          emissiveIntensity={0.18}
          metalness={0.9}
          roughness={0.1}
          distort={0.35}
          speed={2}
        />
      </Sphere>
      <mesh>
        <torusGeometry args={[1.4, 0.04, 12, 80]} />
        <meshBasicMaterial color="#00C8E8" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.03, 12, 80]} />
        <meshBasicMaterial color="#1B4FD8" transparent opacity={0.25} />
      </mesh>
    </group>
  )
}

function Particles() {
  const count = 280
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3
    }
    return pos
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.018
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#00C8E8"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

export default function Canvas3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#00C8E8" />
      <pointLight position={[-4, -3, -2]} intensity={1.8} color="#1B4FD8" />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#ffffff" />

      <Stars radius={60} depth={30} count={500} factor={2} saturation={0} fade speed={0.5} />

      <Particles />
      <CentralOrb />
      <HeartShape />
      <StarShape />
      <CircleDisc />
      <FlowerShape />
    </Canvas>
  )
}

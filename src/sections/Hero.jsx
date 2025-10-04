import { section } from "motion/react-client";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Flower} from "../components/Flower";
const Hero = () => {
    return (
        <section className="flex items-start justify-center 
        md:items-start md:justify-start min-h-screen overflow-hidden
         c-space">

            <HeroText/>
            <ParallaxBackground/>
            <figure className="absolute inset-0" style={{width:"100vw",height:"100vh"}} >
                <Canvas>
                    <Astronaut/>
                    <OrbitControls/>
                </Canvas>
            </figure>
         </section>
    );
};

export default Hero;

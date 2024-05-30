"use client";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/button";


export const LandingHero = () => {
    const {isSignedIn}=useAuth();
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                
                <h1>AI Tools for Education</h1>
                <div className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                        options={{
                            strings: ["Create, Share, Learn"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
            

                </div>            
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Create AI models, share them with your students, and learn together.

            </div>
            <div>
                <Link href={isSignedIn?"/dashboard":"/sign-up" }>
                    <Button className="md:text-lg p-4 md:6 rounded-full font-semibold">
                        Start Generating
                    </Button>
                </Link>

            </div>
            

            </div>
    );
}
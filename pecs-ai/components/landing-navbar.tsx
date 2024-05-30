"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";




export const LandingNavbar = () => {
    const {isSignedIn}=useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div className="relative h-8 w-8 mr-4">
                        <Image fill src="/logo.png" alt="logo"/>

                    </div>
                    <h1 className="text-2xl fot-bold text-white">
                        PecsiAI

                    </h1>
                </Link>
                <div className="flex items-center gap-x-2">
                    <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                        <Button className="rounded-full">
                            Get Started
                        </Button>
                    </Link>

                </div>
            
            </nav>
    );
}

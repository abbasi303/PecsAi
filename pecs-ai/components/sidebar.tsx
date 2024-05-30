"use client"

import Link from "next/link";
import Image from "next/image";
import { Code2Icon, ImageIcon, LayoutDashboard, MessageCircleCode, Music2Icon, Settings2, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Coversation",
        icon: MessageCircleCode,
        href: "/conversation",
        color: "text-sky-500"
    },
    {
        label:"Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-sky-500"
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-sky-500"
    },
    {
        label:"Music Generation",
        icon: Music2Icon,
        href: "/music",
        color: "text-sky-500"
    },
    {
        label:"Code Generation",
        icon: Code2Icon,
        href: "/code",
        color: "text-sky-500"
    },
    {
        label:"Settings",
        icon: Settings2,
        href: "/settings",
        color: "text-sky-500"
    },
   
]

const SideBar = () => {
    const pathname = usePathname();
    return (
<div className="space-y-4 py-4 flex flex-col h-full
    text-white" style={{background: 'linear-gradient(0deg, white,blue, darkblue)'}}>
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill src="/logo.png" alt="logo" />

                    </div>

                   <h1 className="text-2xl font-bold">
                    PecsiAI
                   </h1>
                </Link>

                <div className="space-y-1">
                    {routes.map((route) => (
                    <Link 
                    href={route.href} 
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full jusitfy-start rounded-md hover:bg-blue-800 transition duration-200 ease-in-out font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg trasition duration-200 ease-in-out",
                    route.href === pathname ? "text-white bg-white/10" : "text-zinc")}
                    >
                    <div className="flex items-center">
                        <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                        {route.label}
                    </div>
                    </Link>
                    ))}

                </div>
            </div>

        </div>
    );
    }
export default SideBar;
















"use client"

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Code2Icon, ImageIcon, MessageSquare, Music2Icon, VideoIcon } from 'lucide-react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const tools=[
    {
        label:"Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-zblue-500",
        bgColor: "bg-sky-500"

    },
    {
        label:"Generate Image",
        icon: ImageIcon,
        href: "/image",
        color: "text-neon-500",
        bgColor: "bg-cyan-500"
           },
    {
        label:"Create Music",
        icon: Music2Icon,
        href: "/music",
        color: "text-green-500",
        bgColor: "bg-amber-500"

    },
    {
        label:"AI Videos ",
        icon: VideoIcon,
        href: "/video",
        color: "text-red-500",
        bgColor: "bg-emerald-500"

    },
    {
        label:"Code Generation",
        icon: Code2Icon,
        href: "/code",
        color: "text-purple-500",
        bgColor: "bg-purple-500"

    },

]
const DashboardPage= () => {
    const router = useRouter();
    return (
        <div className="mb-8 spcae-y-4 " >
            <h2 className='text-2xl md:txt-4xl font-bold text-center text-slate-100'>
                Explore the power of AI
                 </h2>
                 <p className='text-muted-foreground font-light tex-sm md:text-lg text-center'>
 Chat with smartest AI -Experience the power of AI

                 </p>
                 <div className='px-4 md:px-20 lg:px-32 space-y-4'>
                    {tools.map((tool) => (
                        <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        
                        className='p-4 border-black/5 border-opacity-50 opacity-75 flex items-center justify-between hover:shadow-md transition cursor-pointer'                        >
                            
                            <div className='flex items-center gap-x-4'>
                                <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                                    <tool.icon className={cn("w-5 h-5",tool.icon)} />

                                 </div>
                                 <div className={cn("font-semibold text-black")}>
                                    {tool.label}

</div>

                                <div className={cn("w-8 h-8",tool.color)}>

                                </div>

                            </div>
                            <ArrowRight className="w-5 h-5" />

                        </Card>
                        
                    ))

                    }

                 </div>
  
        </div>
    );
};

export default DashboardPage;




















// const DashboardPage = () => {
//     const router = useRouter();
//     return (
//         <div className="mb-8 spcae-y-4">
//             <h2 className='text-2xl md:txt-4xl font-bold text-center'>Explore the power of AI</h2>
//             <p className='text-muted-foreground font-light tex-sm md:text-lg text-center'>Chat with smartest AI -Experience the power of AI</p>
//             <div className='px-4 md:px-20 lg:px-32 space-y-4'>
//                 {tools.map((tool) => (
//                     <Card
//                         onClick={() => router.push(tool.href)}
//                         key={tool.href}
//                         className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transiton cursor-pointer'
//                     >
//                         <div className='flex items-center gap-x-4'>
//                             <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
//                                 <tool.icon className={cn("w-5 h-5", tool.icon)} />
//                             </div>
//                             <div className={cn("font-semibold text-black")}>
//                                 {tool.label}
//                             </div>
//                             <div className={cn("w-8 h-8", tool.color)}></div>
//                         </div>
//                         <ArrowRight className="w-5 h-5" />
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };










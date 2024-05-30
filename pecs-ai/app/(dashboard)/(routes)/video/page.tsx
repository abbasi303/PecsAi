"use client";

import axios from "axios";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "@/components/heading"
import { MessageCircleDashedIcon, MessageSquare, Music2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";



const VideoPage = () => {
    const router = useRouter();
    const [video, setVideo] = useState<string>();
    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(values:z.infer<typeof formSchema>) => {
        try {

            setVideo(undefined)

            const response = await axios.post("/api/video", values);
            setVideo(response.data[0]);
            form.reset();
        } catch (error: any) {
            //TODO:Open Pro Model
            console.log(error);
        } finally {
            router.refresh();
        }
    };

    return (
        <div>
        <Heading title={"Video Generation"}
         description={"Turn your prompt into music"} 
         icon={Music2Icon} 
         color={"text-emerald-500"} 
         iconColor={"text-orange-700"} 
         bgColor={"text-orange-700/10"}/>

            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                px-3
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12
                                        lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none
                                                focus-visible:ring-0
                                                focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Clown Fish swimming in the ocean"
                                                {...field}
                                                />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-12"
                            disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader/>
                        </div>
                        
                        )}
                    {!video && !isLoading && (
                            <Empty label="No video started"/>

                        )}

                    {video && (
                        <div className="aspect-w-16 aspect-h-9 w-full max-w-screen-lg mx-auto">
                            <video controls className="aspect-content rounded-lg border bg-black">
                                <source src={video} />
                            </video>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoPage;
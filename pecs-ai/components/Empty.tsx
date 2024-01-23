import Image from "next/image";

interface EmptyProps {
    label: string;
    
    }
export const Empty = ({label}:EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify center"> 
        <div className="relative h-72 ">
        <Image src={"/Empty.png"} alt={""} width={100} height={100} />

        </div>
        <p className="text-muted-foreground text-sm text-center">
            {label}
        </p>
        </div>
    );
}
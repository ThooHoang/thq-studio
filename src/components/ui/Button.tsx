import { ArrowUpRight } from "lucide-react";


export default function Button ({children, variant}: {children: React.ReactNode, variant:string}){
    
    return (
        variant === "primary" 
        ? 
        <button className="w-full md:w-fit gap-2 flex items-center justify-center font-display font-bold rounded-full border border-white/15 text-[#f0ede8] bg-white/10 px-5 py-5 hover:translate-y-0.5 transition-all duration-200 hover:bg-white/20">
            {children}
            <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </button> 
        :
        <button className="w-full md:w-fit gap-2 flex items-center justify-center font-display font-bold rounded-full text-white/55 bg-transparent border border-white/15 px-5 py-5 hover:text-[#f0ede8] hover:translate-y-0.5 transition-all duration-200">
            {children}
            <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </button> 
    )
}
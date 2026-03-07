export default function Badge({name}:{name:string}) {
    return (
        <div className="flex items-center justify-center font-mono  p-2 px-4 w-fit text-sm text-white/20 text-center">
            {name}    
        </div>  
     
    )
}
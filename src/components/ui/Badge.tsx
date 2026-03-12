import {motion} from "framer-motion"
export default function Badge({name}:{name:string}) {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0}} className="flex items-center justify-center font-mono p-2 px-4 w-fit text-sm text-white/20 light:text-black/20 text-center">
            {name}
        </motion.div>
    )
}

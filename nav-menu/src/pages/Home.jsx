
import {motion} from "framer-motion"
import RiveIcon from "../components/icons/RiveIcon"

const Home = () => {
  return (
    <>
      <motion.h1
        initial = {{x:'-50%', y: "-20%", opacity: 0}}
        animate={{

          x:'-50%', y: "-50%", opacity: 1
        }}
        transition={{duration:0.5}}
        className='float-mid'>
        Home
      </motion.h1>

      <RiveIcon/>
      </>
  )
}

export default Home
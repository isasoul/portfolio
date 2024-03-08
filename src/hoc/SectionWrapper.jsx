
import { motion } from 'framer-motion'

//import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="px-20 md:py-10 max-w-8xl mx-auto relative z-0">

                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />

            </motion.section>
        )
    }



export default SectionWrapper
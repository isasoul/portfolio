import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// email js: template_oxq0y9n / service id service_83vcr8o /sEdGT25G40DodRFA3
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setForm({...form, [name]: value })
   }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true);

    emailjs.send(
       'service_83vcr8o', 
       'template_oxq0y9n',
      {
        from_name: form.name,
        to_name: 'Isabel',
        from_email: 'form.email',
        to_email: 'mariaisabelmolinafer@gmail.com',
        message: form.message,
      },
      'sEdGT25G40DodRFA3'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will get back to you as soon as possible');

      setForm({
        name:'',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      
      console.log(error),

      alert('Something went wrong.')

    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row pb-10 flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.8] bg-slate-800 p-8 rounded-2xl"
      >
        
        <h3 className="font-bold text-xl">
          Get in touch.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='  mt-5 flex flex-col gap-3'>
          <label className='flex flex-col'>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span>Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none
              border-none font-medium"
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold 
          shadow-md shadow-primary rounded-xl '
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
       <EarthCanvas /> 

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
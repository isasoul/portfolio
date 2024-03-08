import React from 'react'
import {Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const {Progress} = useProgress();
  return (
    <Html>
      <span className='canva-loads'></span>
      <p
      style={{
        fontSize:14,
        color:'#f1f1f1',
        fontWieght: 800,
        marginTop: 150,
      }}>{Progress}</p>
    </Html>
  )
}

export default Loader
import React from 'react'
import {Html,useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (
    // <Html>
    //   <span className='canvas-load'></span>
    //   <p style={{fontSize:20,
    //              color:'#f1f1f1',
    //              fontWeight:700,
    //              marginTop:40}}>{progress.toFixed(2)}%</p>
    // </Html>
    <Html>

        <div className='progress-loader'>
          <span style={{'--i':1}}></span>
          <span style={{'--i':2}}></span>
          <span style={{'--i':3}}></span>
          <span style={{'--i':4}}></span>
          <span style={{'--i':5}}></span>
          <span style={{'--i':6}}></span>
          <span style={{'--i':7}}></span>
          <span style={{'--i':8}}></span>
          <span style={{'--i':9}}></span>
          <span style={{'--i':10}}></span>
          <span style={{'--i':11}}></span>
          <span style={{'--i':12}}></span>
          <span style={{'--i':13}}></span>
          <span style={{'--i':14}}></span>
          <span style={{'--i':15}}></span>
          <span style={{'--i':16}}></span>
          <span style={{'--i':17}}></span>
          <span style={{'--i':18}}></span>
          <span style={{'--i':19}}></span>
          <span style={{'--i':20}}></span>
        </div>
    </Html>
  )
}

export default Loader
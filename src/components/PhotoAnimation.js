import React from "react"
import {Spring} from 'react-spring/renderprops'

const PhotoAnimation = (props) => {
   
    return (
       <div>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 0.4, marginTop: 300 }}
      >
          {/* <PhotoCard/> */}
      </Spring>
      </div>
    );
}


export default PhotoAnimation 
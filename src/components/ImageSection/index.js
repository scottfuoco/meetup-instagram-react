import React from 'react'
import { CardMedia } from 'material-ui/Card';

const ImageSection = () => {
  return (
    <CardMedia>
      <img role="presentation" style={{ 'maxHeight': '500px' }} src="ringu.jpg" />
    </CardMedia>
  )
}

export default ImageSection
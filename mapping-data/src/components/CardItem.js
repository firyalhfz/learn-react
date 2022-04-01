import * as React from 'react'
import Typography from '@mui/material/Typography'
import datacards from './DataCard'

function CardItem() {
  return (
    <div>
      {datacards.map((item, index) => {
        return (
          <div>
            <Typography variant="h4" component="div" key={index}>
              {item.title}
            </Typography>
            <Typography variant="h5" component="div" key={index}>
              {item.subtitle}
            </Typography>
            <Typography variant="body" component="div" key={index}>
              {item.price}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              key={index}
            >
              {item.beli}
            </Typography>
          </div>
        )
      })}
    </div>
  )
}

export default CardItem

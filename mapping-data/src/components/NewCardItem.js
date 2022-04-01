import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

const NewCardItem = props => {
  console.log(props.dataCard)
  return (
    <Stack spacing={2}>
      {props.dataCard.map(card => {
        return (
          <Item>
            <CardMedia key={card.id}>
              <Img src={card.img} />
            </CardMedia>
            <Typography key={card.id}>{card.title}</Typography>
            <Typography key={card.id}>{card.subtitle}</Typography>
            <Typography key={card.id}>{card.price}</Typography>
          </Item>
        )
      })}
    </Stack>
  )
}

export default NewCardItem

import React from 'react'
import CardItem from './CardItem'
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

function Card() {
  return (
    <div sx={{ maxWidth: { xs: 450, sm: 450 } }}>
      <Stack spacing={2}>
        <Item>
          <CardItem />
        </Item>
        <Item>
          <CardItem />
        </Item>
        <Item>
          <CardItem />
        </Item>
        <Item>
          <CardItem />
        </Item>
      </Stack>
    </div>
  )
}

export default Card

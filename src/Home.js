import * as React from 'react'


import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './Details'

export default function Home() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userDetails = {
      name: { name },
      age: { age },
      
    }
    dispatch(addUser(userDetails))
    setName('')
    setAge('')

  }
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <form action={'showdetails'} onSubmit={handleSubmit}>
        <FormControl sx={{ marginTop: 5 }}>
          <TextField
            id='name'
            name='name'
            label='Name'
            variant='outlined'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <TextField
            id='age'
            name='age'
            label='age'
            type='number'
            onChange={(e) => setAge(e.target.value)}
            value={age}
            required
          />

          <Button variant='contained' type='submit'>
            SUBMIT
          </Button>
        </FormControl>
      </form>
    </Box>
  )
}

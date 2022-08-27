import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row" marginTop="16px">
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#59cde3',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}>
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#FCC757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontSize="22px"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
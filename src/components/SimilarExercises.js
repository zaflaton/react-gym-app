import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercise = ({ targetMuscleExercises }) => {
  return (
    <Box sx={{ marginTop: { lg: '150px', xs: '20px' } }}>
      <Typography variant="h3" mb="20px" fontWeight="bold" paddingX="30px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ pb: '10px', position: 'relative' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarExercise

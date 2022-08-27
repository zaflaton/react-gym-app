import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarEquipment = ({ equipmentExercises }) => {
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb="20px" fontWeight="bold">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: '10px', position: 'relative' }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarEquipment

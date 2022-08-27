import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} paddingX="35px">
      <Typography variant="h3" mb="40px" fontWeight="bold">
        Watch{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '50px', xs: '0' },
        }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <Box>
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer">
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box padding="20px">
                <Typography variant="h6" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="#FF2625" fontWeight="700">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos

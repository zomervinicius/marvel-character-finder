import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

export default function CharacterSkeleton() {
  return (
    <Grid container spacing={4}>
      {[...Array(20)].map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Skeleton
              variant="rect"
              style={{ paddingTop: '80%' }}
              width="auto"
              height="auto"
              animation="wave"
            />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Grid>
        )
      })}
    </Grid>
  )
}

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '83%'
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

export default function CharacterCard({ card, showContent = true }) {
  const classes = useStyles()
  const history = useHistory()
  const handleClick = (cardId) => {
    history.push(`/detail/${cardId}`)
  }
  return (
    <Grid item key={card.id} xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
          title="marvel-char-img"
        />
        {showContent && (
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <CardActions>
              <Button
                size="large"
                color="primary"
                onClick={() => handleClick(card.id)}
              >
                Detail
              </Button>
            </CardActions>
          </CardContent>
        )}
      </Card>
    </Grid>
  )
}

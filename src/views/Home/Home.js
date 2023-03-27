import { Grid, Typography } from '@mui/material'
import founders from '../../images/houses.png'
import Index from '../../componentes/Index/Index'

const Home= () => {
  return (
    
    <Grid>
      <Grid 
      	container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
      <Typography variant='h4' padding={3}>
      Bem-vindo à nossa página dedicada às Casas de Hogwarts.
      </Typography>
      <Typography variant='p'  padding={3} marginBottom={6}>
     Nós somos apaixonados por esse mundo mágico e acreditamos que você também é! Aqui, você encontrará tudo o que precisa saber sobre as quatro casas de Hogwarts: 
      </Typography>

      <Index/>
      </Grid>
      <img src={founders} width='100%'>
      </img>
   
    </Grid>
  )
}

export default Home
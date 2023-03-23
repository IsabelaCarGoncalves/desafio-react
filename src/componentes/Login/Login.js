import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, TextField, Typography, Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useState, useEffect } from 'react'
import api from '../../services/api';

const validationPost = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
  checkbox: yup.boolean().required(),
})

function Post() {

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(validationPost)
  })
  
  const addPost = values => console.log(values)

  
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    try {
      
      const response = await api.get("/Houses");

      const data = response.data;
      setHouses(data);

    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
    getHouses();
  }, [])
    
  return(
      
      <Box >
        
          <Grid >
            <form onSubmit={handleSubmit(addPost)}>
              <Grid>
              <TextField id="outlined-basic" type="text" name="login" {...register("login")}/>
              <Typography variant='p'>{errors.login?.message}</Typography>
              </Grid>
              <Grid>
              <TextField id="outlined-basic" type="password" name="password" {...register("password")}/>
              <Typography variant='p'>{errors.login?.message}</Typography>
              </Grid>
              <Grid>
              <TextField id="outlined-basic" type="checkbox" name="checkbox" {...register("checkbox")}/>
              <Typography>{errors.checkbox?.message}</Typography>
              </Grid>
              <Button variant="outlined" type="submit">enviar</Button>
            </form>
            
          </Grid>  
          <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      
      id: 'uncontrolled-native',
    }}
  >
    {houses.map((key) => (
      <option value={key?.name}>{key?.name}</option>
    ))}
    
  
  </NativeSelect>
</FormControl>     
        </Box>    
    
  )
}

export default Post
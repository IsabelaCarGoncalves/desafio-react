import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const validationPost = yup.object({
  title: yup.string().required(),
  checkbox: yup.string().required(),
})

function Post() {

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(validationPost)
  })
  
  const addPost = values => console.log(values)

  return(
    <div>
      <main>
          <form onSubmit={handleSubmit(addPost)}>
            <div>
            <label>titulo</label>
            <input type="text" name="title" {...register("title")}/>
            <p>{errors.title?.message}</p>
            </div>
            <div>
            <label>titulo</label>
            <input type="checkbox" name="checkbox" {...register("checkbox")}/>
            <p>{errors.checkbox?.message}</p>
            </div>
            <div>
            <button type="submit">enviar</button>
            </div>
          </form>

       
      </main>    
    </div>
  )
}



export default Post
"use client"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(){
  const router=useRouter()
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const params=useParams()
  const id=params.id

  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id)
   .then(res=>res.json())
   .then(result=>{
    setTitle(result.title)
    setBody(result.body)
   })
  },[id])

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title=e.target.title.value
      const body=e.target.body.value 
      const options={
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({title,body})
      }
      
      fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`,options)
       .then(res=>res.json())
       .then(result=>{
        router.refresh()
        router.push(`/read/${result.id}`)
       })
    }}>
    <div className='input_title'><input type="text" name='title' placeholder='제목' value={title}
    onChange={(e)=>{setTitle(e.target.value)}}/></div>
    <div className='input_body'><textarea type="text" name='body' placeholder='내용을 입력해주세요' value={body} 
    onChange={(e)=>{setBody(e.target.value)}}/></div>
    <div className='input_btn'><input type="submit" value='저장하기'/></div>
    </form>
  )
}
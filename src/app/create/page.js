"use client"
import { useRouter } from "next/navigation";


export default function Create(){
  const router=useRouter()

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title=e.target.title.value
      const body=e.target.body.value 
      const options={
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({title,body})
      }
      
      fetch(process.env.NEXT_PUBLIC_API_URL+'topics',options)
       .then(res=>res.json())
       .then(result=>{
        router.refresh()
        router.push(`/read/${result.id}`)
       })
    }}>
    <div className="input_title"><input type="text" name='title' placeholder="제목"/></div><br/>
    <div className="input_body"><textarea type="text" name='body' placeholder="내용을 입력해주세요"/></div>
    <div className="input_btn"><input type="submit" value='저장하기'/></div>
    </form>
  )
}
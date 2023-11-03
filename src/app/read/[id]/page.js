
export default async function Read(props){
  const res= await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`,{next:{revalidate: 0}})
  const result= await res.json()
  console.log(result)


  return (
    <div className='read_main'>
    <div className='read_title'>{result.title}</div>
    
    <div className='read_body'>{result.body}</div>
    </div>
  )
}
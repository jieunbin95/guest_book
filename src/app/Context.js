"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";


export function Context() {
  const {id} = useParams();
  const router=useRouter()

  const clearText=()=>{
    const options={method:'delete'}

    fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`,options)
     .then(res=>res.json())
     .then(result=>{
      router.refresh()
      router.push('/')
     })
  }

  return (
    <>
    {id?<>
      <li>
        <Link href={`/update/${id}`}>방명록 수정하기</Link>
      </li>
      <li className='btn-delete'>
        <input  onClick={()=>clearText()} type="button" value="방명록 삭제하기" />
      </li>
    </> : ''}
    </>
  );
}

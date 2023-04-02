import Link from "next/link"
import "../Css/style.css"


export default function Home() {
  return (
    <div>
   
      <div className = "navbar">
     
        <ul className = "top">
          <li className = "zoo">zoologico</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
        </ul> </div>
     
      <Link href="/dashboard"> dash link</Link>
    </div>

  )
}

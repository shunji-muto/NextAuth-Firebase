"use client"

import { logInWithFirebaseAuth } from "@/lib/firebase/firebase-auth"

const Page = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{fontSize:20, fontWeight:20}}>
            ログインページです
        </div>
        <button onClick={logInWithFirebaseAuth} style={{height:"48px", padding: "8px"}}>
            Googleでログインする
        </button>
    </div>
  )
}

export default Page
"use client"

import { logInWithFirebaseAuth } from "@/lib/firebase/firebase-auth"
import Link from "next/link"

const Page = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap: 20}}>
        <div style={{fontSize:20, fontWeight:20}}>
            ログインページです
        </div>
        <Link href={`/protected-page`}>
          <button>
              "/protected-page"ページへのリンク（※ログインしてないため、このページに戻ってくるよ）
          </button>
        </Link>
        <button onClick={logInWithFirebaseAuth} style={{height:"48px", padding: "8px"}}>
            Googleでログインする
        </button>
    </div>
  )
}

export default Page
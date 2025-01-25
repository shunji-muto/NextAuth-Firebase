"use client"

import { logOutWithFirebaseAuth } from "@/lib/firebase/firebase-auth"
import Link from "next/link"

const Page = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap: 20}}>  
        <div style={{fontSize: 20, fontWeight: 20}}>ログインした人限定のページ</div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <button>
                <Link href={`/`}>"/"ページへのリンク</Link>
            </button>
            （※ログインしているセッションが残っているため、このページに戻ってくるよ）
        </div>
        <button onClick={logOutWithFirebaseAuth}>ログアウト</button>
    </div>
  )
}

export default Page
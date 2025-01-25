import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ReactElement } from "react"

const Layout = async ({children}:{children:ReactElement}) => {
  const session = await getServerSession(authOptions)

  if(session?.user) redirect(`/protected-page`)

  return <>{children}</>
  
}

export default Layout
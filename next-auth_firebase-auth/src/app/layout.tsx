import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>      
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </SessionProvider>   
  ); 
}

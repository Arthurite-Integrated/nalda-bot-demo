import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import LexChatbot from "./LexChatbot";

export const metadata: Metadata = {
  title: "NALDA - National Agricultural Land Development Authority",
  description: "National Agricultural Land Development Authority of Nigeria",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <LexChatbot /> 
    </html>
  )
}

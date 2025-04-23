"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Cookies from "js-cookie"
import Image from "next/image"

export default function ClientLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [clientName, setClientName] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const client = searchParams.get("client")
    if (client) {
      setClientName(client)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Check if password matches the client name
    if (password.toLowerCase() === clientName.toLowerCase()) {
      // Set client authentication cookie (expires in 1 day)
      Cookies.set("lumio-client-auth", clientName, { expires: 1 })
      router.push(`/delivery/${clientName}`)
    } else {
      setError("Invalid password. Please try again.")
    }

    setLoading(false)
  }

  // Format client name for display (capitalize first letter)
  const formattedClientName = clientName.charAt(0).toUpperCase() + clientName.slice(1)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-seasalt p-4">
      <div className="mb-8">
        <Image src="/images/lumio-logo-pale-violet.png" alt="Lumio Logo" width={200} height={80} priority />
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-heading text-english-violet">
            {formattedClientName} Portal Login
          </CardTitle>
          <CardDescription className="text-center">Enter your password to access your email signatures</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-muted-foreground">
          This area is password protected.
        </CardFooter>
      </Card>
    </div>
  )
}

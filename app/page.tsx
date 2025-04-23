import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-seasalt p-4">
      <div className="mb-8">
        <Image src="/images/lumio-logo-pale-violet.png" alt="Lumio Logo" width={240} height={100} priority />
      </div>

      <div className="text-center mb-8">
        <h1 className="heading-lg text-english-violet mb-4">Email Signature Portal</h1>
        <p className="text-english-violet/80 text-lg max-w-md mx-auto">
          Access and customize your company's animated email signatures and avatars
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/login">
          <Button className="rounded-full px-8" size="lg">
            Admin Login
          </Button>
        </Link>
        <Link href="/client-login?client=movement">
          <Button variant="outline" className="rounded-full px-8" size="lg">
            Client Login
          </Button>
        </Link>
      </div>
    </div>
  )
}

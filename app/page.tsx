import { ConnectionGrid } from "@/components/connection-grid"

export default function Home() {
  return (
    <main className="relative min-h-screen gradient-bg floating-shapes overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Connect with People</h1>
          <p className="text-lg text-muted-foreground">
            Discover and connect with amazing people from LinkUp
          </p>
        </div>
        <ConnectionGrid />
      </div>
    </main>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Check, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Person {
  id: string
  name: string
  tags: string[]
  email?: string // Made email optional since it's not used in the component
  image: string
}

interface ConnectionCardProps {
  person: Person
  isConnected: boolean
  onConnect: () => void
}

export function ConnectionCard({ person, isConnected, onConnect }: ConnectionCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/10 transition-all duration-300 group-hover:ring-8 group-hover:ring-primary/30 group-hover:scale-110">
            <Image
              src={person.image || "/placeholder.svg"}
              alt={person.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="mb-4 text-center">
          <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {person.name}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {person.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors duration-300 group-hover:bg-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={onConnect}
            className="flex-1 transition-all duration-300 group-hover:scale-105"
            variant={isConnected ? "secondary" : "default"}
          >
            {isConnected ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Connected
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Connect
              </>
            )}
          </Button>
          {person.id === "6" ? (
            <Link href="/profile/sujal-prajapati" className="flex-1">
              <Button
                variant="outline"
                className="w-full transition-all duration-300 group-hover:scale-105 bg-transparent"
              >
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              className="flex-1 transition-all duration-300 group-hover:scale-105 bg-transparent"
            >
              <User className="mr-2 h-4 w-4" />
              View Profile
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

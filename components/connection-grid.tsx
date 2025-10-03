"use client"

import { useState } from "react"
import { ConnectionCard } from "@/components/connection-card"

interface Person {
  id: string
  name: string
  tags: string[]
  email?: string // Made email optional to match ConnectionCard interface
  image: string
}

const people: Person[] = [
  {
    id: "mina",
    name: "Mina Jafarpoor",
    tags: ["Senior", "Middle Eastern"],
    email: "mjafarpo@asu.edu",
    image: "/images/mina-jafarpoor1.png",
  },
  {
    id: "1",
    name: "Czar Buenviaje",
    tags: ["Junior", "Asian"],
    email: "cbuenvia@asu.edu",
    image: "/images/czar-buenviaje1.png",
  },
  {
    id: "2",
    name: "Vaibhav Kotecha",
    tags: ["Sophomore", "African"],
    email: "vkotecha@asu.edu",
    image: "/images/vaibhav-kotecha1.png",
  },

  {
    id: "4",
    name: "Skylar Gonzales",
    tags: ["Junior", "Hispanic"],
    email: "sngonza7@asu.edu",
    image: "/images/skylar-gonzales1.png",
  },
  {
    id: "5",
    name: "Aakash Goyal",
    tags: ["Junior", "Asian"],
    image: "/images/aakash.jpeg",
  },
  {
    id: "6",
    name: "Sujal Prajapati",
    tags: ["Junior", "Asian"],
    image: "/images/sujal.jpeg",
  },
]

export function ConnectionGrid() {
  const [connections, setConnections] = useState<Set<string>>(new Set())

  const handleConnect = (id: string) => {
    setConnections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {people.map((person) => (
        <ConnectionCard
          key={person.id}
          person={person}
          isConnected={connections.has(person.id)}
          onConnect={() => handleConnect(person.id)}
        />
      ))}
    </div>
  )
}

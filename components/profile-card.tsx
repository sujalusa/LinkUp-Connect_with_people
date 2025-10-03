"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Profile {
  name: string
  age: number
  location: string
  status: string
  bio: string
  interests: string[]
  images: string[]
}

interface ProfileCardProps {
  profile: Profile
  swipeDirection: "left" | "right" | null
}

export function ProfileCard({ profile, swipeDirection }: ProfileCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profile.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profile.images.length) % profile.images.length)
  }

  return (
    <Card
      className={`relative w-full h-[600px] overflow-hidden shadow-2xl transition-all duration-300 ${
        swipeDirection === "left"
          ? "translate-x-[-120%] rotate-[-20deg] opacity-0"
          : swipeDirection === "right"
            ? "translate-x-[120%] rotate-[20deg] opacity-0"
            : "translate-x-0 rotate-0 opacity-100"
      }`}
    >
      {/* Image Section */}
      <div className="relative h-full">
        <img
          src={profile.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${profile.name} - Photo ${currentImageIndex + 1}`}
          className="w-full h-full object-contain bg-gradient-to-br from-rose-100 to-orange-100"
        />

        {/* Image Navigation Dots */}
        <div className="absolute top-4 left-0 right-0 flex gap-2 px-4">
          {profile.images.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Image Navigation Buttons */}
        {profile.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Profile Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-baseline gap-3 mb-3">
            <h1 className="text-4xl font-bold text-balance">{profile.name}</h1>
            <span className="text-3xl font-light">{profile.age}</span>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-white/90">
              <Home className="h-4 w-4" />
              <span className="text-sm font-medium">{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">{profile.status}</span>
            </div>
          </div>

          <p className="text-sm text-white/90 mb-4 leading-relaxed text-pretty">{profile.bio}</p>

          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <Badge
                key={interest}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 px-3 py-1"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

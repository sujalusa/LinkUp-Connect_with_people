"use client"

import { ProfileCard } from "@/components/profile-card"
import { ActionButtons } from "@/components/action-buttons"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SujalProfile() {
  const router = useRouter()

  const profileData = {
    name: "Sujal Prajapati",
    age: 20,
    location: "Asian",
    status: "Junior",
    bio: "Living life one game at a time. Fitness enthusiast and badminton lover. Always up for an adventure!",
    interests: ["Badminton", "Gym", "Travel", "Gaming", "Music"],
    images: ["/images/sujal1.jpg", "/asian-man-gym-workout.jpg", "/asian-man-badminton.jpg"],
  }

  const handleLike = () => {
    console.log("Connected with Sujal!")
  }

  const handleDislike = () => {
    console.log("Passed on Sujal")
    router.push("/")
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 animate-gradient" />

      {/* Floating shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/">
          <button className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-700 shadow-lg transition-all hover:bg-white hover:shadow-xl">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </Link>
      </div>

      {/* Profile content */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <ProfileCard profile={profileData} swipeDirection={null} />
          <ActionButtons onLike={handleLike} onDislike={handleDislike} />
        </div>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { X, Plus, MessageCircle, Clock } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ActionButtonsProps {
  onDislike: () => void
  onLike: () => void
}

export function ActionButtons({ onDislike, onLike }: ActionButtonsProps) {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [messageChoice, setMessageChoice] = useState<"now" | "later" | null>(null)

  const handleConnect = () => {
    setShowPrompt(true)
    onLike()
  }

  const handleMessageNow = () => {
    setIsConnected(true)
    setMessageChoice("now")
    setShowPrompt(false)
  }

  const handleMessageLater = () => {
    setIsConnected(true)
    setMessageChoice("later")
    setShowPrompt(false)
  }

  return (
    <>
      <div className="flex items-center justify-center gap-8 mt-8">
        <Button
          size="icon"
          onClick={onDislike}
          className="h-16 w-16 rounded-full border-2 border-destructive/30 bg-card hover:bg-destructive/10 hover:border-destructive hover:scale-110 transition-all shadow-lg"
        >
          <X className="h-8 w-8 text-destructive" />
        </Button>

        {isConnected ? (
          messageChoice === "now" ? (
            <Button
              size="lg"
              className="h-16 px-8 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all shadow-xl text-white font-semibold"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Message
            </Button>
          ) : (
            <Button
              size="lg"
              className="h-16 px-8 rounded-full bg-emerald-500 hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl text-white font-semibold"
            >
              <Clock className="h-5 w-5 mr-2" />
              Connected
            </Button>
          )
        ) : (
          <Button
            size="icon"
            onClick={handleConnect}
            className="h-20 w-20 rounded-full border-2 border-emerald-500/30 bg-emerald-500 hover:bg-emerald-600 hover:border-emerald-400 hover:scale-110 transition-all shadow-xl"
          >
            <Plus className="h-10 w-10 text-white" strokeWidth={3} />
          </Button>
        )}
      </div>

      <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Connected!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              You're now connected! Would you like to send a message?
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 pt-4">
            <Button onClick={handleMessageNow} className="h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold">
              <MessageCircle className="h-5 w-5 mr-2" />
              Message Now
            </Button>
            <Button onClick={handleMessageLater} variant="outline" className="h-12 font-semibold bg-transparent">
              <Clock className="h-5 w-5 mr-2" />
              Maybe Later
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

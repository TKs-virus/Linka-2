"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign } from "lucide-react"

interface TaskCardProps {
  task: {
    id: string
    name: string
    description: string
    image: string
    estimatedTime: string
    startingPrice: string
  }
  onSelect: (taskId: string) => void
}

export default function TaskCard({ task, onSelect }: TaskCardProps) {
  return (
    <Card className="cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => onSelect(task.id)}>
      <div className="relative h-40">
        <Image src={task.image || "/placeholder.svg"} alt={task.name} fill className="object-cover rounded-t-lg" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{task.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{task.estimatedTime}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>From {task.startingPrice}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronRight, Droplet, Info } from "lucide-react"
import TaskCard from "./task-card"

export default function PlumbingTasksPage() {
  const router = useRouter()
  const [propertyType, setPropertyType] = useState("residential")

  const plumbingTasks = [
    {
      id: "leak-repair",
      name: "Leak Repair",
      description: "Fix leaking faucets, pipes, or fixtures",
      image: "/placeholder.jpg",
      estimatedTime: "1-2 hours",
      startingPrice: "$80",
    },
    {
      id: "drain-cleaning",
      name: "Drain Cleaning",
      description: "Unclog and clean drains in sinks, tubs, or showers",
      image: "/placeholder.jpg",
      estimatedTime: "1-3 hours",
      startingPrice: "$100",
    },
    {
      id: "water-heater",
      name: "Water Heater Installation/Repair",
      description: "Install new water heater or repair existing one",
      image: "/placeholder.jpg",
      estimatedTime: "2-4 hours",
      startingPrice: "$150",
    },
    {
      id: "toilet-repair",
      name: "Toilet Repair",
      description: "Fix running, clogged, or leaking toilets",
      image: "/placeholder.jpg",
      estimatedTime: "1-2 hours",
      startingPrice: "$90",
    },
    {
      id: "pipe-replacement",
      name: "Pipe Replacement",
      description: "Replace damaged or old pipes",
      image: "/placeholder.jpg",
      estimatedTime: "2-6 hours",
      startingPrice: "$200",
    },
    {
      id: "fixture-installation",
      name: "Fixture Installation",
      description: "Install new sinks, faucets, showers, or bathtubs",
      image: "/placeholder.jpg",
      estimatedTime: "2-4 hours",
      startingPrice: "$120",
    },
  ]

  const handleTaskSelect = (taskId: string) => {
    router.push(`/home-services/schedule?service=plumbing&task=${taskId}&property=${propertyType}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/home-services" className="text-muted-foreground hover:text-foreground">
          Home Services
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span>Plumbing Services</span>
      </div>

      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-blue-100 text-blue-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          <Droplet className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-bold">Plumbing Services</h1>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start">
        <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
        <div>
          <p className="font-medium text-blue-800 mb-1">Professional Plumbing Services</p>
          <p className="text-blue-700">
            Our licensed plumbers can handle all your plumbing needs, from minor repairs to major installations. Select
            the task that best describes your issue, or choose "Custom Request" if you don't see your specific need
            listed.
          </p>
        </div>
      </div>

      {/* Tasks Grid */}
      <h2 className="text-xl font-bold mb-6">Select a Task</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {plumbingTasks.map((task) => (
          <TaskCard key={task.id} task={task} onSelect={handleTaskSelect} />
        ))}
        <Card
          className="cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={() => handleTaskSelect("custom")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
            <h3 className="font-bold text-lg mb-2">Custom Request</h3>
            <p className="text-muted-foreground">
              Don't see what you need? Describe your specific plumbing issue and we'll help.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Property Type Selection */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Property Type</h2>
        <p className="text-muted-foreground mb-4">
          Please select the type of property where the service will be performed:
        </p>
        <RadioGroup
          value={propertyType}
          onValueChange={setPropertyType}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="residential" id="residential" />
            <Label htmlFor="residential">Residential (Home, Apartment)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="commercial" id="commercial" />
            <Label htmlFor="commercial">Commercial (Office, Retail, etc.)</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <Button
          size="lg"
          onClick={() => router.push(`/home-services/schedule?service=plumbing&property=${propertyType}`)}
        >
          Next: Schedule Service
        </Button>
      </div>
    </main>
  )
}

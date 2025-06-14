"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"

interface CarSearchFormProps {
  onSearch: () => void
}

export default function CarSearchForm({ onSearch }: CarSearchFormProps) {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [dropoffDate, setDropoffDate] = useState<Date>()
  const [pickupTime, setPickupTime] = useState("10:00")
  const [dropoffTime, setDropoffTime] = useState("10:00")

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="pickupLocation">Pick-up Location</Label>
          <Input id="pickupLocation" placeholder="City or Airport" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="dropoffLocation">Drop-off Location</Label>
          <Input id="dropoffLocation" placeholder="City or Airport" className="mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Pick-up Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label>Drop-off Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dropoffDate ? format(dropoffDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={dropoffDate} onSelect={setDropoffDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Pick-up Time</Label>
          <div className="flex items-center mt-1 border rounded-md">
            <Clock className="ml-3 h-4 w-4 text-muted-foreground" />
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full h-10 px-3 bg-transparent"
            >
              {Array.from({ length: 24 }).map((_, hour) => (
                <>
                  <option key={`${hour}:00`} value={`${hour}:00`}>
                    {hour.toString().padStart(2, "0")}:00
                  </option>
                  <option key={`${hour}:30`} value={`${hour}:30`}>
                    {hour.toString().padStart(2, "0")}:30
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Label>Drop-off Time</Label>
          <div className="flex items-center mt-1 border rounded-md">
            <Clock className="ml-3 h-4 w-4 text-muted-foreground" />
            <select
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="w-full h-10 px-3 bg-transparent"
            >
              {Array.from({ length: 24 }).map((_, hour) => (
                <>
                  <option key={`${hour}:00`} value={`${hour}:00`}>
                    {hour.toString().padStart(2, "0")}:00
                  </option>
                  <option key={`${hour}:30`} value={`${hour}:30`}>
                    {hour.toString().padStart(2, "0")}:30
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Button onClick={onSearch} className="w-full" size="lg">
        Search Cars
      </Button>
    </div>
  )
}

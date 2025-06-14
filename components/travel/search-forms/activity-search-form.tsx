"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plus, Minus } from "lucide-react"

interface ActivitySearchFormProps {
  onSearch: () => void
}

export default function ActivitySearchForm({ onSearch }: ActivitySearchFormProps) {
  const [date, setDate] = useState<Date>()
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="destination">Destination</Label>
        <Input id="destination" placeholder="City or Attraction" className="mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label>Adults</Label>
          <div className="flex items-center mt-1 border rounded-md">
            <Button type="button" variant="ghost" size="icon" onClick={() => setAdults(Math.max(1, adults - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex-1 text-center">{adults}</span>
            <Button type="button" variant="ghost" size="icon" onClick={() => setAdults(adults + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <Label>Children</Label>
          <div className="flex items-center mt-1 border rounded-md">
            <Button type="button" variant="ghost" size="icon" onClick={() => setChildren(Math.max(0, children - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex-1 text-center">{children}</span>
            <Button type="button" variant="ghost" size="icon" onClick={() => setChildren(children + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Label>Activity Type</Label>
        <select className="w-full h-10 px-3 mt-1 border rounded-md">
          <option value="all">All Activities</option>
          <option value="tours">Tours</option>
          <option value="attractions">Attractions</option>
          <option value="dayTrips">Day Trips</option>
          <option value="outdoor">Outdoor Activities</option>
          <option value="tickets">Tickets & Passes</option>
        </select>
      </div>

      <Button onClick={onSearch} className="w-full" size="lg">
        Find Activities
      </Button>
    </div>
  )
}

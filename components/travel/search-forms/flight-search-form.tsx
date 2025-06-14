"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plus, Minus } from "lucide-react"

interface FlightSearchFormProps {
  onSearch: () => void
}

export default function FlightSearchForm({ onSearch }: FlightSearchFormProps) {
  const [tripType, setTripType] = useState("roundTrip")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [passengers, setPassengers] = useState(1)
  const [cabinClass, setCabinClass] = useState("economy")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <RadioGroup defaultValue="roundTrip" value={tripType} onValueChange={setTripType} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundTrip" id="roundTrip" />
            <Label htmlFor="roundTrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneWay" id="oneWay" />
            <Label htmlFor="oneWay">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multiCity" id="multiCity" />
            <Label htmlFor="multiCity">Multi-City</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="origin">From</Label>
          <Input id="origin" placeholder="City or Airport" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="destination">To</Label>
          <Input id="destination" placeholder="City or Airport" className="mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        {tripType === "roundTrip" && (
          <div>
            <Label>Return Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Passengers</Label>
          <div className="flex items-center mt-1 border rounded-md">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setPassengers(Math.max(1, passengers - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex-1 text-center">{passengers}</span>
            <Button type="button" variant="ghost" size="icon" onClick={() => setPassengers(passengers + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <Label>Cabin Class</Label>
          <select
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
            className="w-full h-10 px-3 mt-1 border rounded-md"
          >
            <option value="economy">Economy</option>
            <option value="premiumEconomy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First Class</option>
          </select>
        </div>
      </div>

      <Button onClick={onSearch} className="w-full" size="lg">
        Search Flights
      </Button>
    </div>
  )
}

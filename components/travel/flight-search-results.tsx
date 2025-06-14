"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowRight, Clock, Filter, ChevronDown, ChevronUp, Plane, Luggage } from "lucide-react"

export default function FlightSearchResults() {
  const router = useRouter()
  const [priceRange, setPriceRange] = useState([200, 1000])
  const [durationRange, setDurationRange] = useState([2, 20])
  const [sortBy, setSortBy] = useState("price")
  const [filtersVisible, setFiltersVisible] = useState(true)

  // Mock flight data
  const flights = [
    {
      id: 1,
      airline: "Emirates",
      airlineCode: "EK",
      departureTime: "08:45",
      departureAirport: "JFK",
      arrivalTime: "14:30",
      arrivalAirport: "DXB",
      duration: "13h 45m",
      stops: 0,
      price: 845,
      layoverAirport: null,
      layoverDuration: null,
    },
    {
      id: 2,
      airline: "Qatar Airways",
      airlineCode: "QR",
      departureTime: "10:20",
      departureAirport: "JFK",
      arrivalTime: "17:15",
      arrivalAirport: "DXB",
      duration: "14h 55m",
      stops: 1,
      price: 780,
      layoverAirport: "DOH",
      layoverDuration: "2h 30m",
    },
    {
      id: 3,
      airline: "Turkish Airlines",
      airlineCode: "TK",
      departureTime: "12:30",
      departureAirport: "JFK",
      arrivalTime: "20:45",
      arrivalAirport: "DXB",
      duration: "16h 15m",
      stops: 1,
      price: 695,
      layoverAirport: "IST",
      layoverDuration: "3h 10m",
    },
    {
      id: 4,
      airline: "Lufthansa",
      airlineCode: "LH",
      departureTime: "16:50",
      departureAirport: "JFK",
      arrivalTime: "23:40",
      arrivalAirport: "DXB",
      duration: "14h 50m",
      stops: 1,
      price: 720,
      layoverAirport: "FRA",
      layoverDuration: "1h 45m",
    },
    {
      id: 5,
      airline: "British Airways",
      airlineCode: "BA",
      departureTime: "21:30",
      departureAirport: "JFK",
      arrivalTime: "06:15",
      arrivalAirport: "DXB",
      duration: "14h 45m",
      stops: 1,
      price: 760,
      layoverAirport: "LHR",
      layoverDuration: "2h 15m",
    },
  ]

  const handleSelectFlight = (flightId: number) => {
    router.push(`/travel/flight-details?id=${flightId}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Search criteria summary */}
      <div className="bg-card rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <span className="font-medium">New York (JFK)</span>
            <ArrowRight className="mx-2 h-4 w-4" />
            <span className="font-medium">Dubai (DXB)</span>
          </div>
          <div className="text-sm text-muted-foreground">Jun 20, 2025 - Jun 27, 2025 • 1 Passenger • Economy</div>
          <Button variant="outline" size="sm" className="ml-auto">
            Modify Search
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                <h2 className="font-semibold">Filters</h2>
              </div>
              {filtersVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>

            {filtersVisible && (
              <div className="p-4 border-t">
                {/* Price filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={100}
                    max={2000}
                    step={10}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Stops filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Stops</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nonstop" />
                      <Label htmlFor="nonstop">Non-stop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="oneStop" />
                      <Label htmlFor="oneStop">1 Stop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="twoStops" />
                      <Label htmlFor="twoStops">2+ Stops</Label>
                    </div>
                  </div>
                </div>

                {/* Airlines filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Airlines</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="emirates" />
                      <Label htmlFor="emirates">Emirates</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="qatar" />
                      <Label htmlFor="qatar">Qatar Airways</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="turkish" />
                      <Label htmlFor="turkish">Turkish Airlines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lufthansa" />
                      <Label htmlFor="lufthansa">Lufthansa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="british" />
                      <Label htmlFor="british">British Airways</Label>
                    </div>
                  </div>
                </div>

                {/* Duration filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Duration</h3>
                  <Slider
                    defaultValue={durationRange}
                    min={1}
                    max={30}
                    step={1}
                    onValueChange={setDurationRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{durationRange[0]}h</span>
                    <span>{durationRange[1]}h</span>
                  </div>
                </div>

                {/* Departure/Arrival Times */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Departure Time</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="morning" />
                      <Label htmlFor="morning">Morning (6AM - 12PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="afternoon" />
                      <Label htmlFor="afternoon">Afternoon (12PM - 6PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="evening" />
                      <Label htmlFor="evening">Evening (6PM - 12AM)</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            )}
          </div>
        </div>

        {/* Flight results */}
        <div className="lg:w-3/4">
          {/* Sort options */}
          <div className="bg-card rounded-lg p-4 mb-4 shadow-sm flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium">{flights.length} results</span> found
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-2">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-2 py-1 text-sm"
              >
                <option value="price">Price: Low to High</option>
                <option value="duration">Duration: Shortest</option>
                <option value="departureTime">Departure Time</option>
                <option value="arrivalTime">Arrival Time</option>
              </select>
            </div>
          </div>

          {/* Flight cards */}
          <div className="space-y-4">
            {flights.map((flight) => (
              <div key={flight.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    {/* Airline info */}
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">{flight.airlineCode}</span>
                      </div>
                      <div>
                        <div className="font-medium">{flight.airline}</div>
                        <div className="text-sm text-muted-foreground">Flight {flight.airlineCode}123</div>
                      </div>
                    </div>

                    {/* Flight times */}
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="text-right mr-3">
                        <div className="font-bold">{flight.departureTime}</div>
                        <div className="text-sm text-muted-foreground">{flight.departureAirport}</div>
                      </div>
                      <div className="flex flex-col items-center mx-3">
                        <div className="text-xs text-muted-foreground">{flight.duration}</div>
                        <div className="relative w-20 h-px bg-border my-1">
                          {flight.stops > 0 && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop`}
                        </div>
                      </div>
                      <div className="text-left ml-3">
                        <div className="font-bold">{flight.arrivalTime}</div>
                        <div className="text-sm text-muted-foreground">{flight.arrivalAirport}</div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-2xl font-bold">${flight.price}</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                  </div>

                  {/* Layover info if applicable */}
                  {flight.stops > 0 && (
                    <div className="mt-4 pt-4 border-t flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {flight.layoverDuration} layover at {flight.layoverAirport}
                      </span>
                    </div>
                  )}

                  {/* Flight features */}
                  <div className="mt-4 pt-4 border-t flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Plane className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Boeing 777</span>
                    </div>
                    <div className="flex items-center">
                      <Luggage className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Baggage included</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" className="mr-2">
                      Flight Details
                    </Button>
                    <Button onClick={() => handleSelectFlight(flight.id)}>Select Flight</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

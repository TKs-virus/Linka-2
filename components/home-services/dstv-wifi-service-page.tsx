"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Tv, Upload, Info } from "lucide-react"

export default function DstvWifiServicePage() {
  const router = useRouter()
  const [serviceType, setServiceType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  // Equipment state
  const [decoderModel, setDecoderModel] = useState("")
  const [dishKit, setDishKit] = useState("")
  const [lnbType, setLnbType] = useState("")
  const [cableLength, setCableLength] = useState("")
  const [routerModel, setRouterModel] = useState("")
  const [extenderModel, setExtenderModel] = useState("")

  // Add-ons state
  const [addons, setAddons] = useState<string[]>([])

  const handleAddonToggle = (addonId: string) => {
    setAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    )
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      router.push("/home-services/dstv-wifi/confirmation")
    }, 1500)
  }

  // Determine which equipment section to show based on service type
  const showDstvEquipment = serviceType === "new-dstv" || serviceType === "dstv-relocation"
  const showWifiEquipment = serviceType === "new-wifi" || serviceType === "wifi-extension"

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
        <span>DStv/WiFi Installation</span>
      </div>

      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-red-100 text-red-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          <Tv className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-bold">DStv/WiFi Installation Services</h1>
      </div>

      {/* Hero Image */}
      <div className="relative h-[300px] w-full mb-8 rounded-lg overflow-hidden">
        <Image src="/placeholder.jpg" alt="DStv/WiFi Installation" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Seamless Entertainment & Connectivity</h2>
          <p className="text-white text-lg max-w-md">
            Professional installation and troubleshooting for DStv and WiFi services
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start">
        <Info className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
        <div>
          <p className="font-medium text-red-800 mb-1">Expert Installation Services</p>
          <p className="text-red-700">
            Our certified technicians provide professional installation and troubleshooting for all your DStv and WiFi
            needs. Select your service type below to get started.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Service Type Selection */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Select Service Type</h2>
              <RadioGroup value={serviceType} onValueChange={setServiceType} className="space-y-4">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="new-dstv" id="new-dstv" />
                  <div>
                    <Label htmlFor="new-dstv" className="font-medium">
                      New DStv Installation (Single View / Explora / ExtraView)
                    </Label>
                    <p className="text-sm text-muted-foreground">Complete setup of new DStv system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="dstv-troubleshooting" id="dstv-troubleshooting" />
                  <div>
                    <Label htmlFor="dstv-troubleshooting" className="font-medium">
                      DStv Troubleshooting / Repair (Signal, Decoder Issues)
                    </Label>
                    <p className="text-sm text-muted-foreground">Fix issues with existing DStv setup</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="dstv-relocation" id="dstv-relocation" />
                  <div>
                    <Label htmlFor="dstv-relocation" className="font-medium">
                      DStv Relocation of Existing Setup
                    </Label>
                    <p className="text-sm text-muted-foreground">Move your existing DStv system to a new location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="new-wifi" id="new-wifi" />
                  <div>
                    <Label htmlFor="new-wifi" className="font-medium">
                      New WiFi Router / Modem Installation
                    </Label>
                    <p className="text-sm text-muted-foreground">Setup and configuration of new WiFi system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="wifi-troubleshooting" id="wifi-troubleshooting" />
                  <div>
                    <Label htmlFor="wifi-troubleshooting" className="font-medium">
                      WiFi Network Troubleshooting / Extension (Mesh, Extenders)
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Diagnose and fix WiFi issues or extend coverage area
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="data-cabling" id="data-cabling" />
                  <div>
                    <Label htmlFor="data-cabling" className="font-medium">
                      Data Cabling / Network Points Installation
                    </Label>
                    <p className="text-sm text-muted-foreground">Install network cables and connection points</p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* DStv Equipment Selection (conditional) */}
          {showDstvEquipment && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">DStv Equipment Selection</h2>
                <p className="text-muted-foreground mb-6">
                  Select the equipment you need for your DStv installation:
                </p>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="decoder-model" className="mb-2 block">
                      DStv Decoder Model
                    </Label>
                    <Select value={decoderModel} onValueChange={setDecoderModel}>
                      <SelectTrigger id="decoder-model">
                        <SelectValue placeholder="Select decoder model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="explora-3b">Explora 3B (Premium features)</SelectItem>
                        <SelectItem value="explora-2a">Explora 2A (Standard features)</SelectItem>
                        <SelectItem value="hd-decoder-5s">HD Decoder 5S (Basic features)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dish-kit" className="mb-2 block">
                      DStv Satellite Dish Kit
                    </Label>
                    <Select value={dishKit} onValueChange={setDishKit}>
                      <SelectTrigger id="dish-kit">
                        <SelectValue placeholder="Select dish kit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard-90cm">Standard 90cm Dish</SelectItem>
                        <SelectItem value="compact-60cm">Compact 60cm Dish</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="lnb-type" className="mb-2 block">
                      LNB Type
                    </Label>
                    <Select value={lnbType} onValueChange={setLnbType}>
                      <SelectTrigger id="lnb-type">
                        <SelectValue placeholder="Select LNB type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-lnb">Single LNB (1 decoder)</SelectItem>
                        <SelectItem value="twin-lnb">Twin LNB (2 decoders)</SelectItem>
                        <SelectItem value="smart-lnb">Smart LNB (multiple decoders)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cable-length" className="mb-2 block">
                      Coaxial Cable Length (meters)
                    </Label>
                    <Input
                      id="cable-length"
                      type="number"
                      placeholder="Estimated length needed"
                      value={cableLength}
                      onChange={(e) => setCableLength(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Our technician will measure the exact length during installation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* WiFi Equipment Selection (conditional) */}
          {showWifiEquipment && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">WiFi Equipment Selection</h2>
                <p className="text-muted-foreground mb-6">
                  Select the equipment you need for your WiFi installation:
                </p>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="router-model" className="mb-2 block">
                      WiFi Router Model
                    </Label>
                    <Select value={routerModel} onValueChange={setRouterModel}>
                      <SelectTrigger id="router-model">
                        <SelectValue placeholder="Select router model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tp-link-archer-c6">TP-Link Archer C6 (Dual-band)</SelectItem>
                        <SelectItem value="huawei-ax3">Huawei AX3 (WiFi 6)</SelectItem>
                        <SelectItem value="d-link-dir-842">D-Link DIR-842 (High-range)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="extender-model" className="mb-2 block">
                      WiFi Extender / Mesh System (Optional)
                    </Label>
                    <Select value={extenderModel} onValueChange={setExtenderModel}>
                      <SelectTrigger id="extender-model">
                        <SelectValue placeholder="Select extender/mesh system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="tp-link-deco-m4">TP-Link Deco M4 (Mesh, 2-pack)</SelectItem>
                        <SelectItem value="tenda-nova-mw6">Tenda Nova MW6 (Mesh, 3-pack)</SelectItem>
                        <SelectItem value="tp-link-re450">TP-Link RE450 (Single Extender)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cable-length" className="mb-2 block">
                      Ethernet Cable Length (meters, if needed)
                    </Label>
                    <Input
                      id="cable-length"
                      type="number"
                      placeholder="Estimated length needed"
                      value={cableLength}
                      onChange={(e) => setCableLength(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Service Add-ons */}
          {serviceType && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Service Add-ons (Optional)</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="cable-concealment"
                      checked={addons.includes("cable-concealment")}
                      onCheckedChange={() => handleAddonToggle("cable-concealment")}
                    />
                    <div>
                      <Label htmlFor="cable-concealment" className="font-medium">
                        Cable Concealment
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Wall channeling, trunking to hide cables (additional fee)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="multi-room"
                      checked={addons.includes("multi-room")}
                      onCheckedChange={() => handleAddonToggle("multi-room")}
                    />
                    <div>
                      <Label htmlFor="multi-room" className="font-medium">
                        Multi-room Cabling
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        For ExtraView/multiple access points (additional fee)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="network-optimization"
                      checked={addons.includes("network-optimization")}
                      onCheckedChange={() => handleAddonToggle("network-optimization")}
                    />
                    <div>
                      <Label htmlFor="network-optimization" className="font-medium">
                        Network Optimization & Speed Test
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Fine-tune your network for optimal performance (additional fee)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="tutorial"
                      checked={addons.includes("tutorial")}
                      onCheckedChange={() => handleAddonToggle("tutorial")}
                    />
                    <div>
                      <Label htmlFor="tutorial" className="font-medium">
                        Customer Tutorial / Walkthrough
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Extended training on using your system (additional fee)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="wall-mount"
                      checked={addons.includes("wall-mount")}
                      onCheckedChange={() => handleAddonToggle("wall-mount")}
                    />
                    <div>
                      <Label htmlFor="wall-mount" className="font-medium">
                        Supply & Install Wall Mount for TV
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Wall mounting service for your TV (additional fee)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Problem Description */}
          {serviceType && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Problem Description</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="description" className="mb-2 block">
                      {serviceType.includes("troubleshooting")
                        ? "Describe the issues you're experiencing"
                        : "Additional details about your installation needs"}
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide any relevant details..."
                      className="min-h-[120px]"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  {serviceType.includes("troubleshooting") && (
                    <div>
                      <Label className="mb-2 block">Upload Photos (Optional)</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload images showing the issue (e.g., error messages, equipment setup)
                        </p>
                        <Button variant="outline" size="sm">
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contact Information */}
          {serviceType && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="mb-2 block">
                      Service Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="Enter your full address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Service Summary</h2>
                {!serviceType ? (
                  <p className="text-muted-foreground italic">Please select a service type to continue</p>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-muted-foreground">Selected Service:</h3>
                      <p className="font-medium">
                        {serviceType === "new-dstv"
                          ? "New DStv Installation"
                          : serviceType === "dstv-troubleshooting"
                            ? "DStv Troubleshooting / Repair"
                            : serviceType === "dstv-relocation"
                              ? "DStv Relocation"
                              : serviceType === "new-wifi"
                                ? "New WiFi Router Installation"
                                : serviceType === "wifi-troubleshooting"
                                  ? "WiFi Network Troubleshooting / Extension"
                                  : "Data Cabling / Network Points Installation"}
                      </p>
                    </div>

                    {showDstvEquipment && decoderModel && (
                      <div>
                        <h3 className="font-medium text-muted-foreground">Equipment:</h3>
                        <ul className="list-disc list-inside">
                          {decoderModel && (
                            <li>
                              {decoderModel === "explora-3b"
                                ? "Explora 3B"
                                : decoderModel === "explora-2a"
                                  ? "Explora 2A"
                                  : "HD Decoder 5S"}
                            </li>
                          )}
                          {dishKit && (
                            <li>{dishKit === "standard-90cm" ? "Standard 90cm Dish" : "Compact 60cm Dish"}</li>
                          )}
                          {lnbType && (
                            <li>
                              {lnbType === "single-lnb"
                                ? "Single LNB"
                                : lnbType === "twin-lnb"
                                  ? "Twin LNB"
                                  : "Smart LNB"}
                            </li>
                          )}
                          {cableLength && <li>Coaxial Cable: {cableLength} meters</li>}
                        </ul>
                      </div>
                    )}

                    {showWifiEquipment && routerModel && (
                      <div>
                        <h3 className="font-medium text-muted-foreground">Equipment:</h3>
                        <ul className="list-disc list-inside">
                          {routerModel && (
                            <li>
                              {routerModel === "tp-link-archer-c6"
                                ? "TP-Link Archer C6"
                                : routerModel === "huawei-ax3"
                                  ? "Huawei AX3"
                                  : "D-Link DIR-842"}
                            </li>
                          )}
                          {extenderModel && extenderModel !== "none" && (
                            <li>
                              {extenderModel === "tp-link-deco-m4"
                                ? "TP-Link Deco M4 (Mesh, 2-pack)"
                                : extenderModel === "tenda-nova-mw6"
                                  ? "Tenda Nova MW6 (Mesh, 3-pack)"
                                  : "TP-Link RE450 (Single Extender)"}
                            </li>
                          )}
                          {cableLength && <li>Ethernet Cable: {cableLength} meters</li>}
                        </ul>
                      </div>
                    )}

                    {addons.length > 0 && (
                      <div>
                        <h3 className="font-medium text-muted-foreground">Add-ons:</h3>
                        <ul className="list\

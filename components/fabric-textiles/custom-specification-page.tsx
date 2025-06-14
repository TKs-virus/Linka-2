"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, HelpCircle, Save, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const garmentTypes = [
  { value: "shirt", label: "Shirt", measurements: ["chest", "waist", "sleeves", "shoulders"] },
  { value: "dress", label: "Dress", measurements: ["bust", "waist", "hips", "length"] },
  { value: "trousers", label: "Trousers", measurements: ["waist", "hips", "inseam", "outseam"] },
  { value: "skirt", label: "Skirt", measurements: ["waist", "hips", "length"] },
  { value: "suit-jacket", label: "Suit Jacket", measurements: ["chest", "waist", "sleeves", "shoulders"] },
  { value: "fabric-only", label: "Fabric Only", measurements: [] },
]

const materials = [
  { value: "cotton", label: "Cotton", description: "Breathable and comfortable" },
  { value: "linen", label: "Linen", description: "Lightweight and airy" },
  { value: "wool", label: "Wool", description: "Warm and durable" },
  { value: "silk", label: "Silk", description: "Luxurious and smooth" },
  { value: "polyester", label: "Polyester", description: "Wrinkle-resistant" },
  { value: "blend", label: "Blends", description: "Best of multiple materials" },
]

const occasions = ["Casual", "Formal", "Business", "Wedding", "Party", "Sportswear", "Everyday"]

const colors = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#800000",
  "#008000",
  "#000080",
  "#808000",
  "#800080",
  "#008080",
  "#C0C0C0",
  "#808080",
  "#FFA500",
  "#FFC0CB",
]

export default function CustomSpecificationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    garmentType: "",
    measurements: {},
    material: "",
    colors: [],
    occasion: [],
    styleDetails: {},
    additionalNotes: "",
    referenceImages: [],
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const selectedGarment = garmentTypes.find((g) => g.value === formData.garmentType)

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Navigate to review page
      router.push("/fabric-textiles/review-quote")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleColorSelect = (color: string) => {
    const newColors = formData.colors.includes(color)
      ? formData.colors.filter((c) => c !== color)
      : [...formData.colors, color]
    setFormData({ ...formData, colors: newColors })
  }

  const handleOccasionSelect = (occasion: string) => {
    const newOccasions = formData.occasion.includes(occasion)
      ? formData.occasion.filter((o) => o !== occasion)
      : [...formData.occasion, occasion]
    setFormData({ ...formData, occasion: newOccasions })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/fabric-textiles" className="hover:text-gray-900">
              Textile & Fabrics
            </Link>
            <span>/</span>
            <span className="text-gray-900">Start Custom Order</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom Order Specification</h1>
          <p className="text-gray-600">Tell us about your vision and we'll bring it to life</p>
        </div>

        {/* Progress Indicator */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="mb-4" />
            <div className="flex justify-between text-xs text-gray-600">
              <span className={currentStep >= 1 ? "text-purple-600 font-medium" : ""}>Measurements</span>
              <span className={currentStep >= 2 ? "text-purple-600 font-medium" : ""}>Style & Fabric</span>
              <span className={currentStep >= 3 ? "text-purple-600 font-medium" : ""}>Review</span>
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Measurements */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Garment Type & Measurements
                <HelpCircle className="h-5 w-5 text-gray-400" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Select Garment Type</Label>
                <RadioGroup
                  value={formData.garmentType}
                  onValueChange={(value) => setFormData({ ...formData, garmentType: value })}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {garmentTypes.map((type) => (
                    <div
                      key={type.value}
                      className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50"
                    >
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="cursor-pointer">
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {selectedGarment && selectedGarment.measurements.length > 0 && (
                <div>
                  <Label className="text-base font-medium mb-3 block">Measurements (cm)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedGarment.measurements.map((measurement) => (
                      <div key={measurement}>
                        <Label htmlFor={measurement} className="capitalize flex items-center gap-2">
                          {measurement}
                          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                        </Label>
                        <Input
                          id={measurement}
                          type="number"
                          placeholder="Enter measurement"
                          value={formData.measurements[measurement] || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              measurements: { ...formData.measurements, [measurement]: e.target.value },
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Need help with measurements?</strong> Click the help icons for detailed measurement guides
                      with diagrams.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 2: Style & Fabric */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Style & Fabric Selection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Material</Label>
                <Select
                  value={formData.material}
                  onValueChange={(value) => setFormData({ ...formData, material: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((material) => (
                      <SelectItem key={material.value} value={material.value}>
                        <div>
                          <div className="font-medium">{material.label}</div>
                          <div className="text-sm text-gray-600">{material.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Colors (Select up to 3)</Label>
                <div className="grid grid-cols-6 md:grid-cols-9 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        formData.colors.includes(color) ? "border-purple-600 ring-2 ring-purple-200" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  {formData.colors.map((color) => (
                    <Badge key={color} variant="secondary" className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Occasion (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {occasions.map((occasion) => (
                    <div key={occasion} className="flex items-center space-x-2">
                      <Checkbox
                        id={occasion}
                        checked={formData.occasion.includes(occasion)}
                        onCheckedChange={() => handleOccasionSelect(occasion)}
                      />
                      <Label htmlFor={occasion} className="cursor-pointer">
                        {occasion}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-base font-medium mb-3 block">
                  Additional Notes/Requests
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about any specific details, preferences, or special requirements..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  rows={4}
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Reference Images (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Review */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Review Your Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Garment Details</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Type:</strong> {garmentTypes.find((g) => g.value === formData.garmentType)?.label}
                    </div>
                    <div>
                      <strong>Material:</strong> {materials.find((m) => m.value === formData.material)?.label}
                    </div>
                    <div>
                      <strong>Occasions:</strong> {formData.occasion.join(", ")}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Measurements</h3>
                  <div className="space-y-2 text-sm">
                    {Object.entries(formData.measurements).map(([key, value]) => (
                      <div key={key}>
                        <strong className="capitalize">{key}:</strong> {value} cm
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Selected Colors</h3>
                <div className="flex gap-2">
                  {formData.colors.map((color) => (
                    <div key={color} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }} />
                      <span className="text-sm">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {formData.additionalNotes && (
                <div>
                  <h3 className="font-semibold mb-2">Additional Notes</h3>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{formData.additionalNotes}</p>
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                <p className="text-sm text-blue-800">
                  You will receive a custom quote via email within 2-3 business days. Our design team will review your
                  specifications and provide detailed pricing and timeline information.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <div>
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? "Submit Quote Request" : "Next"}
              {currentStep < totalSteps && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

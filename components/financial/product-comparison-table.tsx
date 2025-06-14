import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Product {
  name: string
  href: string
  features: string[]
  [key: string]: any
}

interface ProductComparisonTableProps {
  products: Product[]
  columns: string[]
  columnLabels: {
    [key: string]: string
  }
}

export default function ProductComparisonTable({ products, columns, columnLabels }: ProductComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column}>{columnLabels[column]}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name}>
              {columns.map((column) => (
                <TableCell key={`${product.name}-${column}`}>
                  {column === "name" ? (
                    <span className="font-medium">{product[column]}</span>
                  ) : column === "features" ? (
                    <ul className="list-disc list-inside">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    product[column]
                  )}
                </TableCell>
              ))}
              <TableCell>
                <div className="flex flex-col space-y-2">
                  <Button asChild size="sm">
                    <Link href={product.href}>Learn More</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`${product.href}/apply`}>Apply Now</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

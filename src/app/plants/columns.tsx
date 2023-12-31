import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { EditableTextCell } from '@/components/common/data-table/cells/editable-cell'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
    HighlightableCell,
    SortToggleHeader,
} from '@/components/common/data-table'
import { convertCmToFeet } from '@/lib/utils'

// Define the type for your data
export type Plant = {
    id: string
    plantName: string
    scientificName: string
    family: string
    wateringFrequency: string
    lightRequirement: string
    temperatureRange: string
    soilType: string
    fertilizerFrequency: string
    bloomingSeason: string
    height: number
}

export const columns: ColumnDef<unknown>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'actions',
        header: () => <div className="sr-only">Actions</div>,
        cell: ({ row }) => {
            const plant = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(plant.plantName)
                            }
                        >
                            Copy plant name
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'plantName',
        header: ({ column }) => (
            <SortToggleHeader text="Plant Name" column={column} />
        ),
        cell: EditableTextCell,
    },
    {
        accessorKey: 'scientificName',
        header: ({ column }) => (
            <SortToggleHeader text="Scientific Name" column={column} />
        ),
        // cell: HighlightableCell,
        cell: EditableTextCell,
    },
    {
        accessorKey: 'family',
        header: ({ column }) => (
            <SortToggleHeader text="Family" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'wateringFrequency',
        header: ({ column }) => (
            <SortToggleHeader text="Watering Frequency" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'lightRequirement',
        header: ({ column }) => (
            <SortToggleHeader text="Light Requirement" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'temperatureRange',
        header: ({ column }) => (
            <SortToggleHeader text="Temperature Range" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'soilType',
        header: ({ column }) => (
            <SortToggleHeader text="Soil Type" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'fertilizerFrequency',
        header: ({ column }) => (
            <SortToggleHeader text="Fertilizer Frequency" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'bloomingSeason',
        header: ({ column }) => (
            <SortToggleHeader text="Blooming Season" column={column} />
        ),
        cell: HighlightableCell,
    },
    {
        accessorKey: 'height',
        header: ({ column }) => (
            <SortToggleHeader text="Height (cm" column={column} />
        ),
        cell: ({ row }) => {
            const heightInCm: number = row.getValue('height')
            const height = convertCmToFeet(heightInCm)
            return <div className="text-left font-medium">{height}</div>
        },
    },
]

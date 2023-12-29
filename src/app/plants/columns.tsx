import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MoreHorizontal,
  ArrowDownUpIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DataTableColumnHeader } from "@/components/common/data-table-column-header";
import { convertCmToFeet } from "@/lib/utils";

// Define the type for your data
export type Plant = {
  plantName: string;
  scientificName: string;
  family: string;
  wateringFrequency: string;
  lightRequirement: string;
  temperatureRange: string;
  soilType: string;
  fertilizerFrequency: string;
  bloomingSeason: string;
  height: number;
};

// Define the columns for the table
export const columns: ColumnDef<Plant>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
    id: "actions",
    header: () => <div className="sr-only">Actions</div>,
    cell: ({ row }) => {
      const plant = row.original;

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
              onClick={() => navigator.clipboard.writeText(plant.plantName)}
            >
              Copy plant name
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "plantName",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting()}>
          Plant Name
          {column.getIsSorted() === "desc" ? (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDownUpIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("plantName")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "scientificName",
    header: ({ column }) => (
      <DataTableColumnHeader title="Scientific Name" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("scientificName")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "family",
    header: ({ column }) => (
      <DataTableColumnHeader title="Family" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("family")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "wateringFrequency",
    header: ({ column }) => (
      <DataTableColumnHeader title="Watering Frequency" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("wateringFrequency")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "lightRequirement",
    header: ({ column }) => (
      <DataTableColumnHeader title="Light Requirement" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("lightRequirement")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "temperatureRange",
    header: ({ column }) => (
      <DataTableColumnHeader title="Temperature Range" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("temperatureRange")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "soilType",
    header: ({ column }) => (
      <DataTableColumnHeader title="Soil Type" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("soilType")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "fertilizerFrequency",
    header: ({ column }) => (
      <DataTableColumnHeader title="Fertilizer Frequency" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("fertilizerFrequency")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "bloomingSeason",
    header: ({ column }) => (
      <DataTableColumnHeader title="Blooming Season" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("bloomingSeason")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "height",
    header: ({ column }) => (
      <DataTableColumnHeader title="Height (cm" column={column} />
    ),
    cell: ({ row }) => {
      const heightInCm: number = row.getValue("height");
      const height = convertCmToFeet(heightInCm);
      return <div className="text-left font-medium">{height}</div>;
    },
    enableSorting: true,
  },
];

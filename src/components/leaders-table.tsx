"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, CheckIcon, MoreHorizontal, XIcon } from "lucide-react";
import * as React from "react";

import { updateAvailability } from "@/app/actions/leaders";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MongooseLeader } from "@/lib/models/leadersModel";
import { useRouter } from "next/navigation";

export function LeadersTable({ data }: { data: MongooseLeader[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const router = useRouter();

  const columns: ColumnDef<MongooseLeader>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "is_available",
      header: "Available",
      cell: ({ row }) => (
        <div
          className={`${
            row.getValue("is_available") ? "text-green-800" : "text-red-600"
          }`}
        >
          {row.getValue("is_available") ? <CheckIcon /> : <XIcon />}
        </div>
      ),
    },
    {
      accessorKey: "day",
      header: "Day",
      cell: ({ row }) => <div>{row.getValue("day")}</div>,
      meta: { className: "hidden lg:table-cell" }, // Add meta for responsive class
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <div>{row.getValue("location")}</div>,
      meta: { className: "hidden lg:table-cell" }, // Add meta for responsive class
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const leader = row.original;

        async function handleAvailabilityClick(leaderId: number) {
          await updateAvailability(leaderId);
          router.refresh();
        }

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => router.push(`/admin/edit/${leader.id}`)}
              >
                Edit Leader
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {leader.is_available ? (
                <DropdownMenuItem
                  className="text-red-600"
                  onClick={() => handleAvailabilityClick(Number(leader.id))}
                >
                  Disable
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  className="text-green-800"
                  onClick={() => handleAvailabilityClick(Number(leader.id))}
                >
                  Enable
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full font-caption text-pcfcprimarydark border-pcfcprimarydark">
      <div className="flex items-center py-4 space-x-4">
        <Input
          placeholder="Search by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full text-white border-pcfcprimarydark"
        />
        <Button
          className="bg-pcfcprimarydark hover:bg-pcfcprimarydark"
          onClick={() => router.push("/admin/create")}
        >
          Add Leader
        </Button>
      </div>
      <div className="rounded-md border bg-pcfcwhite">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={header.column.columnDef.meta?.className}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cell.column.columnDef.meta?.className}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-start space-x-2 py-4">
        <div className="space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="text-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="text-white"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

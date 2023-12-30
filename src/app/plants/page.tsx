import { Suspense } from "react";
import { useAtomValue } from "jotai";

import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";
import { plantsAtom } from "./plants-molecule";


export default function PlantsPage() {
  const plants = useAtomValue(plantsAtom);

  return (
    <div className="container mx-auto py-10">
        <Suspense fallback={<div>Loading Plants...</div>}>
          <DataTable columns={columns} data={plants} />
        </Suspense>
    </div>
  );
}
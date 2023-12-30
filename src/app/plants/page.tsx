import { Plant, columns } from "./columns";
import { DataTable } from "@/components/common/data-table/data-table";
import { PLANTS_URL } from "@/constants";
import { useEffect, useState } from "react";

async function getPlantsData() {
  const res = await fetch(PLANTS_URL);
  const data = await res.json();
  return data;
}

export default function PlantsPage() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    getPlantsData().then((data) => setPlants(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
        <DataTable columns={columns} data={plants} />
    </div>
  );
}
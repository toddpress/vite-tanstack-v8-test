import { Suspense } from 'react'
import { useAtomValue } from 'jotai'

import { DataTable } from '@/components/common/data-table/data-table'

import { columns } from './columns'
import { plantsAtom } from './plants-molecule'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

export default function PlantsPage() {
    const plants = useAtomValue(plantsAtom)

    const methods = useForm({ defaultValues: { plants } })
    const { fields } = useFieldArray({
        control: methods.control,
        name: 'plants',
    })
    console.log(fields)
    return (
        <div className="container mx-auto py-10">
            <FormProvider {...methods}>
                <Suspense fallback={<div>Loading Plants...</div>}>
                    <DataTable columns={columns} data={fields} />
                </Suspense>
            </FormProvider>
            <DevTool control={methods.control} />
        </div>
    )
}

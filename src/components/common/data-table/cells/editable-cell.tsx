import { useFormContext } from 'react-hook-form'
import { cn } from '@/lib/utils'

// TODO - dynamically render the input type based on a prop or their column types
// TODO - make cell contents highlightable if they're not editable
export function EditableTextCell(props: any) {
    const { cell, getValue } = props
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext()
    const fieldName = cell.id
    const errorMessage = errors[fieldName]?.message
    const inputProps = register(fieldName, {
        required: 'This is a required field',
    })
    return (
        <>
            <input
                {...inputProps}
                defaultValue={getValue()}
                className={cn('w-full', { 'border-red-500': errorMessage })}
                onBlur={(e) =>
                    setValue(fieldName, e.target.value, {
                        shouldValidate: true,
                    })
                }
            />
            {errorMessage && (
                <div className="editableTextCell_errorMessage">
                    {/* @ts-expect-error - errorMessage can technically be unrenderable */}
                    <small style={{ color: 'red' }}>{errorMessage}</small>
                </div>
            )}
        </>
    )
}

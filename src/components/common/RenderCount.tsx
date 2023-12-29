import { useEffect, useRef } from 'react'

type RenderCounterProps = {
    resetOn?: number
}

export function RenderCounter(props: RenderCounterProps) {
    const { resetOn } = props
    const count = useRef(0)
    useEffect(() => {
        if (resetOn && count.current >= resetOn) {
            count.current = 0
        }
        count.current++
    })

    return (
        <div>
            <output>Render count: {count.current}</output>
        </div>
    )
}

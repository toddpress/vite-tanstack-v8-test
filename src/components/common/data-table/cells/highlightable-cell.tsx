const highlightText = (text: string, highlight: string) => {
    const parts = text
        .split(new RegExp(`(${highlight})`, 'gi'))
        .map((part) => part.toLowerCase())

    const highlights = parts.map((part, i) => {
        return part === highlight.toLowerCase() ? (
            <mark key={i} className="highlight">
                {part}
            </mark>
        ) : (
            part
        )
    })

    return <>{highlights}</>
}

export const HighlightableCell = ({ table, getValue }) => {
    const highlight: string  = table.getState().globalFilter ?? ''
    const value: string = getValue()
    return highlightText(value, highlight)
}
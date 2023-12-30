import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowDownUpIcon, ArrowUpIcon } from "lucide-react";

interface SortToggleHeaderProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    column: any;
    text: string;
}

export function SortToggleHeader(props: SortToggleHeaderProps) {
    const { column, text } = props;
    const sortIcon = column.getIsSorted() === 'desc' ?
        <ArrowDownIcon className="ml-2 h-4 w-4" />
        : column.getIsSorted() === 'asc' ?
            <ArrowUpIcon className="ml-2 h-4 w-4" />
            : <ArrowDownUpIcon className="ml-2 h-4 w-4" />;
    return (
        <Button variant="ghost" onClick={() => column.toggleSorting()}>
            {text}{' '}{sortIcon}
        </Button>
    );
}

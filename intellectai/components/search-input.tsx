"use client"
import qs from "query-string"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { useDebounce } from "@/hooks/use-debounce"
export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const catagoryId = searchParams.get("categoryId")
    const name = searchParams.get("name")

    const [value, setValue ] = useState(name || "");
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value);
    }

    useEffect(() => {
        const query = {
            name: debouncedValue,
            categoryId: catagoryId,
        };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        },{skipEmptyString: true, skipNull: true} );

        router.push(url)
    }, [debouncedValue, router, catagoryId])
    return(
        <div className="relative">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
            <Input
                onChange={onChange}
                value={value}
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
        </div>
    )
}
"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"
import { TiDelete } from "react-icons/ti"

export default function DeleteBtn({ id }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: 'DELETE'
        });
        const json = await res.json();
        if (json.error) {
            console.log(json.error);
            setIsLoading(false);
        }
        if (!json.error) {
            router.refresh();
            router.push('/tickets');
        }
    }

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className="btn-primary"
        >
            {isLoading ? <>
                <TiDelete />
                Deleting...
            </> : <>
                <TiDelete />
                Delete Ticket
            </>}
        </button>
    )
}
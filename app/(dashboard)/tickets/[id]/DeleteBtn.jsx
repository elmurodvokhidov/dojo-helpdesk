"use client"

import { useState } from "react"
import { TiDelete } from "react-icons/ti"

export default function DeleteBtn({ id }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        console.log(id);
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
"use client"

import { TiDelete } from "react-icons/ti"
import { useTransition } from "react";
import { deleteTicket } from "../actions";

export default function DeleteBtn({ id }) {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            onClick={() => startTransition(() => deleteTicket(id))}
            disabled={isPending}
            className="btn-primary"
        >
            {isPending ? <>
                <TiDelete />
                Deleting...
            </> : <>
                <TiDelete />
                Delete Ticket
            </>}
        </button>
    )
}
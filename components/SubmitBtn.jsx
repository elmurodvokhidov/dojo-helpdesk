"use client"

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button className="btn-primary" disabled={pending}>
            {pending && <span>Submitting...</span>}
            {!pending && <span>Submit</span>}
        </button>
    )
}
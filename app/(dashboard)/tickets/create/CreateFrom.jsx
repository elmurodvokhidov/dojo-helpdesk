"use client"

import { useState } from "react"
import { addTicket } from "../actions";

export default function CreateFrom() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <form action={addTicket} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    name="title"
                    required
                    type="text"
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    name="body"
                    required
                />
            </label>
            <label>
                <span>Priority:</span>
                <select name="priority">
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}
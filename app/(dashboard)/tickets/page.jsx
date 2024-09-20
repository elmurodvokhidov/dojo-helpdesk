import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export const metadata = {
    title: "Dojo Helpdesk | Tickets",
}

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>

            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
}
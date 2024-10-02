import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    const ticket = await req.json();
    const supabase = createRouteHandlerClient();
    const { data: { session } } = await supabase.auth.getSession();
    const { data, error } = await supabase.from('tickets')
        .insert({
            ...ticket,
            user_email: session.user.email
        })
        .select()
        .single()

    return NextResponse.json({ data, error });
}
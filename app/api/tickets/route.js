import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function POST(request) {
    const ticket = await request.json()
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    const { data, error } = await supabase.from('tickets')
        .insert({
            ...ticket,
            user_email: session.user.email,
        })
        .select()
        .single()

    return NextResponse.json({ data, error })
}
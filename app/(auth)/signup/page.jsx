"use client"

import AuthForm from "../AuthForm";

export default function SignUp() {

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <main>
            <h2 className="text-center">Sign up</h2>
            <AuthForm handleSubmit={handleSubmit} />
        </main>
    )
}
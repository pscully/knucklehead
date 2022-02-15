import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <GuestLayout>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <a href="/dashboard">Dashboard</a>
            </GuestLayout>
        </>
    )
}

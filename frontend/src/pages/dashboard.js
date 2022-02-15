import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import NewGameButton from '@/components/NewGameButton'

const Dashboard = () => {
    return (
        <AppLayout header={<NewGameButton />}>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard

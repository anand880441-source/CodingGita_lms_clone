import React from 'react'
import Navbar from '../components/Navbar'

export const Events = () => {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pt-7">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">
                        Events
                    </h1>
                    <a className="text-sm text-neutral-300 hover:underline" href="/student" data-discover="true">
                        Back to dashboard
                    </a>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900 mb-6">
                    <div className="p-4 border-b border-neutral-800 ">
                        <div className="text-white font-semibold">
                            Ongoing
                        </div>
                    </div>
                    <div className="p-4 ">
                        <div className="text-neutral-400 text-sm">
                            No ongoing events.
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900 mb-6">
                    <div className="p-4 border-b border-neutral-800 ">
                        <div className="text-white font-semibold">
                            Upcoming
                        </div>
                    </div>
                    <div className="p-4 ">
                        <div className="text-neutral-400 text-sm">
                            No upcoming events.
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900 ">
                    <div className="p-4 border-b border-neutral-800 ">
                        <div className="text-white font-semibold">
                            Past
                        </div>
                    </div>
                    <div className="p-4 ">
                        <div className="text-neutral-400 text-sm">
                            No past events.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

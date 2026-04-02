import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const ApplyLeave = () => {
    const [formData, setFormData] = useState({
        category: '',
        startingDate: '',
        endingDate: '',
        leaveTime: '',
        returnTime: '',
        remark: ''
    });

    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect(() => {
        // Load leave requests from localStorage
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setLeaveRequests(user.leaveRequests || []);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create new leave request
        const newRequest = {
            id: Date.now().toString(),
            ...formData,
            status: 'Pending Review',
            submittedDate: new Date().toISOString().split('T')[0],
        };

        // Update leave requests
        const updatedRequests = [...leaveRequests, newRequest];
        setLeaveRequests(updatedRequests);

        // Update user data in localStorage
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            user.leaveRequests = updatedRequests;
            localStorage.setItem("user", JSON.stringify(user));
        }

        // Reset form
        setFormData({
            category: '',
            startingDate: '',
            endingDate: '',
            leaveTime: '',
            returnTime: '',
            remark: ''
        });

        alert('Leave application submitted successfully!');
    };

    const isFormValid = formData.category && formData.startingDate && formData.endingDate;

    // Calculate stats
    const totalApplications = leaveRequests.length;
    const pendingReview = leaveRequests.filter(req => req.status === 'Pending Review').length;
    const approved = leaveRequests.filter(req => req.status === 'Approved').length;
    const rejected = leaveRequests.filter(req => req.status === 'Rejected').length;

    return (
        <>
            <Navbar />
            <div className="px-6 pt-7 pb-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-1 text-white">Apply for Leave</h1>
                    <p className="text-neutral-400">Submit your leave application and track your requests</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Total Applications', count: totalApplications, color: 'text-neutral-100' },
                        { label: 'Pending Review', count: pendingReview, color: 'text-amber-300' },
                        { label: 'Approved', count: approved, color: 'text-emerald-300' },
                        { label: 'Rejected', count: rejected, color: 'text-red-300' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
                            <div className="text-sm text-neutral-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white">New Leave Application</h2>
                                <p className="text-sm text-neutral-400">Fill out the form to submit your leave request</p>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-neutral-200 mb-2">Leave Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                                >
                                    <option value="">Select category</option>
                                    <option value="Personal">Personal reasons</option>
                                    <option value="Medical">Sick leave / medical reasons</option>
                                    <option value="Placement">Placement drives</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-200 mb-2">From Date</label>
                                    <input
                                        className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100"
                                        type="date" name="startingDate" onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-200 mb-2">To Date</label>
                                    <input
                                        className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100"
                                        type="date" name="endingDate" onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-200 mb-2">Remarks</label>
                                <textarea
                                    name="remark"
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500" rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>

                    {/* History Section */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-6 text-white">My Leave Requests</h2>
                        {leaveRequests.length === 0 ? (
                            <div className="text-center py-12 text-neutral-500">
                                No leave requests yet
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {leaveRequests.map((request) => (
                                    <div key={request.id} className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-white font-medium">{request.category}</h3>
                                                <p className="text-sm text-neutral-400">
                                                    {request.startingDate} to {request.endingDate}
                                                </p>
                                            </div>
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                request.status === 'Approved' ? 'bg-green-900/50 text-green-300 border border-green-700' :
                                                request.status === 'Rejected' ? 'bg-red-900/50 text-red-300 border border-red-700' :
                                                'bg-yellow-900/50 text-yellow-300 border border-yellow-700'
                                            }`}>
                                                {request.status}
                                            </span>
                                        </div>
                                        {request.remark && (
                                            <p className="text-sm text-neutral-300 mb-2">{request.remark}</p>
                                        )}
                                        <div className="text-xs text-neutral-500">
                                            Submitted on {request.submittedDate}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyLeave;

import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const data = localStorage.getItem("user");
    const user = data ? JSON.parse(data) : null;

    if (!user) {
        return (
            <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white">
                <p className="text-xl mb-4 text-neutral-400">Please login to view your profile.</p>
                <button
                    onClick={() => navigate('/login')}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-8 space-y-6">
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h1 className="text-2xl font-semibold text-zinc-100">Profile</h1>
                        <p className="text-sm text-zinc-400">View and update your personal information</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm rounded-md bg-blue-600 hover:bg-blue-500 text-white">Reset Password</button>
                        <button className="px-3 py-1.5 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-white">Edit</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 flex flex-col items-center gap-3">
                        <img 
                            alt="Student avatar" 
                            className="w-28 h-28 rounded-full object-cover border border-zinc-800" 
                            src={user.avatar || "https://res.cloudinary.com/dpvmzqfvv/image/upload/v1770271264/AnandIMG_-_Copy_mou9hb.jpg"} 
                        />
                        <div className="text-center space-y-1">
                            <h2 className="text-lg font-medium text-zinc-100">{user.name}</h2>
                            <p className="text-sm text-zinc-400">Student</p>
                            <p className="text-xs text-zinc-500">{user.university} • {user.uid}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-white">Edit Profile</button>
                            <button className="px-3 py-1.5 text-sm rounded-md bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-60 disabled:cursor-not-allowed">Reset Password</button>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Enrollment Number</span>
                            <span className="block text-sm text-zinc-500">{user.uid}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Course</span>
                            <span className="block text-sm text-zinc-500">Computer Applications</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Branch</span>
                            <span className="block text-sm text-zinc-500">CSE/IT Specialization</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Semester</span>
                            <span className="block text-sm text-zinc-500">Active Semester</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Gender</span>
                            <span className="block text-sm text-zinc-500">Male</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Alternate Email</span>
                            <a href={`mailto:anand.suthar.cg@gmail.com`} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="anand.suthar.cg@gmail.com">anand.suthar.cg@gmail.com</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Alternate Phone</span>
                            <span className="block text-sm text-zinc-500">{user.mobile}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Guardian</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-4">
                    <h2 className="text-lg font-medium text-zinc-100">Contact &amp; Links</h2>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Mobile</span>
                            <span className="block text-sm text-zinc-100 truncate" title={user.mobile}>{user.mobile}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Parent Mobile</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">University Email</span>
                            <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.email}>{user.email}</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Current Email</span>
                            <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.email}>{user.email}</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Address</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Portfolio</span>
                            <a href="https://anandsuthar-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="https://anandsuthar-portfolio.netlify.app">https://anandsuthar-portfolio.netlify.app</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Resume</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Github</span>
                            <a href="https://github.com/anand880441-source" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="https://github.com/anand880441-source">https://github.com/anand880441-source</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/anand-suthar-653119396/" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="https://www.linkedin.com/in/anand-suthar-653119396/">https://www.linkedin.com/in/anand-suthar-653119396/</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Twitter</span>
                            <a href="https://x.com/ACodinggit60327" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="https://x.com/ACodinggit60327">https://x.com/ACodinggit60327</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">YouTube</span>
                            <a href="https://www.youtube.com/@spino_cg" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="https://www.youtube.com/@spino_cg">https://www.youtube.com/@spino_cg</a>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <h2 className="text-lg font-medium text-zinc-100 mb-3">Academics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">University</span>
                            <span className="block text-sm text-zinc-100 truncate" title={user.university}>{user.university}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">University UID</span>
                            <span className="block text-sm text-zinc-100 truncate" title={user.uid}>{user.uid}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Date of Birth</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Admission Year</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Current Year</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Section</span>
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Subjects</span>
                            <span className="block text-sm text-zinc-100 truncate" title={user.subjects?.join(', ')}>{user.subjects?.join(', ')}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Mentors</span>
                            <span className="block text-sm text-zinc-100 truncate" title={user.mentors?.[0]?.name}>{user.mentors?.[0]?.name || "N/A"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

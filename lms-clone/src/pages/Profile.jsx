import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const data = localStorage.getItem("user");
    const [user, setUser] = useState(data ? JSON.parse(data) : null);
    const [editedUser, setEditedUser] = useState(user);
    const [showModal, setShowModal] = useState(false);

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
                        <button onClick={() => {
                            setEditedUser({...user});
                            setShowModal(true);
                        }} className="px-3 py-1.5 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-white">Edit</button>
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
                            <span className="block text-sm text-zinc-500">—</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Branch</span>
                            <span className="block text-sm text-zinc-500">—</span>
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
                            <a href={`mailto:anand.suthar.cg@gmail.com`} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title="anand.suthar.cg@gmail.com">{user.email}</a>
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
                            <span className="block text-sm text-zinc-500">{user.parentMobile || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">University Email</span>
                            <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.uni_email}>{user.uni_email}</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Current Email</span>
                            <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.email}>{user.email}</a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Address</span>
                            <span className="block text-sm text-zinc-500">{user.address || "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Portfolio</span>
                            <a href={user.portfolio} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.portfolio}>
                                {user.portfolio}
                            </a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Resume</span>
                            {user.resume ? (
                                <a href={user.resume} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.resume}>
                                    {user.resume}
                                </a>
                            ) : (
                                <span className="block text-sm text-zinc-500">—</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Github</span>
                            <a href={user.github} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.github}>
                                {user.github}
                            </a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">LinkedIn</span>
                            <a href={user.linkedIn} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.linkedIn}>
                                {user.linkedIn}
                            </a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">Twitter</span>
                            <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.twitter}>
                                {user.twitter}
                            </a>
                        </div>
                        <div className="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
                            <span className="text-xs uppercase tracking-wide text-zinc-400">YouTube</span>
                            <a href={user.youtube} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline truncate" title={user.youtube}>
                                {user.youtube}
                            </a>
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
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative z-10 w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                            <h3 className="text-zinc-100 font-medium">Edit Profile</h3>
                            <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-zinc-200">✕</button>
                        </div>
                        <div className="max-h-[70vh] overflow-y-auto hide-scrollbar p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Avatar URL</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://..."
                                    value={editedUser.avatar || ""}
                                    onChange={(e) => setEditedUser({...editedUser, avatar: e.target.value})}
                                    name="imageUrl"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Address</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="Your address"
                                    value={editedUser.address || ""}
                                    onChange={(e) => setEditedUser({...editedUser, address: e.target.value})}
                                    name="address"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Current Email</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="you@example.com"
                                    value={editedUser.email || ""}
                                    onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                                    name="currentEmail"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Parent Mobile (Optional)</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="10-digit parent mobile"
                                    inputMode="numeric"
                                    value={editedUser.parentMobile || ""}
                                    onChange={(e) => setEditedUser({...editedUser, parentMobile: e.target.value})}
                                    name="parentMobile"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Portfolio Link</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://..."
                                    value={editedUser.portfolio || ""}
                                    onChange={(e) => setEditedUser({...editedUser, portfolio: e.target.value})}
                                    name="portfolioLink"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Resume Link</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://..."
                                    value={editedUser.resume || ""}
                                    onChange={(e) => setEditedUser({...editedUser, resume: e.target.value})}
                                    name="resumeLink"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Github Link</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://github.com/..."
                                    value={editedUser.github || ""}
                                    onChange={(e) => setEditedUser({...editedUser, github: e.target.value})}
                                    name="githubLink"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">LinkedIn Link</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://linkedin.com/in/..."
                                    value={editedUser.linkedIn || ""}
                                    onChange={(e) => setEditedUser({...editedUser, linkedIn: e.target.value})}
                                    name="linkedinLink"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">Twitter Link</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://x.com/..."
                                    value={editedUser.twitter || ""}
                                    onChange={(e) => setEditedUser({...editedUser, twitter: e.target.value})}
                                    name="twitterLink"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-zinc-400 mb-1">YouTube Link</label>
                                <input
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100"
                                    placeholder="https://youtube.com/..."
                                    value={editedUser.youtube || ""}
                                    onChange={(e) => setEditedUser({...editedUser, youtube: e.target.value})}
                                    name="youtubeLink"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-zinc-800">
                            <button onClick={() => setShowModal(false)} className="px-3 py-1.5 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-white">Cancel</button>
                            <button
                                onClick={() => {
                                    localStorage.setItem("user", JSON.stringify(editedUser));
                                    setUser(editedUser);
                                    setShowModal(false);
                                }}
                                className="px-3 py-1.5 text-sm rounded-md bg-blue-600 hover:bg-blue-500 text-white"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;

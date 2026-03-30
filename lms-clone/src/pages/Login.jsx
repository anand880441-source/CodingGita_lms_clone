import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginDetails, isAuthenticated } from "../utils/auth"
import { useEffect } from "react"

function Login() {
    const roleArr = ["Student", "Mentor", "Admin"];
    const [activeRole, setActiveRole] = useState('Student');
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/student");
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMsg("");

        const user = loginDetails(uid, password);

        if (user) {
            navigate("/student");
        } else {
            setErrorMsg("Invalid credentials. Please try again.");
        }
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <form onSubmit={handleLogin} className="border rounded-2xl border-white/20 px-5 py-5 flex flex-col gap-5 w-120">
                <div>
                    <h1 className="font-semibold text-3xl">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 font-semibold text-sm mt-1">
                        Sign in to your account
                    </p>
                </div>
                {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg">
                        {errorMsg}
                    </div>
                )}
                <div>
                    <h3 className="text-start font-medium px-1 text-gray-200">Role</h3>
                    <div className="flex gap-3">
                        {
                            roleArr.map((role, index) => (
                                <div onClick={() => setActiveRole(role)} key={index} className={`${role === activeRole ? "bg-white text-black " : "border-white/20 hover:bg-white/5"} border rounded-md px-3 py-2 text-sm cursor-pointer duration-100`}>{role}</div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className="text-start font-semibold px-1 py-2 text-white/80"> {(activeRole === "Student") ? "University UID" : "Email"}</h3>
                    <div className="flex gap-3">
                        <input className="border text-white rounded-xl border-white/20 p-3 text-sm w-full" type="text"
                            placeholder={(activeRole === "Student") ? "Enter your University UID" : "name@example.com"}
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                            required />
                    </div>
                </div>
                <div>
                    <h3 className="text-start font-semibold px-1 py-2 text-white/80">Password</h3>
                    <div className="flex gap-3">
                        <input className="border text-white rounded-xl border-white/20 p-3 font-bold w-full" type="password" placeholder="⋅⋅⋅⋅⋅⋅⋅⋅"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full border bg-white text-black rounded-xl border-white/20 p-2 text-sm font-semibold cursor-pointer hover:bg-white/95 duration-100 text-center block">Submit in</button>
                </div>
                <div>
                    <p className="text-gray-400 font-semibold text-xs">
                        Use your role-based credentials. Contact admin if you need help.
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Login
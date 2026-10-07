import React, { useState } from "react";

function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;
async function handleLogin(e) {
    e.preventDefault();

    try {
        const response = await fetch(
                `${API_URL}/api/admin/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            // Save JWT token
            localStorage.setItem("adminToken", data.token);

            // Go to admin dashboard
            window.location.href = "/admin";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log("Login error:", error);

        alert("Unable to connect to server");

    }
}

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-logo">
                    <h1>GrowSkills</h1>
                    <p>Admin Portal</p>
                </div>


                <div className="login-heading">
                    <h2>Admin Login</h2>
                    <p>
                        Sign in to access your leads dashboard
                    </p>
                </div>


                <form onSubmit={handleLogin}>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>

                </form>


                <div className="login-footer">
                    <p>
                        GrowSkills Tech Pvt. Ltd.
                    </p>

                    <span>
                        Innovation | Technology | Growth
                    </span>
                </div>

            </div>

        </div>
    );
}

export default AdminLogin;
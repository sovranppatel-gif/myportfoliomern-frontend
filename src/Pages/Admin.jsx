import React, { useEffect, useState } from "react";

function Admin() {

    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {

        fetchLeads();

    }, []);


    async function fetchLeads() {

    try {

        setLoading(true);
        setError("");

        const token = localStorage.getItem("adminToken");

        if (!token) {
            window.location.href = "/admin/login";
            return;
        }

        const response = await fetch(
            `${API_URL}/api/contacts`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (response.status === 401) {

            localStorage.removeItem("adminToken");

            window.location.href = "/admin/login";

            return;
        }

        if (!response.ok) {
            throw new Error("Failed to fetch leads");
        }

        const data = await response.json();

        setLeads(data);

    } catch (error) {

        console.log("Error fetching leads:", error);

        setError("Unable to load leads");

    } finally {

        setLoading(false);

    }
}

function handleLogout() {

    localStorage.removeItem("adminToken");

    window.location.href = "/admin/login";
}


    return (
        <div className="lead-dashboard">

            {/* ================= HEADER ================= */}

            <header className="lead-header">

                <div>
                    <h1>GrowSkills</h1>
                    <p>Lead Dashboard</p>
                </div>

                <div className="total-leads">

                    <span>Total Leads</span>

                    <strong>
                        {leads.length}
                    </strong>

                </div>

                <button
            className="logout-button"
            onClick={handleLogout}
        >
            Logout
        </button>


            </header>


            {/* ================= LEADS ================= */}

            <main className="leads-section">

                <div className="section-heading">

                    <p>WEBSITE ENQUIRIES</p>

                    <h2>Leads</h2>

                </div>


                {/* LOADING */}

                {loading && (
                    <p>Loading leads...</p>
                )}


                {/* ERROR */}

                {error && (
                    <p>{error}</p>
                )}


                {/* TABLE */}

                {!loading && !error && (

                    <div className="leads-table-wrapper">

                        <table className="leads-table">

                            <thead>

                                <tr>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Subject</th>

                                    <th>Message</th>

                                </tr>

                            </thead>


                            <tbody>

                                {leads.length > 0 ? (

                                    leads.map((lead) => (

                                        <tr key={lead._id}>

                                            <td>
                                                {lead.name}
                                            </td>

                                            <td>
                                                {lead.email}
                                            </td>

                                            <td>
                                                {lead.subject}
                                            </td>

                                            <td>
                                                {lead.message}
                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan="4">
                                            No leads found.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </main>

        </div>
    );
}

export default Admin;
import React, { useEffect, useState } from "react";
import "./AppointmentButton.css";
import { FaCalendarCheck } from "react-icons/fa"; // ✅ Icon added

const scheduleData = {
    Monday: ["Gynecologist", "General Physician"],
    Tuesday: ["General Physician (MD)"],
    Wednesday: ["General Physician (MD)"],
    Thursday: ["Orthopedic Specialist", "Gynecologist"],
    Friday: ["Cardiologist (DM)", "General Physician (MD)"],
    Saturday: ["General Physician (MD)"],
    Sunday: ["General Physician", "Gynecologist"],
};
const AppointmentButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };
    const [availableDoctors, setAvailableDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

        const doctorsToday = scheduleData[today] || [];
        setAvailableDoctors(doctorsToday);
        setSelectedDoctor(doctorsToday[0] || "");
    }, []);

    return (
        <>
            <button className="appointment-button" onClick={handleToggleForm}>
                <FaCalendarCheck size={18} />
                Book Appointment
            </button>

            {showForm && (
                <div className="appointment-modal">
                    <div className="appointment-modal-content">
                        <span className="close-button" onClick={handleToggleForm}>
                            &times;
                        </span>
                        <form>
                            <div className="form-group">
                                <label>Select Available Doctor</label>
                                <select
                                    value={selectedDoctor}
                                    onChange={(e) => setSelectedDoctor(e.target.value)}
                                >
                                    {availableDoctors.map((doctor, idx) => (
                                        <option key={idx} value={doctor}>
                                            {doctor}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="time" />
                            </div>
                            <div className="form-group">
                                <label>Reason</label>
                                <textarea placeholder="Describe your concern"></textarea>
                            </div>
                            
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AppointmentButton;

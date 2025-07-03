import React, { useEffect, useState } from "react";
import "./AppointmentButton.css";
import { FaCalendarCheck } from "react-icons/fa";

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
    const [availableDoctors, setAvailableDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        setAppointmentDate(dateValue);

        if (dateValue) {
            const selectedDay = new Date(dateValue).toLocaleDateString("en-US", { weekday: "long" });
            const doctors = scheduleData[selectedDay] || [];
            setAvailableDoctors(doctors);
            setSelectedDoctor(doctors[0] || "");
        } else {
            setAvailableDoctors([]);
            setSelectedDoctor("");
        }
    };

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
                                <label>Date</label>
                                <input type="date" value={appointmentDate} onChange={handleDateChange} />
                            </div>

                            {availableDoctors.length > 0 ? (
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
                            ) : (
                                <div className="form-group">
                                    <p>No doctors available for the selected date.</p>
                                </div>
                            )}

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="tel" placeholder="Your Mobile Number" />
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

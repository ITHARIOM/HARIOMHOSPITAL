import React, { useState } from "react";
import "./AppointmentButton.css";
import { FaCalendarCheck } from "react-icons/fa"; // ✅ Icon added

const AppointmentButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
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
                        <h2>Book an Appointment</h2>
                        <form>
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

import React, { useState } from "react";
import "./Gallery.css";
import SectionHeader from "./component/SectionHeader";

const galleryItems = [
    { src: "src/assets/img/works/1.jpg", type: "web" },
    { src: "src/assets/img/works/2.jpg", type: "icon" },
    { src: "src/assets/img/works/3.jpg", type: "graphic" },
    { src: "src/assets/img/works/4.jpg", type: "web" },
    { src: "src/assets/img/works/5.jpg", type: "web" },
    { src: "src/assets/img/works/6.jpg", type: "icon" },
    { src: "src/assets/img/works/7.jpg", type: "web" },
    { src: "src/assets/img/works/8.jpg", type: "graphic" },
];

const Gallery = () => {
    const [active, setActive] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems =
        active === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.type === active);

    return (
        <>
            <SectionHeader
                title="Gallery"
                subtitle=""
            />

            <div className="container">
                <section id="projects">
                    <ul className="portfolio">
                        {filteredItems.map((item, index) => (
                            <li
                                key={index}
                                className="item-thumbs"
                                onClick={() => setSelectedImage(item.src)}
                            >
                                <a className="hover-wrap" title="Click to view">
                                    <span className="overlay-img" />
                                    <span className="overlay-img-thumb">
                                        <i className="icon-info-blocks fa fa-search" />
                                    </span>
                                </a>
                                <img src={item.src} alt={`Gallery ${index}`} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
                        <img src={selectedImage} alt="Enlarged" className="modal-img" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;

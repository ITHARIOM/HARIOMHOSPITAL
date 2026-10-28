import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";
import SectionHeader from "./component/SectionHeader";

/*
  type ke options: "hospital" | "camp" | "team" | "event"
  Har photo ka title/type apne hisaab se badal lena.
*/
const categories = [
    { key: "all", label: "All" },
    { key: "hospital", label: "Hospital" },
    { key: "camp", label: "Health Camps" },
    { key: "team", label: "Our Team" },
    { key: "event", label: "Events" },
];

const galleryItems = [
    { src: "src/assets/img/works/1.jpg", type: "hospital", title: "Hospital building" },
    { src: "src/assets/img/works/2.jpg", type: "camp", title: "Free health check-up camp" },
    { src: "src/assets/img/works/3.jpg", type: "team", title: "Doctors and staff" },
    { src: "src/assets/img/works/4.jpg", type: "hospital", title: "Patient ward" },
    { src: "src/assets/img/works/5.jpg", type: "event", title: "Community event" },
    { src: "src/assets/img/works/6.jpg", type: "camp", title: "Eye check-up camp" },
    { src: "src/assets/img/works/7.jpg", type: "hospital", title: "Reception and waiting area" },
    { src: "src/assets/img/works/8.jpg", type: "team", title: "Nursing team" },
];

const Gallery = () => {
    const [active, setActive] = useState("all");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const filteredItems =
        active === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.type === active);

    const countFor = (key) =>
        key === "all"
            ? galleryItems.length
            : galleryItems.filter((i) => i.type === key).length;

    const close = useCallback(() => setSelectedIndex(null), []);

    const showNext = useCallback(() => {
        setSelectedIndex((i) =>
            i === null ? i : (i + 1) % filteredItems.length
        );
    }, [filteredItems.length]);

    const showPrev = useCallback(() => {
        setSelectedIndex((i) =>
            i === null ? i : (i - 1 + filteredItems.length) % filteredItems.length
        );
    }, [filteredItems.length]);

    // Keyboard: Esc band, arrow keys se agli/pichli photo
    useEffect(() => {
        if (selectedIndex === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [selectedIndex, close, showNext, showPrev]);

    const changeFilter = (key) => {
        setActive(key);
        setSelectedIndex(null);
    };

    const current = selectedIndex !== null ? filteredItems[selectedIndex] : null;

    return (
        <>
            <SectionHeader title="Gallery" subtitle="" />

            <div className="gallery-page">
                <div className="container">
                    <p className="gallery-intro">
                        A look inside our hospital: the building, the wards, our
                        health camps and the people who care for patients every day.
                    </p>

                    <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                type="button"
                                role="tab"
                                aria-selected={active === cat.key}
                                className={`filter-pill ${active === cat.key ? "is-active" : ""}`}
                                onClick={() => changeFilter(cat.key)}
                            >
                                {cat.label}
                                <span className="filter-count">{countFor(cat.key)}</span>
                            </button>
                        ))}
                    </div>

                    <section id="projects">
                        <ul className="gallery-grid">
                            {filteredItems.map((item, index) => (
                                <li
                                    key={item.src}
                                    className="gallery-tile"
                                >
                                    <button
                                        type="button"
                                        className="tile-button"
                                        onClick={() => setSelectedIndex(index)}
                                        aria-label={`View photo: ${item.title}`}
                                    >
                                        <img src={item.src} alt={item.title} loading="lazy" />
                                        <span className="tile-caption">
                                            <span className="tile-title">{item.title}</span>
                                            <span className="tile-zoom" aria-hidden="true">
                                                <i className="fa fa-search" />
                                            </span>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {filteredItems.length === 0 && (
                            <p className="gallery-empty">
                                No photos in this category yet. Please check back soon.
                            </p>
                        )}
                    </section>
                </div>
            </div>

            {/* Lightbox */}
            {current && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={current.title}
                    onClick={close}
                >
                    <button
                        type="button"
                        className="lightbox-close"
                        onClick={close}
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {filteredItems.length > 1 && (
                        <button
                            type="button"
                            className="lightbox-nav prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                            aria-label="Previous photo"
                        >
                            &#8249;
                        </button>
                    )}

                    <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
                        <img src={current.src} alt={current.title} className="lightbox-img" />
                        <figcaption className="lightbox-caption">
                            <span>{current.title}</span>
                            <span className="lightbox-count">
                                {selectedIndex + 1} of {filteredItems.length}
                            </span>
                        </figcaption>
                    </figure>

                    {filteredItems.length > 1 && (
                        <button
                            type="button"
                            className="lightbox-nav next"
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            aria-label="Next photo"
                        >
                            &#8250;
                        </button>
                    )}
                </div>
            )}
        </>
    );
};

export default Gallery;

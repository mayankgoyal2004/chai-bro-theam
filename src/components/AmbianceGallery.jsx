import React from "react";
import { Camera, Heart } from "lucide-react";

export const AmbianceGallery = () => {

  const galleryItems = [
    {
      id: 1,
      tag: "Vibe & Baithak",
      title: "WARM EARTHY SEATING",
      location: "Pull Up • Chill Out",
      description: "A cozy corner, warm earthy seating and the right people — your home away from home.",
      likes: 840,
      image: "/assets/vibe/warm-earthy-seating.png",
    },
    {
      id: 2,
      tag: "Handcrafted Brew",
      title: "BRASS HANDI CHAI",
      location: "Sip • Savour • Repeat",
      description: "Slow-simmered in traditional brass vessels with crushed green cardamom & country jaggery.",
      likes: 1290,
      image: "/assets/vibe/hand-boiled-brass-handi-chai.png",
    },
    {
      id: 3,
      tag: "Royal Comfort",
      title: "DESI GHEE CHURI & CHAI",
      location: "Ghar Ka Swaad",
      description: "Golden hand-crushed tandoori rotis dripping with pure desi ghee & earthen kulhad chai.",
      likes: 920,
      image: "/assets/vibe/fresh-desi-ghee-churi.png",
    },
    {
      id: 4,
      tag: "Study & Hangout",
      title: "LATE NIGHT YAARI CORNER",
      location: "Your Corner • Your Rules",
      description: "Grab a corner, plug in your laptop, or catch up on deep talks with friends over endless sips.",
      likes: 1450,
      image: "/assets/vibe/late-night-study-yaari.png",
    },
    {
      id: 5,
      tag: "Fresh Bakery",
      title: "CLASSIC TOASTED BUN MASKA",
      location: "Maska Maar Ke",
      description: "Warm, buttery toasted soft buns served fresh to dip right into your piping hot chai.",
      likes: 1110,
      image: "/assets/vibe/classic-toasted-bun-maska.png",
    },
    {
      id: 6,
      tag: "Chilled Sips",
      title: "FROTHY KULHAD COLD COFFEE",
      location: "Chill In Every Sip",
      description: "Thick, creamy iced coffee poured in traditional terracotta mitti tumblers for a rich kick.",
      likes: 980,
      image: "/assets/vibe/frothy-kulhad-cold-coffee.png",
    },
  ];

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            THE CHAI BRO STORIES
          </span>
          <h2 className="section-title">
            Where Chai Meets{" "}
            <span className="text-terracotta font-serif italic">Good Vibes</span>
          </h2>
          <p className="section-subtitle">
            From slow sips and spicy bites to late-night conversations and everyday escapes — every corner has a story waiting to be enjoyed.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-grid-card">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-photo"
                loading="lazy"
              />
              <div className="gallery-photo-overlay">
                <div className="photo-info">
                  <span className="photo-loc font-bold">{item.location}</span>
                  <h4 className="photo-title">{item.title}</h4>
                  <p className="photo-desc">{item.description}</p>
                </div>
                <div className="photo-likes">
                  <Heart size={14} className="fill-red-500 text-red-500 mr-1" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

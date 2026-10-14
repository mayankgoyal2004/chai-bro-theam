import React from "react";
import { Camera, Heart } from "lucide-react";

export const AmbianceGallery = () => {

  const galleryItems = [
    {
      id: 1,
      tag: "vibe",
      title: "YOUR HAPPY PLACE",
      location: "Pull Up. Chill Out.",
      description: "A cozy corner, your favourite chai and the right people — sometimes that’s all you need to turn an ordinary day into a good one.",
      likes: 640,
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      tag: "ritual",
      title: "THE CHAI RITUAL",
      location: "Sip. Savour. Repeat.",
      description: "Watch the chai brew, catch the aroma of fresh spices, take that first sip and let the day slow down for a moment.",
      likes: 890,
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      tag: "food",
      title: "DESI CRAVINGS",
      location: "Come Hungry, Leave Happy",
      description: "Crispy bites, buttery favourites and desi comfort food made for sharing — because great chai always deserves something delicious on the side.",
      likes: 720,
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      tag: "vibe",
      title: "STUDY. WORK. HANG.",
      location: "Your Corner, Your Rules",
      description: "Need a change of scene? Grab a table, plug in, get things done or simply switch off with a refreshing cup of chai.",
      likes: 1240,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      tag: "vibe",
      title: "CHAI + GOOD COMPANY",
      location: "Better Together, Always",
      description: "First dates, old friends, family catch-ups or random plans — bring your people and let the conversations flow over something delicious.",
      likes: 850,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      tag: "vibe",
      title: "AFTER-HOURS VIBES",
      location: "Stay For One More Sip",
      description: "When the lights get warm and conversations run late, there’s always time for another cup, another bite and another unforgettable moment.",
      likes: 980,
      image:
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
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

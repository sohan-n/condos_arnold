import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Condo {
  name: string;
  imageUrl: string;
  airbnbUrl: string;
  gallery: string[];
  about: string;
  quickFacts: { [key: string]: string | number };
  theSpace: {
    preview: string;
    // You can add more detailed properties here based on the original HTML
  };
  amenities: string[];
  calendarUrl: string;
}

// This would typically be fetched from an API
const condoData: { [key: string]: Condo } = {
  '1': {
    name: 'Spacious Ocean View Condo for Groups',
    imageUrl: '/condo1_hero.png',
    airbnbUrl: 'https://www.airbnb.com/rooms/648803575821899223',
    gallery: [
      '/condo1_banner.png',
      '/condo1_living.png',
      '/condo1_bedroom.png',
      '/condo1_balcony.png',
    ],
    about: 'This Penthouse is right across from the beach and on the main strip of Jaco. Masterfully designed luxurious 4 bedroom, 4 bath penthouse. Elegantly furnished, the unit comfortably hosts groups of up to 10 guests. A great fit for families and groups looking to vacation together.',
    quickFacts: {
      Bedrooms: 4,
      Bathrooms: 4,
      Beds: '1 King, 1 Queen, 2 Twins, 1 Bunk',
      'Max Guests': 10,
      Location: 'Beachfront, Main Strip of Jaco',
    },
    theSpace: {
      preview: 'This impeccable and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It\'s the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.',
      // ... more details here
    },
    amenities: [
      'Beach view', 'Kitchen', 'Wifi', 'Free residential garage on premises – 2 spaces',
      'Shared pool', 'HDTV with standard cable', 'Elevator', 'Free washer – In unit',
      'Free dryer – In unit', 'AC - split type ductless system',
    ],
    calendarUrl: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&title=asdas&showTitle=0&showTabs=0&showCalendars=0&src=dGlvcXNpM2lsYmtiaGs5c2pmb3JxMGNyM3NtdHI1bnFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233f51b5',
  },
  // ... data for condo 2 and 3
};

const CondoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [condo, setCondo] = useState<Condo | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (id && condoData[id]) {
      setCondo(condoData[id]);
    }
  }, [id]);

  const slideGallery = (dir: number) => {
    if (!condo) return;
    const newIndex = (galleryIndex + dir + condo.gallery.length) % condo.gallery.length;
    setGalleryIndex(newIndex);
  };

  if (!condo) {
    return <div>Condo not found</div>;
  }

  return (
    <>
      <header className="header" style={{ backgroundImage: `url(${condo.imageUrl})` }}>
        <div className="header-content">
          <h1>{condo.name}</h1>
          <a className="btn-book" href={condo.airbnbUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
        </div>
      </header>
      <div className="main-content">
        <div className="gallery-carousel">
          <button className="gallery-arrow left" onClick={() => slideGallery(-1)}>&#8592;</button>
          <div className="gallery-track" style={{ transform: `translateX(${-galleryIndex * (340 + 20)}px)` }}>
            {condo.gallery.map((img, index) => (
              <img key={index} className="gallery-img" src={img} alt={`${condo.name} gallery image ${index + 1}`} />
            ))}
          </div>
          <button className="gallery-arrow right" onClick={() => slideGallery(1)}>&#8594;</button>
        </div>
        <div className="top-cards">
          <div className="section-card about-card" style={{display: 'block'}}>
            <h2>About this space</h2>
            <p>{condo.about}</p>
          </div>
          <div className="section-card quickfacts-card" style={{display: 'block'}}>
            <h2>Quick Facts</h2>
            <ul>
              {Object.entries(condo.quickFacts).map(([key, value]) => (
                <li key={key}><b>{key}:</b> {value}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-card collapsible-card">
          <h2>The Space</h2>
          <div className="section-card-inner">
            <p>{condo.theSpace.preview}</p>
          </div>
        </div>
        <div className="amenities-card section-card" style={{ marginBottom: '2.2rem' }}>
          <h2 style={{ color: 'var(--wood-brown)', marginBottom: '0.7rem' }}>Amenities</h2>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', listStyle: 'none', padding: 0 }}>
            {condo.amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section-card" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ color: 'var(--wood-brown)', marginBottom: '0.7rem' }}>Availability</h2>
          <iframe src={condo.calendarUrl} style={{ borderWidth: 0 }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
      <footer>
        &copy; 2025 Jaco Beach Condos. All rights reserved.
      </footer>
    </>
  );
};

export default CondoPage; 
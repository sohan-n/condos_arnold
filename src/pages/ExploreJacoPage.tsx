import React from 'react';

const activities = [
  {
    title: 'Surf Lessons',
    description: 'Catch the perfect wave with local instructors for all skill levels.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Zip Line Adventure',
    description: 'Fly through the rainforest canopy on an exhilarating zip-line tour.',
    image: 'https://images.unsplash.com/photo-1506880135364-9b0b8d52917d?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Rainforest Waterfall Hike',
    description: 'Explore lush trails leading to stunning waterfalls and natural pools.',
    image: 'https://images.unsplash.com/photo-1558980664-10d3b6a36da8?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'ATV Jungle Tour',
    description: 'Ride off-road vehicles through rugged jungle terrain and scenic viewpoints.',
    image: 'https://images.unsplash.com/photo-1602288637781-65396b8f7b8b?auto=format&fit=crop&w=600&q=60',
  },
];

const ExploreJacoPage: React.FC = () => {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
        Discover Jaco Experiences
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.8rem' }}>
        {activities.map((act) => (
          <div key={act.title} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <img src={act.image} alt={act.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>{act.title}</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.5 }}>{act.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ExploreJacoPage; 
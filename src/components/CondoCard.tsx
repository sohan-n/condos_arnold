import React from 'react';
import { Link } from 'react-router-dom';

interface CondoCardProps {
  condo: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    detailsUrl: string;
  };
}

const CondoCard: React.FC<CondoCardProps> = ({ condo }) => {
  return (
    <div className="listing-card">
      <img src={condo.imageUrl} alt={condo.name} />
      <h2>{condo.name}</h2>
      <p>{condo.description}</p>
      <Link className="btn-details" to={condo.detailsUrl}>View Condo</Link>
    </div>
  );
};

export default CondoCard; 
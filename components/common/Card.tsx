import React from 'react';
import { CardProps } from '../../interfaces';
import Image from 'next/image';

const Card: React.FC<CardProps> = ({ title, description, image, price, onClick }) => (
  <div
    className="max-w-sm mx-auto border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    role="button"
    onClick={onClick}
    tabIndex={0}
  >
    {/* Image */}
    {image && (
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
    )}

    {/* Content */}
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {price && <p className="text-md text-blue-600 font-bold mt-4">${price}</p>}
    </div>
  </div>
);

export default Card;
// MemberCard.js
import React from 'react';
import Image from 'next/image';
import ShiningText from '@/app/_components/ShiningText';

function MemberCard({ name, position, imageSrc, text }) {
  return (
    <>
        <div className="p-6">
            <div className="flex flex-col items-center mt-4">
            <Image className="rounded-full" src={imageSrc} alt={name} width="150" height="150" />
            <div className="mt-4 text-center">
                <span className="font-bold text-2xl">{name}</span>
                <span className="block text-lg">{position}</span>
            </div>
            </div>
        </div>
    </>
  );
}

export default MemberCard;

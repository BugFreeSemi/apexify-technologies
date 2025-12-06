import React from 'react';
import Image from 'next/image';

const teamMembersData = [
  {
    name: 'James Baker',
    role: 'CEO & Founder',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/1-1-14.jpg',
  },
  {
    name: 'Dalton Grant',
    role: 'Software Engineer',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/2-1-15.jpg',
  },
  {
    name: 'Ryan Ricketts',
    role: 'Project Manager',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/3-1-16.jpg',
  },
];

const TeamMembers = () => {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h5 className="text-overline text-primary mb-4">
            Team members
          </h5>
          <h2 className="font-display text-[36px] font-bold text-text-primary leading-tight">
            Our professional expert team members
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersData.map((member, index) => (
            <div key={index} className="group overflow-hidden rounded-[20px] bg-white text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="relative">
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  width={384}
                  height={384}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="font-display text-xl font-semibold text-text-primary mb-1">
                  <a href="#" className="transition-colors duration-300 hover:text-primary">
                    {member.name}
                  </a>
                </h4>
                <span className="text-sm text-text-secondary">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
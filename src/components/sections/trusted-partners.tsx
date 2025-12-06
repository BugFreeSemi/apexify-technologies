import React from 'react';

const partners = [
  {
    name: "Partner 1",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/1-1-21.png",
    alt: "Partner logo 1",
  },
  {
    name: "Bootstrap",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/2-17.png",
    alt: "Bootstrap logo",
  },
  {
    name: "Dribbble",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/3-18.png",
    alt: "Dribbble logo",
  },
  {
    name: "jQuery",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/4-19.png",
    alt: "jQuery logo",
  },
  {
    name: "Envato",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/5-1-20.png",
    alt: "Envato logo",
  },
];

const TrustedPartners = () => {
    return (
        <section
            className="relative bg-cover bg-center py-[120px]"
            style={{ backgroundColor: '#0F1B2D' }} // Fallback for missing background image using --color-dark-background
        >
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            
            <div className="relative">
                <div className="container text-center">
                    <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                        {'Trusted  Partners'}
                    </h2>
                </div>

                <div className="relative mt-[60px] bg-secondary-dark py-[50px]">
                    <div className="overflow-x-auto">
                        <div className="mx-auto flex min-w-max items-center justify-center lg:min-w-fit">
                            <div className="flex items-stretch divide-x divide-white/15">
                                {partners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className="flex h-[100px] flex-shrink-0 items-center justify-center px-8 sm:px-10"
                                    >
                                        <a href="#" aria-label={`Our partner: ${partner.name}`}>
                                            <img
                                                src={partner.logoUrl}
                                                alt={partner.alt}
                                                className="max-h-[30px] w-auto transition-opacity duration-300 opacity-70 hover:opacity-100 sm:max-h-[37px]"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;
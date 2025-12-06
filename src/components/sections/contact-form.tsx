"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Send } from "lucide-react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // A real implementation would handle form submission logic here,
        // e.g., sending data to an API endpoint.
        console.log("Form submitted:", { name, email, phone, message });
    };

    return (
        <section
            className="relative overflow-hidden py-24 lg:py-[120px] bg-no-repeat bg-center"
            style={{
                backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/6-26.png')",
                backgroundSize: 'auto',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    <div className="lg:col-span-5">
                        <div className="mb-10">
                            <h2 className="font-display text-[40px] font-bold text-text-primary leading-tight mb-4">
                                Contact Information
                            </h2>
                            <p className="text-text-secondary text-lg">
                                Have questions or ready to start your project?Reach out to our team, and let’s bring your vision to life.
                            </p>
                        </div>
                        <ul className="space-y-8">
                            <li>
                                <h4 className="font-body text-xl font-bold text-text-primary mb-2">Phone</h4>
                                <p className="text-text-secondary text-base">+1 (682) 600-4502</p>
                            </li>
                            <li>
                                <h4 className="font-body text-xl font-bold text-text-primary mb-2">Official Email</h4>
                                <p className="text-text-secondary text-base">info@apexifytechnologies.com</p>
                            </li>
                            <li className="pt-2">
                                <ul className="flex">
                                    <li>
                                        <a href="http://facebook.com/apexify" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-text-primary rounded-full text-white hover:bg-primary transition-colors">
                                            <Facebook size={20} strokeWidth={1.5} />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7 relative z-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                            <h5 className="text-sm font-semibold text-primary uppercase tracking-[0.1em] mb-2">
                                Have Questions?
                            </h5>
                            <h2 className="font-display text-4xl font-bold text-text-primary mb-8">
                                Send us a Massage
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-transparent border-0 border-b-2 border-slate-200 py-3 text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email*"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-transparent border-0 border-b-2 border-slate-200 py-3 text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-transparent border-0 border-b-2 border-slate-200 py-3 text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Message*"
                                        rows={3}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-transparent border-0 border-b-2 border-slate-200 py-3 text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-8 py-[15px] bg-primary text-primary-foreground font-medium rounded-md text-base shadow-[0_4px_15px_rgba(65,105,255,0.3)] hover:bg-blue-700 transition-all duration-300"
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Get In Touch
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 max-w-[485px] w-[50vw] sm:w-[35vw] md:w-[25vw] lg:w-auto h-auto pointer-events-none">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/Frame-27.png"
                    width={485}
                    height={387}
                    alt="Decorative wave shape"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
};

export default ContactForm;
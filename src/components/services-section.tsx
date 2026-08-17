import React from "react";
import { FiGlobe, FiLayout, FiZap, FiSettings } from "react-icons/fi";

const services = [
    {
        title: "Business Websites",
        description:
            "High-converting, fast, and mobile-first websites that turn visitors into paying customers and make your brand look credible.",
        icon: <FiGlobe />,
    },
    {
        title: "Web Applications",
        description:
            "Custom dashboards and tools that streamline your operations, cut manual work, and keep your team productive.",
        icon: <FiLayout />,
    },
    {
        title: "AI-Powered Solutions",
        description:
            "Integrate AI to automate repetitive tasks and unlock insights — giving your business a competitive edge.",
        icon: <FiZap />,
    },
    {
        title: "Maintenance & Support",
        description:
            "Reliable updates, fixes, and improvements so your platform stays secure and you can focus on running your business.",
        icon: <FiSettings />,
    },
];

export default function ServicesSection() {
    return (
        <section className="relative py-12 px-4 sm:px-12">
            <div className="container w-full mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
                        What I Can Do For Your Business
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                        Practical digital solutions built with one goal in mind — helping your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map(({ title, description, icon }) => (
                        <div
                            key={title}
                            className="group rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300"
                        >
                            <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-slate-50 text-2xl shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                {icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

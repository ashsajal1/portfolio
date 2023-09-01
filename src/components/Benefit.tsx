import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaLightbulb, FaRocket, FaBriefcase, FaGlobe, FaChartBar, FaChartLine } from 'react-icons/fa';

const BenefitItem = ({ icon, heading, description }: { icon: React.ReactNode, heading: string, description: string }) => (
    <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-slate-50" data-aos="fade-up">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p>{description}</p>
    </div>
);

const Benefit = () => {
    useEffect(() => {
        AOS.init();
    }, []);



    const benefits = [
        {
            icon: <FaLightbulb color='green' />,
            heading: 'Innovative Solutions',
            description: 'We provide innovative solutions to your problems.',
        },
        {
            icon: <FaRocket color='green' />,
            heading: 'Fast Delivery',
            description: 'Our team is committed to delivering results quickly.',
        },
        {
            icon: <FaBriefcase />,
            heading: 'Professional Team',
            description: 'Our professionals are experts in their field.',
        },
        {
            icon: <FaGlobe />,
            heading: 'Global Reach',
            description: 'We serve clients from all around the world.',
        },
        {
            icon: <FaChartBar />,
            heading: 'Growth Opportunities',
            description: 'Partner with us for business growth.',
        },
        {
            icon: <FaChartLine />,
            heading: 'Data-Driven Approach',
            description: 'We base our decisions on data and analytics.',
        },
    ];


    return (
        <div className='dark:bg-gray-900'>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 via-green-500 to-blue-400 text-transparent bg-clip-text text-center">
                Benifits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {benefits.map((benefit, index) => (
                    <BenefitItem
                        key={index}
                        icon={benefit.icon}
                        heading={benefit.heading}
                        description={benefit.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Benefit;

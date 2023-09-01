

const faqs = [
  {
    title: "How much does your agency charge for web development services?",
    content: "Our pricing varies depending on the scope and complexity of the project. Please contact us for a detailed quote."
  },
  {
    title: "What technologies do you use for web development?",
    content: "We are proficient in a wide range of technologies including HTML, CSS, JavaScript, React, Node.js, and more. We choose the appropriate technology stack based on the requirements of each project."
  },
  {
    title: "Can you provide examples of websites you have developed in the past?",
    content: "Yes, we have a portfolio showcasing our previous web development projects. Feel free to check it out on our website."
  },
  {
    title: "Do you offer ongoing maintenance and support for websites?",
    content: "Yes, we provide ongoing maintenance and support services to ensure your website runs smoothly and stays up-to-date with the latest technologies."
  },
  {
    title: "What is your typical turnaround time for web development projects?",
    content: "The turnaround time depends on the size and complexity of the project. We work closely with our clients to establish realistic timelines and deliver high-quality results within the agreed-upon timeframe."
  }
];

export default function Faq() {

  return (
    <div className="py-4 px-6 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 via-green-500 to-blue-400 text-transparent bg-clip-text text-center">
        FAQs
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200 dark:bg-gray-800 dark:text-slate-50 mt-3"
        >
          <div className="collapse-title md:text-xl font-medium">
            {faq.title}
          </div>
          <div className="collapse-content">
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
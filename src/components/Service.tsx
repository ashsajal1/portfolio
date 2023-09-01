const services = [
    {
      title: 'Service 1',
      imageSrc: 'https://fastly.picsum.photos/id/155/400/300.jpg?hmac=NELIFX0PmHSKTzaCE0Uu3Zerf35CMt914rVgdmeRws0',
    },
    {
      title: 'Service 2',
      imageSrc: 'https://fastly.picsum.photos/id/155/400/300.jpg?hmac=NELIFX0PmHSKTzaCE0Uu3Zerf35CMt914rVgdmeRws0',
    },
    {
      title: 'Service 3',
      imageSrc: 'https://fastly.picsum.photos/id/155/400/300.jpg?hmac=NELIFX0PmHSKTzaCE0Uu3Zerf35CMt914rVgdmeRws0',
    },
    {
      title: 'Service 3',
      imageSrc: 'https://fastly.picsum.photos/id/155/400/300.jpg?hmac=NELIFX0PmHSKTzaCE0Uu3Zerf35CMt914rVgdmeRws0',
    },
    {
      title: 'Service 3',
      imageSrc: 'https://fastly.picsum.photos/id/155/400/300.jpg?hmac=NELIFX0PmHSKTzaCE0Uu3Zerf35CMt914rVgdmeRws0',
    },
    {
      title: 'Service 3',
      imageSrc: 'https://fastly.picsum.photos/id/155/400/300.jpg?hmac=NELIFX0PmHSKTzaCE0Uu3Zerf35CMt914rVgdmeRws0',
    },
    // Add more services as needed
  ];
  
  export default function Service() {
    return (
      <section className="py-12 bg-gray-100 px-4 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 via-green-500 to-blue-400 text-transparent bg-clip-text text-center">
          Our Services
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg dark:shadow-green-600 text-green-600 dark:bg-gray-800 dark:text-slate-50">
                <img src={service.imageSrc} alt={service.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 dark:text-slate-200">Service description goes here...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
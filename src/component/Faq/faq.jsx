import { useState } from 'react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [selectedSection, setSelectedSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: 'Types of Plans',
      description: 'Our future plans and financial goals demand protection',
      faqs: [
        {
          id: 1,
          question: 'What is a term insurance plan & how does it work?',
          answer: 'A term insurance plan is a type of life insurance that provides coverage for a specific period of time. If the insured person passes away during the term, the beneficiaries receive the death benefit. It works by...',
        },
        {
          id: 2,
          question: 'What is a term insurance plan & how does it work?',
          answer: 'A term insurance plan is a type of life insurance that provides coverage for a specific period of time. If the insured person passes away during the term, the beneficiaries receive the death benefit. It works by...',
        },
      ],
    },
    {
      id: 2,
      title: 'Life Insurance',
      description: 'Our future plans and financial goals demand protection',
      faqs: [
        {
          id: 2,
          question: 'How do I determine my suitable term insurance coverage amount?',
          answer: 'To determine your suitable term insurance coverage amount, consider factors such as your current income, debts, future financial goals, and the needs of your dependents...',
        },
        {
          id: 2,
          question: 'How do I determine my suitable term insurance coverage amount?',
          answer: 'To determine your suitable term insurance coverage amount, consider factors such as your current income, debts, future financial goals, and the needs of your dependents...',
        },
      ],
    },
    {
      id: 3,
      title: 'Life Insurance Processes',
      description: 'Our future plans and financial goals demand protection',
      faqs: [
        {
          id: 3,
          question: 'What are the documents required for buying term insurance plan?',
          answer: 'The documents typically required for buying a term insurance plan include proof of identity, proof of address, proof of income, medical records, and...',
        },
        {
          id: 3,
          question: 'What are the documents required for sell term insurance plan?',
          answer: 'The documents typically required for buying a term insurance plan include proof of identity, proof of address, proof of income, medical records, and...',
        },
      ],
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Frequently Asked Questions</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`bg-white p-4 rounded-lg shadow-md cursor-pointer ${selectedSection === section.id ? 'border-l-4 border-yellow-500' : ''}`}
              onClick={() => setSelectedSection(section.id)}
            >
              <h2 className="font-semibold text-lg">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="md:col-span-3 space-y-6">
          {sections.map((section) => (
            selectedSection === section.id && (
              <div key={section.id} className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                    <span className="text-blue-500 mr-2">🔒</span>
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>

                <div className="divide-y">
                  {section.faqs.map((q) => (
                    <div key={q.id} className="p-6">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => toggleQuestion(q.id)}
                      >
                        <span className="font-medium text-gray-900">{q.question}</span>
                        <span className={`transition-transform duration-300 ${openQuestion === q.id ? 'rotate-180' : ''}`}>
                          {openQuestion === q.id ? '▲' : '▼'}
                        </span>
                      </button>
                      {openQuestion === q.id && (
                        <p className="mt-4 text-gray-600">{q.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

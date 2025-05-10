'use client'
import { useState } from 'react';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this TikTok downloader free to use?",
      answer: "Yes, our service is completely free with no hidden charges. You can download as many videos as you want without paying anything."
    },
    {
      question: "How do I download TikTok videos without watermark?",
      answer: "Simply paste the TikTok video URL, select 'Without Watermark' option, and click download. We'll remove the watermark automatically."
    },
    {
      question: "What video quality can I download?",
      answer: "We provide the highest available quality for each video, typically up to 1080p HD resolution when available."
    },
    {
      question: "Can I download private TikTok videos?",
      answer: "No, our tool only works with public TikTok videos. Private videos require login credentials which we don't support."
    },
    {
      question: "Is there a limit on how many videos I can download?",
      answer: "No, there are no limits. You can download unlimited TikTok videos using our service."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation needed! Our tool works directly in your web browser on any device."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-gray-600">Find answers to common questions</p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div 
                  id={`faq-${index}`}
                  className="px-4 pb-4 sm:px-5 sm:pb-5 bg-white"
                >
                  <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
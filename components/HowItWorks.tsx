'use client'
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-lg sm:text-xl text-gray-600">Download TikTok videos in just 3 easy steps</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Copy Link",
              description: "Open TikTok app and copy the video link"
            },
            {
              step: "2",
              title: "Paste URL",
              description: "Paste the URL in our downloader"
            },
            {
              step: "3",
              title: "Download",
              description: "Click download and save your video"
            }
          ].map((item) => (
            <div 
              key={item.step} 
              className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-pink-600">{item.step}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { Download, Link2, 
 } from 'lucide-react';

export default function TikTokDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const downloadVideo = async () => {
    if (!url) {
      setError('Please enter a TikTok URL');
      return;
    }

    setIsLoading(true);
    setStatus('Processing...');
    setError('');

    try {
      const response = await fetch("http://168.231.111.210:5000/api/download"
, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"          
        },
        body: JSON.stringify({
          url: url,
          withWatermark: false // or true if needed
        })
      });

      const result = await response.json();

      if (result.success) {
        const videoUrl = result.data.url;
        
        // Create a temporary anchor tag to trigger download
        const a = document.createElement("a");
        a.href = videoUrl;
        a.download = `tiktok-video-${Date.now()}.mp4`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        setStatus('Download started');
      } else {
        setError(result.message || 'Failed to download video');
        setStatus('');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch the video');
      setStatus('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mt-20 mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <Download className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Download TikTok videos in HD</h1>
            <p className="text-pink-100">Download HD videos without watermark</p>
          </div>
        </div>
      </div>

      {/* Download Form */}
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="tiktok-url" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Link2 className="h-4 w-4" />
              TikTok Video URL
            </label>
            <input
              id="tiktok-url"
              type="url"
              placeholder="https://www.tiktok.com/@username/video/1234567890"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <button
            onClick={downloadVideo}
            disabled={isLoading}
            className={`w-full flex justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-medium transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Download Video
              </>
            )}
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800">
            <p>{status}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800">
            <p className="font-medium">Error:</p>
            <p>{error}</p>
          </div>
        )}
      </div>

      {/* How To Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold flex items-center gap-2 mb-3 text-gray-800 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          How to Download
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-gray-700 dark:text-gray-300">
          <li>Copy the link from TikTok app (tap Share then Copy link)</li>
          <li>Paste the URL above</li>
          <li>Click Download Video</li>
        </ol>
      </div>
    </div>
  );
}
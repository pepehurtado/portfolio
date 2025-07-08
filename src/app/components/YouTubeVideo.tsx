"use client";
import React from "react";

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  width?: string;
  height?: string;
  className?: string;
}

export function YouTubeVideo({ 
  videoId, 
  title = "YouTube Video", 
  width = "100%", 
  height = "315",
  className = ""
}: YouTubeVideoProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {title && (
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          {title}
        </h3>
      )}
      <div className="relative w-full max-w-4xl">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl border border-gray-600">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideo;

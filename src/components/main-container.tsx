"use client";

import Image from "next/image";
import React, { useState } from "react";

export const MainContainer = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // it checks if e.target.files exists and if there is at least one file selected
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const IdentifyImage = () => {};

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Identify Your Image
          </h2>
          <div className="mb-8">
            <label
              htmlFor="image-upload"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload an image
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 hover:file:text-blue-700 hover:file:bg-blue-100 transition duration-150 ease-in-out"
            />
          </div>

          {/* display image */}
          {image && (
            <div className="mb-8 flex justify-center">
              <Image
                src={URL.createObjectURL(image)}
                alt="Upload image"
                width={300}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          )}

          <button
            type="button"
            onClick={() => IdentifyImage()}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed font-medium text-lg"
            disabled={!image || loading}
          >
            {loading ? "Identifying..." : "Identifying Image"}
          </button>
        </div>
      </div>
    </main>
  );
};

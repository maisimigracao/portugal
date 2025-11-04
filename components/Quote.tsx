import React from 'react';
import { BsQuote } from 'react-icons/bs';
import { QuoteData } from '../types';

interface QuoteProps {
  data: QuoteData;
}

const Quote: React.FC<QuoteProps> = ({ data }) => {
  const { text, author } = data;

  return (
    <div className="my-8 px-6 py-8 bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 rounded-r-lg">
      <div className="flex items-start">
        <BsQuote className="text-teal-500 text-4xl mr-4 flex-shrink-0 opacity-50" />
        <div>
          <p className="text-gray-800 text-xl italic leading-relaxed mb-3">
            "{text}"
          </p>
          {author && (
            <p className="text-gray-600 font-semibold text-sm">
              — {author}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;

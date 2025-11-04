import React from 'react';
import { FiInfo, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';
import { CalloutData } from '../types';

interface CalloutProps {
  data: CalloutData;
}

const Callout: React.FC<CalloutProps> = ({ data }) => {
  const { title, text, type } = data;

  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-900',
      text: 'text-blue-800',
      Icon: FiInfo,
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
      title: 'text-yellow-900',
      text: 'text-yellow-800',
      Icon: FiAlertTriangle,
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      title: 'text-green-900',
      text: 'text-green-800',
      Icon: FiCheckCircle,
    },
  };

  const style = styles[type];
  const Icon = style.Icon;

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-6 rounded-r-lg my-6`}>
      <div className="flex items-start">
        <Icon className={`${style.icon} text-2xl mr-4 flex-shrink-0 mt-1`} />
        <div>
          <h4 className={`${style.title} font-bold text-lg mb-2`}>{title}</h4>
          <p className={`${style.text} leading-relaxed`}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Callout;

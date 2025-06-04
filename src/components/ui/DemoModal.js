'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, RotateCcw } from 'lucide-react';
import Button from './Button';

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);

  const demoSteps = [
    {
      title: "Connect Your API",
      description: "Simply input your API URL and authentication token",
      visual: (
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
          <div className="space-y-3">
            <div className="h-4 bg-cyan-400/30 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-800 rounded border border-cyan-400/50"></div>
            <div className="h-8 bg-gray-800 rounded border border-gray-600"></div>
            <div className="h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded text-white flex items-center justify-center text-sm font-medium">
              Connect API
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Auto-Generate Dashboard",
      description: "Watch as your dashboard is created instantly",
      visual: (
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="h-12 bg-cyan-400/20 rounded flex items-center justify-center text-xs text-cyan-400">
              15.2K
            </div>
            <div className="h-12 bg-purple-400/20 rounded flex items-center justify-center text-xs text-purple-400">
              $2.4M
            </div>
            <div className="h-12 bg-green-400/20 rounded flex items-center justify-center text-xs text-green-400">
              99.8%
            </div>
          </div>
          <div className="h-16 bg-gradient-to-t from-cyan-400/10 to-transparent rounded border border-cyan-400/30 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "Real-time Data Management",
      description: "Filter, search, and export your data with ease",
      visual: (
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="h-6 bg-gray-800 rounded flex-1"></div>
              <div className="h-6 bg-cyan-400/30 rounded w-16"></div>
            </div>
            <div className="space-y-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-2">
                  <div className="h-4 bg-gray-800 rounded flex-1"></div>
                  <div className="h-4 bg-green-400/30 rounded w-12"></div>
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Export & Analytics",
      description: "Generate reports and export data instantly",
      visual: (
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
          <div className="text-center space-y-3">
            <div className="h-8 bg-gradient-to-r from-green-400 to-emerald-600 rounded flex items-center justify-center text-white text-sm font-medium">
              ✓ Export Complete
            </div>
            <div className="text-xs text-gray-400">1,247 records exported to Excel</div>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setCurrentStep(0);
      setIsPlaying(true);
    };

    window.addEventListener('openDemoModal', handleOpenModal);
    return () => window.removeEventListener('openDemoModal', handleOpenModal);
  }, []);

  useEffect(() => {
    if (isPlaying && isOpen) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= demoSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isOpen, demoSteps.length]);

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 glass rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold gradient-text">CoreDeskAi Demo</h2>
          <button
            onClick={handleClose}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Visual Demo */}
          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg p-6 flex items-center justify-center">
              {demoSteps[currentStep].visual}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Information */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-cyan-400 mb-2">
                Step {currentStep + 1} of {demoSteps.length}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {demoSteps[currentStep].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {demoSteps[currentStep].description}
              </p>
            </div>

            {/* Step List */}
            <div className="space-y-3">
              {demoSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    index === currentStep 
                      ? 'bg-cyan-400/20 border border-cyan-400/50' 
                      : index < currentStep 
                        ? 'bg-green-400/10 border border-green-400/30'
                        : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === currentStep 
                      ? 'bg-cyan-400 text-black' 
                      : index < currentStep 
                        ? 'bg-green-400 text-black'
                        : 'bg-gray-600 text-gray-300'
                  }`}>
                    {index < currentStep ? '✓' : index + 1}
                  </div>
                  <span className={`font-medium ${
                    index === currentStep ? 'text-cyan-400' : 
                    index < currentStep ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={handlePlayPause}
              leftIcon={isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button
              variant="ghost"
              onClick={handleRestart}
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Restart
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="secondary" onClick={handleClose}>
              Close Demo
            </Button>
            <Button onClick={() => window.location.href = '/signup'}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

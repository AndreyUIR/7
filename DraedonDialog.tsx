import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DraedonDialogProps {
  message?: string;
  showDefaultButtons?: boolean;
  onMainTask?: () => void;
  onMyStory?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const DraedonDialog: React.FC<DraedonDialogProps> = ({ 
  message = "Приветствую вас в моих владениях. Что вы хотите?", 
  showDefaultButtons = true,
  onMainTask, 
  onMyStory,
  children,
  className = "bottom-12"
}) => {
  const [text, setText] = useState('');
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setText('');
    setShowContent(false);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= message.length) {
        setText(message.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowContent(true);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, [message]);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed left-0 w-full p-4 md:p-8 flex justify-center items-end z-50 pointer-events-none ${className}`}
    >
      <div className="pointer-events-auto w-full max-w-4xl bg-black/90 border-2 border-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.3)] rounded-lg overflow-hidden relative font-['Share_Tech_Mono']">
        {/* Decorative header bar */}
        <div className="h-8 bg-[#003333] border-b border-[#00FFFF] flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-[#008888] rounded-full"></div>
          </div>
          <span className="text-[#00FFFF] text-xs tracking-widest uppercase">Экзо-связь налажена</span>
        </div>

        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Portrait placeholder (Draedon style) */}
          <div className="w-24 h-24 md:w-32 md:h-32 border border-[#00FFFF] bg-[#001111] flex-shrink-0 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://terraria.wiki.gg/images/c/c8/Draedon_Map_Icon.png')] bg-center bg-contain bg-no-repeat opacity-80 group-hover:opacity-100 transition-opacity"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             {/* Scanline effect */}
             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
          </div>

          <div className="flex-1 w-full">
            <div className="min-h-[80px] mb-6">
              <p className="text-[#E0FFFF] text-lg md:text-xl leading-relaxed tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                {text}
                <span className="animate-pulse inline-block w-2 h-5 bg-[#00FFFF] ml-1 align-middle"></span>
              </p>
            </div>

            <AnimatePresence>
              {showContent && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row gap-4 justify-end"
                >
                  {showDefaultButtons && (
                    <>
                      <button 
                        onClick={onMainTask}
                        className="px-6 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                      >
                        Основное задание
                      </button>
                      <button 
                        onClick={onMyStory}
                        className="px-6 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                      >
                        Моя история
                      </button>
                    </>
                  )}
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none -z-10"></div>
      </div>
    </motion.div>
  );
};

export default DraedonDialog;

import React from 'react';
import { motion } from 'framer-motion';

interface MainTaskMenuProps {
  onSelect: (option: string) => void;
}

const options = [
  "Числа",
  "Строки",
  "Булевы значения",
  "Объекты",
  "Задачи на массивы",
  "Задачи на обработку массивов с помощью ForEach",
  "Задачи на Map"
];

const MainTaskMenu: React.FC<MainTaskMenuProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 z-40 relative mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <motion.button
            key={option}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(option)}
            className="group relative p-6 bg-black/80 border border-[#00FFFF]/30 hover:border-[#00FFFF] transition-all duration-300 text-left overflow-hidden"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00FFFF]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00FFFF]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00FFFF]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00FFFF]"></div>

            <h3 className="text-[#00FFFF] font-['Share_Tech_Mono'] text-xl mb-2 group-hover:text-white transition-colors">
              {option}
            </h3>
            <div className="h-1 w-12 bg-[#005555] group-hover:w-full group-hover:bg-[#00FFFF] transition-all duration-500"></div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MainTaskMenu;

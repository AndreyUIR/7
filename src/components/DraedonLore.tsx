import React from 'react';

const DraedonLore: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 mt-20 font-['Share_Tech_Mono'] text-[#00FFFF]">
      <div className="bg-black/80 border border-[#00FFFF] p-8 shadow-[0_0_20px_rgba(0,255,255,0.2)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF]"></div>

        <h2 className="text-3xl mb-8 text-center uppercase tracking-widest border-b border-[#00FFFF]/30 pb-4">
          Архивы Дрэйдона
        </h2>

        <div className="space-y-6 text-[#E0FFFF] leading-relaxed">
          <p>
            Я — Дрэйдон, главный инженер и учёный, служивший Королю-Тирану Яриму. Моя цель — совершенство через технологии и знания.
          </p>
          <p>
            Мои творения, Экзо-Механизмы, являются вершиной инженерной мысли. Арес, Танатос, Артемида и Аполлон — воплощение разрушительной мощи и элегантности.
          </p>
          <p>
            Теперь я исследую этот цифровой мир, анализируя его структуру и возможности. JavaScript — интересный инструмент, примитивный, но функциональный.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DraedonLore;

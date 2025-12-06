import React, { useState } from 'react';

const NumbersTask: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(multiply(n1, n2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 mt-20 font-['Share_Tech_Mono'] text-[#00FFFF]">
      <div className="bg-black/80 border border-[#00FFFF] p-8 shadow-[0_0_20px_rgba(0,255,255,0.2)] relative overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF]"></div>

        <h2 className="text-3xl mb-8 text-center uppercase tracking-widest border-b border-[#00FFFF]/30 pb-4">
          Модуль вычислений: Умножение
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Аргумент A</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
              placeholder="0"
            />
          </div>

          <div className="text-2xl text-[#005555]">×</div>

          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Аргумент B</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
              placeholder="0"
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleCalculate}
            className="px-8 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          >
            Вычислить
          </button>
        </div>

        {result !== null && (
          <div className="border-t border-[#00FFFF]/30 pt-6 text-center animate-pulse">
            <span className="text-[#008888] uppercase tracking-wider mr-4">Результат:</span>
            <span className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
              {result}
            </span>
          </div>
        )}
      </div>
      
      {/* Code snippet visualization */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function multiply(a, b) &#123;</p>
        <p className="pl-4">return a * b;</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default NumbersTask;

import React, { useState } from 'react';

const MapTask: React.FC = () => {
  const [inputStr, setInputStr] = useState<string>('1, 2, 3, 5, 8, 13');
  const [result, setResult] = useState<number[] | null>(null);

  /**
   * Функция doubleElements удваивает каждый элемент массива.
   * 
   * Алгоритм работы:
   * 1. Использует метод map для создания нового массива.
   * 2. Умножает каждый элемент исходного массива на 2.
   * 3. Возвращает новый массив с удвоенными значениями.
   */
  const doubleElements = (array: number[]): number[] => {
    return array.map(x => x * 2);
  };

  const handleProcess = () => {
    // Парсим числа из строки
    const numbers = inputStr.split(',')
      .map(item => parseFloat(item.trim()))
      .filter(item => !isNaN(item));
    
    setResult(doubleElements(numbers));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 mt-20 font-['Share_Tech_Mono'] text-[#00FFFF]">
      <div className="bg-black/80 border border-[#00FFFF] p-8 shadow-[0_0_20px_rgba(0,255,255,0.2)] relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF]"></div>

        <h2 className="text-3xl mb-8 text-center uppercase tracking-widest border-b border-[#00FFFF]/30 pb-4">
          Модуль Map: Удвоение значений
        </h2>

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Входной массив чисел</label>
            <input
              type="text"
              value={inputStr}
              onChange={(e) => setInputStr(e.target.value)}
              className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono"
              placeholder="1, 2, 3, ..."
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleProcess}
              className="px-8 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            >
              Удвоить
            </button>
          </div>

          {result !== null && (
            <div className="border-t border-[#00FFFF]/30 pt-6 animate-pulse">
              <label className="text-sm uppercase tracking-wider text-[#008888] block mb-2">Результат (Новый массив):</label>
              <div className="bg-[#002222] border border-[#00FFFF] p-4 font-mono text-[#00FFFF] text-xl text-center">
                [ {result.join(', ')} ]
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Визуализация кода */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function doubleElements(array) &#123;</p>
        <p className="pl-4 text-[#00AAAA]">// Возвращает массив с удвоенными элементами</p>
        <p className="pl-4">return array.map(x =&gt; x * 2);</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default MapTask;

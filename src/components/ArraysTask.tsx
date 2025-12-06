import React, { useState } from 'react';

const ArraysTask: React.FC = () => {
  const [inputStr, setInputStr] = useState<string>('10, 20, 30, 42, 50');
  const [result, setResult] = useState<string | null>(null);

  /**
   * Функция getLastElement возвращает последний элемент массива.
   * 
   * Алгоритм работы:
   * 1. Принимает массив в качестве аргумента.
   * 2. Обращается к элементу по индексу (длина массива - 1).
   * 3. Возвращает найденный элемент.
   */
  const getLastElement = (array: any[]): any => {
    if (array.length === 0) return undefined;
    return array[array.length - 1];
  };

  const handleGetLast = () => {
    // Преобразуем строку в массив, разделяя по запятым
    const array = inputStr.split(',').map(item => item.trim()).filter(item => item !== '');
    const last = getLastElement(array);
    setResult(last !== undefined ? last : 'Массив пуст');
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
          Модуль массивов: Последний элемент
        </h2>

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Входной массив (через запятую)</label>
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
              onClick={handleGetLast}
              className="px-8 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            >
              Получить элемент
            </button>
          </div>

          {result !== null && (
            <div className="border-t border-[#00FFFF]/30 pt-6 animate-pulse text-center">
              <span className="text-[#008888] uppercase tracking-wider mr-4">Результат:</span>
              <span className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-[#00FFFF]">
                {result}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Визуализация кода */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function getLastElement(array) &#123;</p>
        <p className="pl-4 text-[#00AAAA]">// Возвращает последний элемент массива</p>
        <p className="pl-4">return array[array.length - 1];</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default ArraysTask;

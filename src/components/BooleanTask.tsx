import React, { useState } from 'react';

const BooleanTask: React.FC = () => {
  // Состояние для хранения строкового ввода пользователя
  const [input1, setInput1] = useState<string>('true');
  const [input2, setInput2] = useState<string>('false');
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Функция isSame сравнивает два булевых значения.
   * 
   * Алгоритм работы:
   * 1. Принимает два аргумента типа boolean.
   * 2. Использует оператор строгого равенства (===) для сравнения.
   * 3. Возвращает true, если значения совпадают, иначе false.
   */
  const isSame = (a: boolean, b: boolean): boolean => {
    return a === b;
  };

  /**
   * Вспомогательная функция для преобразования строки в булево значение.
   * Принимает строку и возвращает boolean или null, если строка не является 'true' или 'false'.
   */
  const parseBoolean = (str: string): boolean | null => {
    const s = str.trim().toLowerCase();
    if (s === 'true') return true;
    if (s === 'false') return false;
    return null;
  };

  const handleCompare = () => {
    const val1 = parseBoolean(input1);
    const val2 = parseBoolean(input2);

    if (val1 === null || val2 === null) {
      setError('Пожалуйста, введите только "true" или "false".');
      setResult(null);
      return;
    }

    setError(null);
    setResult(isSame(val1, val2));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 mt-20 font-['Share_Tech_Mono'] text-[#00FFFF]">
      <div className="bg-black/80 border border-[#00FFFF] p-8 shadow-[0_0_20px_rgba(0,255,255,0.2)] relative overflow-hidden">
        {/* Декоративные углы */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF]"></div>

        <h2 className="text-3xl mb-8 text-center uppercase tracking-widest border-b border-[#00FFFF]/30 pb-4">
          Модуль логики: Сравнение
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          {/* Поле ввода для Значения A */}
          <div className="flex flex-col gap-4 items-center w-full md:w-1/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Значение A</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 text-center focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-xl"
              placeholder="true / false"
            />
            {/* Индикатор распознанного значения */}
            <div className="text-xs text-[#005555]">
              Распознано: {parseBoolean(input1) !== null ? parseBoolean(input1)?.toString().toUpperCase() : 'НЕВЕРНО'}
            </div>
          </div>

          <div className="text-2xl text-[#005555]">===</div>

          {/* Поле ввода для Значения B */}
          <div className="flex flex-col gap-4 items-center w-full md:w-1/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Значение B</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 text-center focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-xl"
              placeholder="true / false"
            />
            {/* Индикатор распознанного значения */}
            <div className="text-xs text-[#005555]">
              Распознано: {parseBoolean(input2) !== null ? parseBoolean(input2)?.toString().toUpperCase() : 'НЕВЕРНО'}
            </div>
          </div>
        </div>

        {/* Сообщение об ошибке */}
        {error && (
          <div className="text-[#FF0000] text-center mb-6 animate-pulse">
            {error}
          </div>
        )}

        <div className="flex justify-center mb-8">
          <button
            onClick={handleCompare}
            className="px-8 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          >
            Сравнить
          </button>
        </div>

        {result !== null && (
          <div className="border-t border-[#00FFFF]/30 pt-6 text-center animate-pulse">
            <span className="text-[#008888] uppercase tracking-wider mr-4">Результат:</span>
            <span className={`text-4xl font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${result ? 'text-[#00FFFF]' : 'text-[#FF0000]'}`}>
              {result.toString().toUpperCase()}
            </span>
          </div>
        )}
      </div>
      
      {/* Визуализация кода */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function isSame(a, b) &#123;</p>
        <p className="pl-4 text-[#00AAAA]">// Сравнивает два булевых значения</p>
        <p className="pl-4">return a === b;</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default BooleanTask;

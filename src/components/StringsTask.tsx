import React, { useState } from 'react';

const StringsTask: React.FC = () => {
  const [inputStr, setInputStr] = useState<string>('   Система обнаружена.   ');
  const [result, setResult] = useState<string | null>(null);

  /**
   * Функция trimSpaces удаляет пробелы в начале и конце строки.
   * 
   * Алгоритм работы:
   * 1. Используется регулярное выражение /^\s+|\s+$/g
   *    - ^\s+ : ищет один или более пробельных символов (\s) в начале строки (^)
   *    - |    : логическое ИЛИ
   *    - \s+$ : ищет один или более пробельных символов (\s) в конце строки ($)
   *    - g    : флаг global, чтобы найти все совпадения (хотя здесь это применяется к началу и концу)
   * 2. Метод replace заменяет найденные совпадения на пустую строку.
   */
  const trimSpaces = (str: string): string => {
    return str.replace(/^\s+|\s+$/g, '');
  };

  const handleTrim = () => {
    setResult(trimSpaces(inputStr));
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
          Модуль обработки строк: Trim
        </h2>

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Входная строка</label>
            <div className="relative">
              <input
                type="text"
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
                className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 pr-12 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono"
                placeholder="Введите текст с пробелами..."
              />
              <div className="absolute right-3 top-3 text-[#005555] text-xs pointer-events-none">
                LEN: {inputStr.length}
              </div>
            </div>
            <p className="text-xs text-[#005555]">
              * Пробелы визуально могут быть не видны, но они учитываются в длине строки.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleTrim}
              className="px-8 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            >
              Удалить пробелы
            </button>
          </div>

          {result !== null && (
            <div className="border-t border-[#00FFFF]/30 pt-6 animate-pulse">
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase tracking-wider text-[#008888]">Результат</label>
                <div className="relative">
                  <div className="w-full bg-[#002222] border border-[#00FFFF] text-[#00FFFF] p-3 font-mono">
                    "{result}"
                  </div>
                  <div className="absolute right-3 top-3 text-[#008888] text-xs">
                    LEN: {result.length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Code snippet visualization */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function trimSpaces(str) &#123;</p>
        <p className="pl-4 text-[#00AAAA]">// Удаляет пробелы в начале и конце</p>
        <p className="pl-4">return str.replace(/^\s+|\s+$/g, '');</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default StringsTask;

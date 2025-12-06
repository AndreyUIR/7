import React, { useState } from 'react';

const ForEachTask: React.FC = () => {
  const [inputStr, setInputStr] = useState<string>('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
  const [logs, setLogs] = useState<string[]>([]);

  /**
   * Функция logEven выводит четные числа в консоль.
   * 
   * Алгоритм работы:
   * 1. Перебирает массив с помощью метода forEach.
   * 2. Проверяет каждое число на четность (остаток от деления на 2 равен 0).
   * 3. Если число четное, выводит его в консоль.
   */
  const logEven = (array: number[]) => {
    const capturedLogs: string[] = [];
    
    // Переопределяем console.log для демонстрации в UI
    const originalLog = console.log;
    console.log = (...args) => {
      originalLog(...args);
      capturedLogs.push(args.join(' '));
    };

    array.forEach(num => {
      if (num % 2 === 0) {
        console.log(num);
      }
    });

    // Восстанавливаем console.log
    console.log = originalLog;
    setLogs(capturedLogs);
  };

  const handleProcess = () => {
    // Парсим числа из строки
    const numbers = inputStr.split(',')
      .map(item => parseFloat(item.trim()))
      .filter(item => !isNaN(item));
    
    logEven(numbers);
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
          Модуль ForEach: Фильтр четных
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
              Обработать
            </button>
          </div>

          {logs.length > 0 && (
            <div className="border-t border-[#00FFFF]/30 pt-6">
              <label className="text-sm uppercase tracking-wider text-[#008888] block mb-2">Вывод консоли:</label>
              <div className="bg-[#001111] border border-[#005555] p-4 font-mono text-[#00FF00] h-48 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="mb-1">{'>'} {log}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Визуализация кода */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function logEven(array) &#123;</p>
        <p className="pl-4">array.forEach(num =&gt; &#123;</p>
        <p className="pl-8 text-[#00AAAA]">// Выводит только четные числа</p>
        <p className="pl-8">if (num % 2 === 0) console.log(num);</p>
        <p className="pl-4">&#125;);</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default ForEachTask;

import React, { useState } from 'react';

const ObjectsTask: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>('{\n  "id": 1,\n  "name": "Draedon",\n  "active": true\n}');
  const [keyInput, setKeyInput] = useState<string>('name');
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Функция hasKey проверяет существование ключа в объекте.
   * 
   * Алгоритм работы:
   * 1. Использует оператор 'in' для проверки наличия свойства в объекте (включая прототип).
   * 2. Возвращает true, если ключ найден, иначе false.
   */
  const hasKey = (obj: any, key: string): boolean => {
    return key in obj;
  };

  const handleCheck = () => {
    try {
      const obj = JSON.parse(jsonInput);
      if (typeof obj !== 'object' || obj === null) {
        setError('Введенные данные не являются объектом.');
        setResult(null);
        return;
      }
      
      setError(null);
      setResult(hasKey(obj, keyInput));
    } catch (e) {
      setError('Ошибка парсинга JSON. Проверьте синтаксис.');
      setResult(null);
    }
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
          Модуль объектов: Проверка ключа
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Ввод объекта */}
          <div className="flex flex-col gap-2 w-full md:w-2/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Объект (JSON)</label>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-48 bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-sm resize-none"
              placeholder="{}"
            />
          </div>

          {/* Ввод ключа и действия */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-[#008888]">Искомый ключ</label>
              <input
                type="text"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono"
                placeholder="key"
              />
            </div>

            <button
              onClick={handleCheck}
              className="w-full py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            >
              Проверить
            </button>

            {/* Результат */}
            {error ? (
              <div className="text-[#FF0000] text-sm animate-pulse border border-[#FF0000]/50 p-2 bg-[#220000]">
                {error}
              </div>
            ) : result !== null && (
              <div className="border border-[#00FFFF]/30 p-4 text-center animate-pulse bg-[#001111]">
                <span className="text-[#008888] uppercase tracking-wider block mb-2">Результат</span>
                <span className={`text-3xl font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${result ? 'text-[#00FFFF]' : 'text-[#FF0000]'}`}>
                  {result.toString().toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Визуализация кода */}
      <div className="mt-8 bg-black/90 border border-[#005555] p-4 font-mono text-sm text-[#008888] opacity-80">
        <p className="mb-2">// Внутренняя логика</p>
        <p>function hasKey(obj, key) &#123;</p>
        <p className="pl-4 text-[#00AAAA]">// Проверяет наличие ключа в объекте</p>
        <p className="pl-4">return key in obj;</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default ObjectsTask;

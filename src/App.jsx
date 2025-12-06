import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const DraedonDialog = ({ 
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
             <div className="absolute inset-0 bg-[url('https://public.youware.com/users-website-assets/prod/7f985158-a3a9-4179-9e31-2c698e289d48/89a28730fed94384ab1a402e9972a4b3')] bg-center bg-cover bg-no-repeat opacity-80 group-hover:opacity-100 transition-opacity"></div>
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

const MainTaskMenu = ({ onSelect }) => {
  const options = [
    "Числа",
    "Строки",
    "Булевы значения",
    "Объекты",
    "Задачи на массивы",
    "Задачи на обработку массивов с помощью ForEach",
    "Задачи на Map"
  ];

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

const NumbersTask = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const multiply = (a, b) => {
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

const StringsTask = () => {
  const [inputStr, setInputStr] = useState('   Система обнаружена.   ');
  const [result, setResult] = useState(null);

  const trimSpaces = (str) => {
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

const BooleanTask = () => {
  const [input1, setInput1] = useState('true');
  const [input2, setInput2] = useState('false');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const isSame = (a, b) => {
    return a === b;
  };

  const parseBoolean = (str) => {
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
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF]"></div>

        <h2 className="text-3xl mb-8 text-center uppercase tracking-widest border-b border-[#00FFFF]/30 pb-4">
          Модуль логики: Сравнение
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div className="flex flex-col gap-4 items-center w-full md:w-1/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Значение A</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 text-center focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-xl"
              placeholder="true / false"
            />
            <div className="text-xs text-[#005555]">
              Распознано: {parseBoolean(input1) !== null ? parseBoolean(input1).toString().toUpperCase() : 'НЕВЕРНО'}
            </div>
          </div>

          <div className="text-2xl text-[#005555]">===</div>

          <div className="flex flex-col gap-4 items-center w-full md:w-1/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Значение B</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="w-full bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 text-center focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-xl"
              placeholder="true / false"
            />
            <div className="text-xs text-[#005555]">
              Распознано: {parseBoolean(input2) !== null ? parseBoolean(input2).toString().toUpperCase() : 'НЕВЕРНО'}
            </div>
          </div>
        </div>

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
      
      {/* Code snippet visualization */}
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

const ObjectsTask = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "id": 1,\n  "name": "Draedon",\n  "active": true\n}');
  const [keyInput, setKeyInput] = useState('name');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const hasKey = (obj, key) => {
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
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF]"></div>

        <h2 className="text-3xl mb-8 text-center uppercase tracking-widest border-b border-[#00FFFF]/30 pb-4">
          Модуль объектов: Проверка ключа
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex flex-col gap-2 w-full md:w-2/3">
            <label className="text-sm uppercase tracking-wider text-[#008888]">Объект (JSON)</label>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-48 bg-[#001111] border border-[#005555] text-[#00FFFF] p-3 focus:border-[#00FFFF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-sm resize-none"
              placeholder="{}"
            />
          </div>

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
      
      {/* Code snippet visualization */}
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

const ArraysTask = () => {
  const [inputStr, setInputStr] = useState('10, 20, 30, 42, 50');
  const [result, setResult] = useState(null);

  const getLastElement = (array) => {
    if (array.length === 0) return undefined;
    return array[array.length - 1];
  };

  const handleGetLast = () => {
    const array = inputStr.split(',').map(item => item.trim()).filter(item => item !== '');
    const last = getLastElement(array);
    setResult(last !== undefined ? last : 'Массив пуст');
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
      
      {/* Code snippet visualization */}
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

const ForEachTask = () => {
  const [inputStr, setInputStr] = useState('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
  const [logs, setLogs] = useState([]);

  const logEven = (array) => {
    const capturedLogs = [];
    
    // Override console.log for demo
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

    // Restore console.log
    console.log = originalLog;
    setLogs(capturedLogs);
  };

  const handleProcess = () => {
    const numbers = inputStr.split(',')
      .map(item => parseFloat(item.trim()))
      .filter(item => !isNaN(item));
    
    logEven(numbers);
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
      
      {/* Code snippet visualization */}
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

const MapTask = () => {
  const [inputStr, setInputStr] = useState('1, 2, 3, 5, 8, 13');
  const [result, setResult] = useState(null);

  const doubleElements = (array) => {
    return array.map(x => x * 2);
  };

  const handleProcess = () => {
    const numbers = inputStr.split(',')
      .map(item => parseFloat(item.trim()))
      .filter(item => !isNaN(item));
    
    setResult(doubleElements(numbers));
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
      
      {/* Code snippet visualization */}
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

const DraedonLore = ({ onBack }) => {
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

        <div className="space-y-6 text-[#E0FFFF] leading-relaxed mb-8">
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

        <div className="flex justify-center">
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          >
            Назад к выбору
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

function App() {
  const [view, setView] = useState('intro');
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Timer for 7 seconds only for initial intro
    if (view === 'intro') {
      const timer = setTimeout(() => {
        setShowDialog(true);
      }, 7000);
      return () => clearTimeout(timer);
    } else {
      setShowDialog(true);
    }
  }, [view]);

  const handleMainTask = () => {
    setView('mainTask');
  };

  const handleMyStory = () => {
    setView('draedonLore');
  };

  const handleBack = () => {
    if (view !== 'intro' && view !== 'mainTask') {
      setView('mainTask');
    } else {
      setView('intro');
    }
  };

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
    switch (option) {
      case "Числа":
        setView('numbersTask');
        break;
      case "Строки":
        setView('stringsTask');
        break;
      case "Булевы значения":
        setView('booleanTask');
        break;
      case "Объекты":
        setView('objectsTask');
        break;
      case "Задачи на массивы":
        setView('arraysTask');
        break;
      case "Задачи на обработку массивов с помощью ForEach":
        setView('forEachTask');
        break;
      case "Задачи на Map":
        setView('mapTask');
        break;
      default:
        console.warn("Unknown option:", option);
    }
  };

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'Py9lmMSWhb0', // Needed for loop to work
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };

  return (
    <main 
      className="min-h-screen bg-black relative overflow-hidden cursor-crosshair flex flex-col"
    >
      {/* Background ambience/stars could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#000000] to-[#000000] -z-20"></div>
      
      {/* Optional: Subtle tech background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-[#00FFFF] rounded-tl-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-[#00FFFF] rounded-br-3xl"></div>
      </div>

      {/* Hidden YouTube Player */}
      <div className="absolute top-0 left-0 opacity-0 pointer-events-none">
        <YouTube videoId="Py9lmMSWhb0" opts={opts} />
      </div>

      {/* Back Button */}
      {view !== 'intro' && view !== 'draedonLore' && (
        <button 
          onClick={handleBack}
          className="absolute top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-[#002222] border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </button>
      )}

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 overflow-y-auto scrollbar-hide">
        {view === 'mainTask' && (
          <div className="pb-64">
            <MainTaskMenu onSelect={handleOptionSelect} />
          </div>
        )}
        {view === 'numbersTask' && (
          <div className="pb-64">
            <NumbersTask />
          </div>
        )}
        {view === 'stringsTask' && (
          <div className="pb-64">
            <StringsTask />
          </div>
        )}
        {view === 'booleanTask' && (
          <div className="pb-64">
            <BooleanTask />
          </div>
        )}
        {view === 'objectsTask' && (
          <div className="pb-64">
            <ObjectsTask />
          </div>
        )}
        {view === 'arraysTask' && (
          <div className="pb-64">
            <ArraysTask />
          </div>
        )}
        {view === 'forEachTask' && (
          <div className="pb-64">
            <ForEachTask />
          </div>
        )}
        {view === 'mapTask' && (
          <div className="pb-64">
            <MapTask />
          </div>
        )}
        {view === 'draedonLore' && (
          <DraedonLore onBack={handleBack} />
        )}
      </div>

      {/* Dialog Overlay */}
      {showDialog && view !== 'draedonLore' && (
        <>
          {view === 'intro' && (
            <DraedonDialog 
              onMainTask={handleMainTask}
              onMyStory={handleMyStory}
              className="bottom-12"
            />
          )}
          {view === 'mainTask' && (
            <DraedonDialog 
              message="Так значит Вас интересует использование JavaScript? Признаюсь, я удивлён, но выбирайте что вас интересует."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'numbersTask' && (
            <DraedonDialog 
              message="Алгоритм 'multiply' принимает два числовых аргумента. Он выполняет арифметическую операцию умножения, возвращая произведение этих значений. Примитивное, но фундаментальное вычисление."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'stringsTask' && (
            <DraedonDialog 
              message="Строковые данные часто содержат избыточную информацию. Функция 'trimSpaces' очищает данные от 'шума' в виде пробелов по краям, оставляя лишь суть. Эффективность превыше всего."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'booleanTask' && (
            <DraedonDialog 
              message="Логика — основа любой вычислительной системы. Истина или ложь. Единица или ноль. Функция 'isSame' определяет идентичность двух состояний с абсолютной точностью."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'objectsTask' && (
            <DraedonDialog 
              message="Объекты хранят данные в структурированном виде. Функция 'hasKey' позволяет мгновенно определить наличие необходимого параметра в сложной структуре данных."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'arraysTask' && (
            <DraedonDialog 
              message="Массивы — это упорядоченные последовательности. Доступ к последнему элементу часто требуется для анализа завершающих данных потока. 'getLastElement' выполняет эту задачу."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'forEachTask' && (
            <DraedonDialog 
              message="Итерация — ключ к обработке больших объемов данных. 'logEven' фильтрует поток, выделяя лишь четные значения, соответствующие заданным критериям."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
          {view === 'mapTask' && (
            <DraedonDialog 
              message="Трансформация данных — важный этап обработки. Метод 'map' позволяет изменить каждый элемент массива согласно заданному алгоритму, создавая новую структуру."
              showDefaultButtons={false}
              className="bottom-0"
            />
          )}
        </>
      )}
    </main>
  );
}

export default App;

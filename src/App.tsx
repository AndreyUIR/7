import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import DraedonDialog from '7/src/components/DraedonDialog';
import MainTaskMenu from '7/src/components/MainTaskMenu';
import NumbersTask from '7/src/components/NumbersTask';
import StringsTask from '7/src/components/StringsTask';
import BooleanTask from '7/src/components/BooleanTask';
import ObjectsTask from '7/src/components/ObjectsTask';
import ArraysTask from '7/src/components/ArraysTask';
import ForEachTask from '7/src/components/ForEachTask';
import MapTask from '7/src/components/MapTask';
import DraedonLore from '7/src/components/DraedonLore';
import { ArrowLeft } from 'lucide-react';

type ViewState = 'intro' | 'mainTask' | 'numbersTask' | 'stringsTask' | 'booleanTask' | 'objectsTask' | 'arraysTask' | 'forEachTask' | 'mapTask' | 'myStory' | 'draedonLore';

function App() {
  const [view, setView] = useState<ViewState>('intro');
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

  const handleOptionSelect = (option: string) => {
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
          <DraedonLore />
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

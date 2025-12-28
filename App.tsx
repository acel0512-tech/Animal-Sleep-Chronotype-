import React, { useState, useCallback } from 'react';
import { PART1_QUESTIONS, PART2_QUESTIONS, ANIMAL_RESULTS } from './constants';
import { AnimalType, AnimalResult } from './types';
import { BookOpen, CheckCircle2, Circle, ArrowRight, RotateCcw } from 'lucide-react';

// --- Components ---

const Header = () => (
  <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
    <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 p-2 rounded-lg">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-lg font-bold text-slate-800">動物睡眠類型檢測</h1>
      </div>
      <div className="text-sm text-slate-500 hidden sm:block">
        麥可．布勞斯 (Michael Breus)
      </div>
    </div>
  </header>
);

const WelcomeScreen = ({ onStart }: { onStart: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-8 animate-fade-in">
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-lg border border-slate-100">
      <div className="text-6xl mb-6">😴</div>
      <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
        你是哪種動物睡眠類型？
      </h2>
      <p className="text-slate-600 mb-8 leading-relaxed">
        透過簡單的測驗，了解你的生理時鐘是屬於海豚、獅子、熊還是狼。
        掌握自己的睡眠類型，能幫助你提升睡眠品質與生活效率！
      </p>
      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full sm:w-auto"
      >
        開始檢測
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const Part1Quiz = ({
  onSubmit,
}: {
  onSubmit: (score: number) => void;
}) => {
  // Store boolean answers for 10 questions. Init with false.
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (id: number) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateAndSubmit = () => {
    const yesCount = Object.values(answers).filter(Boolean).length;
    onSubmit(yesCount);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">題組一：是非題</h3>
        <p className="text-slate-500 text-center">請勾選符合你目前狀況的描述</p>
      </div>

      <div className="space-y-4">
        {PART1_QUESTIONS.map((q) => {
          const isSelected = !!answers[q.id];
          return (
            <div
              key={q.id}
              onClick={() => toggleAnswer(q.id)}
              className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 select-none ${
                isSelected
                  ? 'border-secondary bg-pink-50'
                  : 'border-transparent bg-white shadow-sm hover:bg-slate-50'
              }`}
            >
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  isSelected
                    ? 'border-secondary bg-secondary text-white'
                    : 'border-slate-300'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-4 h-4" />}
              </div>
              <span className={`text-lg ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>
                {q.text}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={calculateAndSubmit}
          className="bg-primary hover:bg-indigo-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-lg"
        >
          下一步
        </button>
      </div>
    </div>
  );
};

const Part2Quiz = ({
  onFinish,
}: {
  onFinish: (totalScore: number) => void;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const currentQuestion = PART2_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / PART2_QUESTIONS.length) * 100;

  const handleOptionClick = (points: number) => {
    const newScores = [...scores, points];
    if (currentQuestionIndex < PART2_QUESTIONS.length - 1) {
      setScores(newScores);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finished
      const total = newScores.reduce((a, b) => a + b, 0);
      onFinish(total);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in w-full">
       <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">題組二：選擇題</h3>
        <p className="text-slate-500 text-center">
          第 {currentQuestionIndex + 1} 題 / 共 {PART2_QUESTIONS.length} 題
        </p>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-4">
          <div className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-100 min-h-[400px] flex flex-col justify-center">
        <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 text-center leading-relaxed">
          {currentQuestion.text}
        </h4>
        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option.points)}
              className="w-full text-left p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-primary hover:bg-indigo-50 transition-all duration-200 group flex items-center justify-between"
            >
              <span className="text-slate-700 text-lg group-hover:text-primary font-medium">{option.text}</span>
              <Circle className="w-5 h-5 text-slate-300 group-hover:text-primary" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResultScreen = ({ result, onRestart }: { result: AnimalResult; onRestart: () => void }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className={`rounded-3xl shadow-2xl overflow-hidden bg-white border-4 ${result.color.replace('bg-', 'border-').split(' ')[2] || 'border-slate-200'}`}>
        
        {/* Header Section */}
        <div className={`p-8 sm:p-12 text-center ${result.color}`}>
          <div className="text-8xl mb-4 animate-bounce-slow filter drop-shadow-md">{result.icon}</div>
          <h2 className="text-4xl font-extrabold mb-2">你是「{result.name}」</h2>
          <p className="text-xl opacity-90 font-medium">佔人口約 {result.percentage}</p>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                <span className="w-1.5 h-6 bg-slate-800 mr-2 rounded-full"></span>
                特徵描述
              </h3>
              <ul className="space-y-3">
                {result.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            
             <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                <span className="w-1.5 h-6 bg-slate-800 mr-2 rounded-full"></span>
                性格特質
              </h3>
              <p className="text-slate-600 leading-relaxed p-4 bg-slate-50 rounded-xl border border-slate-100">
                {result.personality}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                <span className="w-1.5 h-6 bg-slate-800 mr-2 rounded-full"></span>
                最佳作息
              </h3>
               <div className="text-slate-600 leading-relaxed p-4 bg-yellow-50 rounded-xl border border-yellow-100 flex items-start">
                  <span className="text-2xl mr-3">⏰</span>
                  <span>{result.schedule}</span>
               </div>
            </div>

            <div className="pt-8 flex justify-center md:justify-end items-end h-full">
                 <button
                  onClick={onRestart}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-semibold px-6 py-3 rounded-lg hover:bg-slate-50"
                >
                  <RotateCcw className="w-5 h-5" />
                  重新測驗
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main App Logic ---

enum Step {
  WELCOME,
  PART1,
  PART2,
  RESULT,
}

export default function App() {
  const [step, setStep] = useState<Step>(Step.WELCOME);
  const [result, setResult] = useState<AnimalResult | null>(null);

  const startQuiz = () => setStep(Step.PART1);

  const handlePart1Submit = useCallback((trueCount: number) => {
    // Logic from Page 2: "If you have 7 or more 'Yes', your type is Dolphin"
    if (trueCount >= 7) {
      setResult(ANIMAL_RESULTS[AnimalType.DOLPHIN]);
      setStep(Step.RESULT);
    } else {
      // "If less than 7 'Yes', please continue to Question Set 2"
      setStep(Step.PART2);
    }
  }, []);

  const handlePart2Submit = useCallback((totalScore: number) => {
    // Logic from Page 5:
    // 10~16: Lion
    // 17~23: Bear
    // 24~30: Wolf
    
    let type: AnimalType = AnimalType.BEAR; // Default fallthrough
    
    if (totalScore >= 10 && totalScore <= 16) {
      type = AnimalType.LION;
    } else if (totalScore >= 17 && totalScore <= 23) {
      type = AnimalType.BEAR;
    } else if (totalScore >= 24) {
      type = AnimalType.WOLF;
    } else {
        // Edge case if score < 10 (unlikely with min 10 questions x 1 point)
        type = AnimalType.LION; 
    }

    setResult(ANIMAL_RESULTS[type]);
    setStep(Step.RESULT);
  }, []);

  const resetQuiz = () => {
    setStep(Step.WELCOME);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">
      <Header />
      
      <main className="flex-grow flex flex-col justify-start pt-8 pb-16">
        {step === Step.WELCOME && <WelcomeScreen onStart={startQuiz} />}
        {step === Step.PART1 && <Part1Quiz onSubmit={handlePart1Submit} />}
        {step === Step.PART2 && <Part2Quiz onFinish={handlePart2Submit} />}
        {step === Step.RESULT && result && (
          <ResultScreen result={result} onRestart={resetQuiz} />
        )}
      </main>

      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>© 2024 Sleep Type Quiz. Based on The Power of When.</p>
      </footer>
    </div>
  );
}
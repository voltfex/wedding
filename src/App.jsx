import {useEffect, useRef, useState} from 'react';
import Dear from './assets/text-image/Group_61-2.svg';
import WeMarried from './assets/text-image/weMarried.svg';
import Paper1 from './assets/text-image/Paper1.png';
import Paper2 from './assets/text-image/Paper2.png';
import Heart from './assets/text-image/heart.svg';
import Programm from './assets/text-image/programm.svg';
import Vecotr from './assets/text-image/Vector_1.svg'
import Dress from './assets/text-image/dress.svg'
import Detail from './assets/text-image/details.svg'
import Anketa from './assets/text-image/anketa.svg'
import './App.css';
import MusicPlayer from "./components/MusicPlayer.tsx";

function App() {
    const papersRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!papersRef.current) return;
            const rect = papersRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            let progress = 0;
            if (rect.top < windowHeight && rect.bottom > 0) {
                progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                progress = Math.min(Math.max(progress, 0), 1);
            }
            setOffset(progress);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftTransform = offset < 0.3 ? 10 : Math.min((offset - 0.3) / 0.2, 1) * -100;
    const rightTransform = offset < 0.3 ? -10 : Math.min((offset - 0.3) / 0.2, 1) * 100;

    return (
        <div className="flex justify-center min-h-screen bg-[#FCF7EE] overflow-hidden text-[#464040]">
            <MusicPlayer />
            <div className="max-w-[360px] w-full py-10 px-4">
                <div className="flex flex-col space-y-14 text-center items-center">

                    {/* Блок приветствия */}
                    <div className="space-y-6 flex flex-col items-center">
                        <p className="text-lg uppercase tracking-widest">Вы дождались...</p>
                        <img src={WeMarried} alt="Мы женимся!" className="w-full"/>
                        <img src={Dear} alt="Дорогие наши гости" className="w-3/4"/>
                        <p className="text-base leading-relaxed">
                            Мы приглашаем вас разделить <br/>
                            с нами одно из важных событий —
                        </p>
                        <h3 className="text-[#820100] text-3xl font-serif">НАШУ СВАДЬБУ</h3>
                    </div>

                    {/* Блок с календарем (Papers) */}
                    <div ref={papersRef} className="papers flex justify-center gap-2 relative">
                        <img
                            src={Paper1}
                            alt=""
                            className="paper"
                            style={{
                                transform: `translateX(${leftTransform}px)`,
                                transition: 'transform 0.2s linear',
                            }}
                        />
                        <div className='absolute top-[50%]'>
                            <div className='flex items-start gap-4 text-2xl'>
                                <p className='opacity-30 text-lg'>11</p>
                                <p className='text-xl'>12</p>
                                <div>
                                    <p className='text-[#820100]'>13</p>
                                    <p className='text-[#820100] pt-4'>июня</p>
                                </div>
                                <p className='text-xl'>14</p>
                                <p className='opacity-30 text-lg'>15</p>
                            </div>
                        </div>
                        <img className='absolute w-full top-[43%] left-[-3px]' src={Heart} alt="heart"/>
                        <img
                            src={Paper2}
                            alt=""
                            className="paper"
                            style={{
                                transform: `translateX(${rightTransform}px)`,
                                transition: 'transform 0.2s linear',
                            }}
                        />
                    </div>
                    {/* Блок места проведения */}
                    <div className="space-y-2">
                        <p className="text-base">Праздник пройдет в ресторане</p>
                        <p className="text-xl font-semibold">'Sher Hof'</p>
                        <p className="text-sm opacity-80">Адрес: г. Азов, пляжный проезд 18</p>
                    </div>

                    {/* Программа дня */}
                    <div className='flex flex-col items-center w-full'>
                        <img className='w-[200px] mb-8' src={Programm} alt="Программа дня"/>
                        <div className='relative w-full h-[350px]'>
                            <img className='absolute left-1/2 -translate-x-1/2 h-full' src={Vecotr} alt="vector"/>

                            {/* Точки программы с фиксированным позиционированием */}
                            <div className='absolute top-0 left-[20%] text-left'>
                                <p className="font-bold">16:00</p>
                                <p className="text-sm">Сбор гостей</p>
                            </div>
                            <div className='absolute top-[25%] right-[25%] text-right'>
                                <p className="font-bold">16:30</p>
                                <p className="text-sm">Торжественная<br/> церемония</p>
                            </div>
                            <div className='absolute top-[70%] left-[25%] text-left'>
                                <p className="font-bold">17:00</p>
                                <p className="text-sm">Начало банкета</p>
                            </div>
                            <div className='absolute bottom-[-10%] right-[10%] text-right'>
                                <p className="font-bold">23:00</p>
                                <p className="text-sm">Окончание вечера</p>
                            </div>
                        </div>
                    </div>

                    {/* Дресс-код */}
                    <div className="space-y-8 w-full flex flex-col items-center">
                        <img className='w-[200px]' src={Dress} alt="Dress Code"/>
                        <p className="text-base px-4">Поддержите нас красивыми нарядами в палитре торжества:</p>

                        <div className='flex -space-x-4 justify-center'>
                            <div className='bg-[#464040] w-16 h-16 rounded-full ring-4 ring-white shadow-sm'></div>
                            <div className='bg-[#E0CDBB] w-16 h-16 rounded-full ring-4 ring-white shadow-sm'></div>
                            <div className='bg-[#BFB7AF] w-16 h-16 rounded-full ring-4 ring-white shadow-sm'></div>
                            <div className='bg-[#C0D8E8] w-16 h-16 rounded-full ring-4 ring-white shadow-sm'></div>
                            <div className='bg-[#202539] w-16 h-16 rounded-full ring-4 ring-white shadow-sm'></div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 w-full pt-4">
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <img
                                    key={num}
                                    src={`../public/dress/${num}.webp`}
                                    alt=""
                                    className="w-full aspect-3/4 object-cover rounded-sm shadow-sm"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Блок Детали */}
                    <div className="flex flex-col items-center space-y-6 px-2">
                        {/* Заголовок-картинка "Детали" */}
                        <img src={Detail} alt='Детали' className="w-[180px] h-auto"/>

                        {/* Первый текстовый блок (про конверты) */}
                        <div className="space-y-1">
                            <p className="text-base leading-snug">
                                Ваши улыбки и смех подарят нам<br/>
                                незабываемое счастье в этот день
                            </p>
                        </div>

                        {/* Декоративное сердечко со стрелой (если есть картинка, замени Heart на неё) */}
                        <div className="py-2 opacity-60">
                            <img src='../public/heart.webp' alt="❤️" className="w-10 h-auto"/>
                        </div>

                        {/* Второй текстовый блок (про вино) */}
                        <p className="text-base leading-relaxed max-w-[300px]">Вместо цветов мы будем рады принять от
                            вас частичку праздничного настроения в стекле, которое мы разделим с вами при следующей
                            встрече.</p>
                    </div>

                    {/* Блок Анкета */}
                    <div className="flex flex-col items-center space-y-8 w-full px-4 pt-10">
                        {/* Заголовок из твоего ассета */}
                        <img src={Anketa} alt="Анкета" className="w-[180px] h-auto"/>

                        <p className="text-base leading-relaxed">
                            Просим вас сообщить, сможете вы быть <br/>
                            с нами, заполнив форму ниже:
                        </p>

                        {/* Замени тег <form> на этот */}
                        <form
                            action="https://formspree.io/f/mojjwnjw" // Сюда вставишь ID, который получишь ниже
                            method="POST"
                            className="w-full space-y-10 text-left"
                        >
                            {/* Поле Имя */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium opacity-70 ml-1">Имя и Фамилия</label>
                                <input
                                    type="text"
                                    name="Свадьба" // ОБЯЗАТЕЛЬНО: Formspree использует это имя для письма
                                    required
                                    className="w-full border-b border-[#E0CDBB] bg-transparent py-2 px-1 focus:outline-none focus:border-[#820100] transition-colors"
                                    placeholder="Введите ваше имя"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium opacity-70 ml-1">Дополнительная информация</label>
                                <textarea
                                    name="message"
                                    rows="2"
                                    className={`w-full border-b border-[#E0CDBB] bg-transparent py-2 px-1 focus:outline-none focus:border-[#820100] transition-colors resize-none`}
                                    placeholder="Если хотите уточнить что-то, можете написать это здесь..."
                                ></textarea>
                            </div>

                            {/* Радио-кнопки */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium opacity-70 ml-1">Подтвердите присутствие на
                                    торжестве</p>
                                <div className="flex flex-col space-y-3">
                                    {[
                                        {val: 'yes', label: 'Смогу прийти'},
                                        {val: 'no', label: 'Не смогу прийти'},
                                        {val: 'later', label: 'Сообщу позже'}
                                    ].map((option, idx) => (
                                        <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name="presence" // Одинаковое имя для группы
                                                    value={option.label} // Это значение придет в письме
                                                    className="peer appearance-none w-5 h-5 border border-[#BFB7AF] rounded-full checked:border-[#820100] transition-all"
                                                />
                                                <div
                                                    className="absolute w-2.5 h-2.5 bg-[#820100] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                            </div>
                                            <span
                                                className="text-base group-hover:text-[#820100] transition-colors">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-[#557153] text-white px-12 py-3 rounded-md text-lg hover:bg-[#3d523b] transition-colors shadow-sm"
                                >
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
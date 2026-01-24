import {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion'; // 1. Импортируем motion
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
import HeartWebp from './assets/heart.webp';
import Dress1 from './assets/dress/1.webp';
import Dress2 from './assets/dress/2.webp';
import Dress3 from './assets/dress/3.png';
import Dress4 from './assets/dress/4.jpg';
import Dress5 from './assets/dress/5.webp';
import Dress6 from './assets/dress/6.jpg';
import Main from './assets/main.jpg';
import './App.css';
import MusicPlayer from "./components/MusicPlayer.tsx";

const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.8, ease: "easeOut"}
    }
};

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

    const leftTransform = offset < 0.6 ? 12 : Math.min((offset - 0.3) / 0.2, 1) * -100;
    const rightTransform = offset < 0.6 ? -12 : Math.min((offset - 0.3) / 0.2, 1) * 100;

    return (
        <div className="flex justify-center min-h-screen bg-[#FCF7EE] overflow-hidden text-[#464040]">
            <MusicPlayer/>
            <div className="max-w-[360px] w-full py-10 px-4">
                <div className="flex flex-col space-y-20 text-center items-center">

                    {/* Блок приветствия */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        className="space-y-6 flex flex-col items-center"
                    >
                        <p className="text-lg uppercase tracking-widest">Вы дождались...</p>
                        <div className='flex flex-col items-center justify-center gap-4f'>
                            <img src={WeMarried} alt="Мы женимся!" className="w-full"/>
                            <img src={Main} alt="Наше фото" className='pb-6 pt-10'/>
                        </div>
                        <img src={Dear} alt="Дорогие наши гости" className="w-full"/>
                        <p className="text-base leading-relaxed">
                            Мы приглашаем вас разделить <br/>
                            с нами одно из важных событий —
                        </p>
                        <h3 className="text-[#820100] text-3xl font-serif">НАШУ СВАДЬБУ</h3>
                    </motion.div>

                    {/* Блок с календарем (Оставляем твою логику скролла, но оборачиваем в motion для появления) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                        variants={fadeInUp}
                        ref={papersRef}
                        className="papers flex justify-center gap-2 relative"
                    >
                        <img
                            src={Paper1}
                            alt=""
                            className="paper"
                            style={{
                                transform: `translateX(${leftTransform}px)`,
                                transition: 'transform 0.4s ease-out', // Сделал чуть плавнее
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
                                transition: 'transform 0.4s ease-out',
                            }}
                        />
                    </motion.div>

                    {/* Блок места проведения */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        className="space-y-2"
                    >
                        <p className="text-base">Праздник пройдет в ресторане</p>
                        <p className="text-xl font-medium">'Sher Hof'</p>
                        <p className="text-sm opacity-80">Адрес: г. Азов, пляжный проезд 18</p>
                    </motion.div>

                    {/* Программа дня */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        className='flex flex-col items-center w-full'
                    >
                        <img className='w-full mb-8' src={Programm} alt="Программа дня"/>
                        <div className='relative w-full h-[350px]'>
                            <img className='absolute left-1/2 -translate-x-1/2 h-full' src={Vecotr} alt="vector"/>

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
                    </motion.div>

                    {/* Дресс-код */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        className="space-y-8 w-full flex flex-col items-center"
                    >
                        <img className='w-[250px]' src={Dress} alt="Dress Code"/>
                        <p className="text-base px-4">По желанию поддержите нас красивыми нарядами в палитре торжества</p>

                        <div className='flex -space-x-4 justify-center'>
                            {['#D4CEC8', '#C4C6B3', '#43453B', '#96816A', '#765542'].map((color, i) => (
                                <motion.div
                                    key={i}
                                    initial={{scale: 0}}
                                    whileInView={{scale: 1}}
                                    transition={{delay: i * 0.1}}
                                    viewport={{once: true}}
                                    style={{backgroundColor: color}}
                                    className='w-16 h-16 rounded-full ring-4 ring-white shadow-sm'
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 w-full pt-4">
                            {[Dress1, Dress2, Dress3, Dress4, Dress5, Dress6].map((dressImg, idx) => (
                                <motion.img
                                    key={idx + 1}
                                    src={dressImg}
                                    whileHover={{scale: 1.05}}
                                    className="w-full aspect-3/4 object-cover rounded-sm shadow-sm"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Блок Детали */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        className="flex flex-col items-center space-y-6 px-2"
                    >
                        <img src={Detail} alt='Детали' className="w-[250px] h-auto"/>
                        <div className="space-y-1">
                            <p className="text-base leading-snug">
                                Ваши улыбки и смех подарят нам<br/>
                                незабываемое счастье в этот день
                            </p>
                        </div>
                        <motion.div
                            animate={{scale: [1, 1.2, 1]}}
                            transition={{repeat: Infinity, duration: 2}}
                            className="py-2 opacity-60"
                        >
                            <img src={HeartWebp} alt="❤️" className="w-10 h-auto"/>
                        </motion.div>
                        <p className="text-base leading-relaxed max-w-[300px]">
                            Вместо цветов мы будем рады принять от вас частичку праздничного настроения в стекле...
                        </p>
                    </motion.div>

                    {/* Блок Анкета */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        className="flex flex-col items-center space-y-8 w-full px-4 pt-10"
                    >
                        <img src={Anketa} alt="Анкета" className="w-[250px] h-auto"/>
                        <form
                            action="https://formspree.io/f/mojjwnjw"
                            method="POST"
                            className="w-full space-y-10 text-left"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium opacity-70 ml-1">Имя и Фамилия</label>
                                <input
                                    type="text"
                                    name="Name"
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
                                <motion.button
                                    whileTap={{scale: 0.95}}
                                    type="submit"
                                    className="bg-[#557153] text-white px-12 py-3 rounded-md text-lg hover:bg-[#3d523b] transition-colors shadow-sm"
                                >
                                    Отправить
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default App;
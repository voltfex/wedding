import { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => console.log("Браузер заблокировал автоплей, ждем клика..."));
            }
        };

        // Слушаем клик по всему документу
        document.addEventListener('click', playAudio, { once: true });
        document.addEventListener('touchstart', playAudio, { once: true });

        return () => {
            document.removeEventListener('click', playAudio);
            document.removeEventListener('touchstart', playAudio);
        };
    }, [isPlaying]);

    return (
        <audio ref={audioRef} loop>
            <source src="../../public/music.mp3" type="audio/mpeg" />
        </audio>
    );
};

export default MusicPlayer;
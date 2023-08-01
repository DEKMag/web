// import { useState, useEffect } from 'react';
// import styles from './WallpaperChanger.module.css';

// const WallpaperChanger = () => {
//   const [currentWallpaper, setCurrentWallpaper] = useState(0);
//   const wallpapers = [
//     'https://s1.1zoom.me/b5050/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1920x1080.jpg',
//     'https://images.wallpaperscraft.ru/image/single/luzhajka_les_gory_144578_1920x1080.jpg',
//     'https://img1.akspic.ru/crops/5/2/0/4/5/154025/154025-firewatch_zakat-firewatch-v_doline_bogov-kampo_santo-playstation_4-1920x1080.jpg',
//     // Add more wallpaper URLs as needed
//   ];

//   const changeWallpaper = () => {
//     setCurrentWallpaper(
//       (prevWallpaper) => (prevWallpaper + 1) % wallpapers.length
//     );
//   };

//   useEffect(() => {
//     // Change the wallpaper every 10 seconds (adjust the interval as needed)
//     const interval = setInterval(changeWallpaper, 100000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const wallpaperStyle = {
//     width: '100vw',
//     height: '100vh',
//     background: `url(${wallpapers[currentWallpaper]}) center/cover no-repeat`,
//   };

//   return (
//     <div className={styles.wallpaperChangerContainer} style={wallpaperStyle} />
//   );
// };

// export default WallpaperChanger;

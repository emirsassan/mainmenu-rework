import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/components/home/HomePage.tsx';

export const App = () => {

  return (
    <HashRouter>
      <Routes>
        {/* Empty page */}
        <Route path="/" element={<div className="hidden"></div>}/>

        {/* Home page (main menu) */}
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </HashRouter>
  );
};
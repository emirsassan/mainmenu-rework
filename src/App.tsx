import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/components/home/HomePage.tsx';
import { Initializer } from '@/components/Initializer.tsx';

export const App = () => {
  // const initializer = useMemo(() => {
  //   return <Initializer/>;
  // }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Initializer/>}>
          {/* main page */}
          <Route index element={<Navigate to="/home"/>}/>

          {/* Home page (main menu) */}
          <Route path="/home" element={<HomePage/>}/>

          {/* Empty page */}
          <Route path="/blank" element={<></>}/>
        </Route>

      </Routes>
    </HashRouter>
  );
};
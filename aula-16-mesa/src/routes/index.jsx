import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCEP from '../pages/ViaCEP';
import BrasilAPICEP from '../pages/BrasilAPCICEP';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ViaCEP />} />
      <Route path='/brasilapi' element={<BrasilAPICEP />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;

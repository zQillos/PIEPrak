import { Routes, Route} from 'react-router-dom';
import { Home } from "./Pages/Home/Home";
import { Explore } from "./Pages/Explore/Explore";
import { Wallet } from "./Pages/Wallet/Wallet";
import { Layout } from "./components/layout";
import { Activity } from './Pages/Activity/Activity';
import { LiveAuc } from './Pages/LiveAuc/LiveAuc';
import { NotFound } from './Pages/NF/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/liveauc' element={<LiveAuc/>}/>
        <Route path='https://www.youtube.com/channel/UCv_Fztyrk3pL4R5P-lVNCJA' element={<Home />}/>
        <Route path='https://influencermarketinghub.com/top-nft-creators' element={<Home />}/>
        <Route path='https://crowdcreate.us/top-nft-communities-to-join' element={<Home />}/>
        <Route path='/wallet' element={<Wallet />}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;

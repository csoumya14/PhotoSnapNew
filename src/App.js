import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './themes/globalStyles';
import GalleryData from './data/GalleryData';
import FeaturesData from './data/FeaturesData';
import PriceData from './data/PriceData';
import ScrollToTop from './helpers/ScrollToTop';
//import NavBar from './components/AccessibleNavBar';
import { useViewPort } from './helpers/CustomViewPort';
import MainPage from './pages/Home/Home';
import StoriesPage from './pages/Stories/Stories';
import FeaturesPage from './pages/Features/Features';
import PricingPage from './pages/Price/Price';
import NavBarBigScreen from './containers/BigScreenNavBar/BigScreenNavBar';
import NavBarSmallScreen from './containers/SmallScreenNavBar/SmallScreenNavBar';

const App = () => {
  const [image, setImage] = useState([]);
  const [feature, setFeature] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  const [isSmallScreen] = useViewPort();

  useEffect(() => {
    setImage(GalleryData);
    setFeature(FeaturesData);
    setCardInfo(PriceData);
  }, []);

  return (
    <main>
      <Router>
        <GlobalStyle />
        {isSmallScreen ? <NavBarSmallScreen /> : <NavBarBigScreen />}
        <ScrollToTop>
          <Switch>
            <Route path="/stories">
              <StoriesPage image={image} />
            </Route>
            <Route path="/features">
              <FeaturesPage feature={feature} />
            </Route>
            <Route path="/pricing">
              <PricingPage cardInfo={cardInfo} />
            </Route>
            <Route path="/">
              <MainPage image={image} feature={feature} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </main>
  );
};

export default App;

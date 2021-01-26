import React from 'react';
import './homepage.styles';
import Directory from '../../components/directory/directory.component';
import {HomePageContaner} from './homepage.styles';

const HomePage = () => (
  <HomePageContaner>
    <Directory />
  </HomePageContaner>
);

export default HomePage;

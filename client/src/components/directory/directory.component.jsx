import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import '../../redux/directory/sections.data';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {useSelector} from 'react-redux';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className='directory'>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;

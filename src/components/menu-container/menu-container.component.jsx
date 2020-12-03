import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './menu-container.styles.scss';
import './sections.data';
import SECTIONS_DATA from './sections.data';

class MenuContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    return (
      <div className='menu-container'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default MenuContainer;

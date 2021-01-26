import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import '../../redux/directory/sections.data';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Directory = ({sections}) => (
  <div className='directory'>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

Directory.propTypes = {
  sections: PropTypes.array,
};

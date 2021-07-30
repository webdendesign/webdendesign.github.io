import React from 'react';
import ListProject from '../list-project';

import './projects.scss';

const Projects = () => {
  return (
    <div className='wrapper__projects'>
      <h3>Projects</h3>
      <div>
        <ListProject/>
      </div>
    </div>

  )
};

export default Projects;

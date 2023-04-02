import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

function ProjectList({ projects }:any) {
    return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;
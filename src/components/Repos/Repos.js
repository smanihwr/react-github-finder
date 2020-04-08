import PropTypes from 'prop-types';
import React from 'react'; //rce
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

Repos.prototypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;

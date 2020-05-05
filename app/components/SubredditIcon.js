import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import checkmark from '../../resources/check-circle.svg';
import { getDataPathForIcon } from '../helpers/utils';

SubredditIcon.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  downloadSubreddit: PropTypes.func.isRequired
};

function SubredditIcon({
  name,
  open,
  onSelected,
  selected,
  downloadSubreddit
}) {
  let subredditName = <span className="subreddit-name">{`r/${name}`}</span>;
  const subredditIconPath = getDataPathForIcon(name);

  let downloadStatusDisplay = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <img
      onClick={() => downloadSubreddit(name)}
      alt="download status"
      src={checkmark}
      height="20"
      className="nav-clickable download-status"
    />
  );
  if (!open) {
    subredditName = (
      <span
        className="subreddit-name"
        style={{ visibility: 'hidden', opacity: '0' }}
      >{`r/${name}`}</span>
    );

    downloadStatusDisplay = (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <img
        onClick={() => downloadSubreddit(name)}
        alt="download status"
        src={checkmark}
        height="20"
        className="nav-clickable download-status"
        style={{ visibility: 'hidden', opacity: '0' }}
      />
    );
  }

  let style = {
    backgroundColor: 'white'
  };

  if (selected) {
    style = {
      backgroundColor: 'rgba(135, 138, 140, 0.2)'
    };
  }
  return (
    <div className="nav-item" style={style}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
      <Link
        to={`/r/${name}`}
        className="nav-clickable flex"
        onClick={() => onSelected(name)}
      >
        <div>
          <img
            alt="logo"
            className="nav-logo"
            src={subredditIconPath}
            height="50"
          />
        </div>
        {subredditName}
      </Link>
      {downloadStatusDisplay}
    </div>
  );
}

export default SubredditIcon;

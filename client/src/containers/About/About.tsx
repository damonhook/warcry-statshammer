import { CircularProgress, Divider, IconButton, Paper, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LogoIcon } from 'components/Icons';
import { AoSStatshammer, Github, Reddit, Releases } from 'components/SocialButtons';
import Version from 'components/Version';
import { useReadFromFile } from 'hooks';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/urls';

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    maxWidth: '900px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
  },
  loader: {
    margin: theme.spacing(4),
  },
  logoButton: {
    margin: '0 auto',
    fontSize: '7rem',
  },
  md: {
    marginTop: -theme.spacing(2),
    '& a': {
      color: theme.palette.primary.main,
      '&:visited': {
        color: theme.palette.primary.dark,
      },
    },
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  spacer: {
    flex: 1,
  },
  socialButton: {
    margin: theme.spacing(1),
  },
}));

const About = () => {
  const classes = useStyles();
  const content = useReadFromFile('about.md');
  const history = useHistory();

  const handleLogoClick = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <div className={classes.about}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <IconButton onClick={handleLogoClick} className={classes.logoButton}>
            <LogoIcon color="primary" fontSize="inherit" />
          </IconButton>
          {!content && (
            <div className={classes.loader}>
              <CircularProgress size="6rem" />
            </div>
          )}
          <ReactMarkdown source={content} className={classes.md} />
          <Divider className={classes.divider} />
          <Typography variant="h6">Social:</Typography>
          <div>
            <Github className={classes.socialButton} />
            <Reddit className={classes.socialButton} />
            <Releases className={classes.socialButton} />
            <AoSStatshammer className={classes.socialButton} />
          </div>
          <div className={classes.spacer} />
          <Divider className={classes.divider} />
          <Version />
        </Paper>
      </div>
    </div>
  );
};

export default About;

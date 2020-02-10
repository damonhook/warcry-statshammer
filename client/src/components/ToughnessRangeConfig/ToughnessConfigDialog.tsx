import {
  AppBar,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Slider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Check, Close, Refresh, Warning } from '@material-ui/icons';
import clsx from 'clsx';
import { useHashMatch } from 'hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { config as configStore } from 'store/slices';
import { TToughnessConfig } from 'types/config';
import { HASHES } from 'utils/urls';

import { useIsMobile } from '../../hooks/useIsMobile';
import { getToughnessRange, getWarning, isAuto } from './utils';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    display: 'flex',
  },
  closeIcon: {
    marginRight: theme.spacing(1),
  },
  sliderContainer: {
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
    },
  },
  autoLabel: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0.5),
    },
  },
  slider: {
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  warning: {
    background: theme.palette.background.nested,
    padding: theme.spacing(2),
  },
  warningTitle: {
    marginBottom: theme.spacing(0.5),
  },
  minAuto: {
    '& $thumb[data-index="0"]': {
      color: theme.palette.grey[400],
    },
  },
  maxAuto: {
    '& $thumb[data-index="1"]': {
      color: theme.palette.grey[400],
    },
  },
  thumb: {},
}));

interface IToughnessConfigDialogProps {
  toughnessConfig: TToughnessConfig;
  minStr: number;
  maxStr: number;
}
const ToughnessConfigDialog = ({ toughnessConfig, minStr, maxStr }: IToughnessConfigDialogProps) => {
  const open = useHashMatch(HASHES.TOUGHNESS_CONFIG);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const mobile = useIsMobile();

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1);
  const [minAuto, setMinAuto] = useState(false);
  const [maxAuto, setMaxAuto] = useState(false);

  const autoRange = useMemo(() => {
    return getToughnessRange({ min: 'auto', max: 'auto' }, minStr, maxStr);
  }, [maxStr, minStr]);

  useEffect(() => {
    const configRange = getToughnessRange(toughnessConfig, minStr, maxStr);
    setMin(configRange.min);
    setMax(configRange.max);
    setMinAuto(isAuto(toughnessConfig?.min));
    setMaxAuto(isAuto(toughnessConfig?.max));
  }, [open, maxStr, minStr, toughnessConfig]);

  useEffect(() => {
    if (minAuto) setMin(autoRange.min);
  }, [autoRange.min, minAuto]);

  useEffect(() => {
    if (maxAuto) setMax(autoRange.max);
  }, [autoRange.max, maxAuto]);

  const handleChange = (e: any, newValue: number | number[]) => {
    let [newMin, newMax] = newValue as [number, number];
    if (minAuto) newMin = autoRange.min;
    if (maxAuto) newMax = autoRange.max;
    setMin(newMin);
    setMax(newMax);
  };

  const handleMinAutoChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinAuto(e.target.checked);
  };

  const handleMaxAutoChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAuto(e.target.checked);
  };

  const handleClose = () => {
    history.goBack();
  };

  const handleSubmit = () => {
    const toughness: TToughnessConfig = {
      min: minAuto ? 'auto' : min,
      max: maxAuto ? 'auto' : max,
    };
    dispatch(configStore.actions.editToughnessRange({ toughness }));
    handleClose();
  };

  const handleReset = () => {
    setMinAuto(true);
    setMaxAuto(true);
  };

  const warning = useMemo(() => getWarning({ min, max }, minStr, maxStr), [max, maxStr, min, minStr]);
  const value: [number, number] = [min, max];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" fullScreen={mobile}>
      {mobile ? (
        <AppBar position="relative">
          <Toolbar>
            <IconButton onClick={handleClose} className={classes.closeIcon}>
              <Close />
            </IconButton>
            <Typography variant="h6">Customize Toughness Ranges</Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <DialogTitle className={classes.title}>
          <IconButton onClick={handleClose} size="small" className={classes.closeIcon}>
            <Close />
          </IconButton>
          <span>Customize Toughness Ranges</span>
        </DialogTitle>
      )}
      <DialogContent>
        <Typography>
          {`How the Auto range is deternined: Since Warcry only cares about Strength <, =, or > Toughness.
          The Auto mode determines the range as follows:`}
        </Typography>
        <br />
        <Typography variant="button">Range = (Lowest STR - 1) - (Highest STR + 1)</Typography>
        <br />
        <br />
        <Typography>
          <span>I recommend that you leave both the min and max as </span>
          <i>Auto</i>
        </Typography>
        <br />
        <Grid container alignItems="center" className={classes.sliderContainer} spacing={1}>
          <Grid item>
            <FormControlLabel
              label="Auto"
              labelPlacement={mobile ? 'top' : 'start'}
              control={<Checkbox color="primary" checked={minAuto} onChange={handleMinAutoChanged} />}
              className={classes.autoLabel}
            />
          </Grid>
          <Grid item className={classes.slider}>
            <Slider
              min={1}
              max={10}
              value={value}
              valueLabelDisplay="on"
              onChange={handleChange}
              classes={{
                root: clsx({
                  [classes.minAuto]: minAuto && min !== max,
                  [classes.maxAuto]: maxAuto && min !== max,
                }),
                thumb: classes.thumb,
              }}
              disabled={minAuto && maxAuto}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              label="Auto"
              labelPlacement={mobile ? 'top' : 'end'}
              control={<Checkbox color="primary" checked={maxAuto} onChange={handleMaxAutoChanged} />}
              className={classes.autoLabel}
            />
          </Grid>
        </Grid>
        <Collapse in={Boolean(warning)}>
          <Paper className={classes.warning}>
            <Grid container spacing={2} alignItems="center" className={classes.warningTitle}>
              <Grid item>
                <Warning fontSize="large" />
              </Grid>
              <Grid item>
                <Typography variant="h6">Warning</Typography>
              </Grid>
            </Grid>
            <Typography>{warning}</Typography>
          </Paper>
        </Collapse>
      </DialogContent>
      <DialogActions>
        <Button startIcon={<Refresh />} onClick={handleReset}>
          Reset
        </Button>
        <Button startIcon={<Close />} onClick={handleClose}>
          Cancel
        </Button>
        <Button startIcon={<Check />} onClick={handleSubmit}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToughnessConfigDialog;

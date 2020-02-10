import {
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Paper,
  Slider,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Check, Close, Refresh, Warning } from '@material-ui/icons';
import { useHashMatch } from 'hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { config as configStore } from 'store/slices';
import { TToughnessConfig } from 'types/config';
import { HASHES } from 'utils/urls';

import { getToughnessRange, getWarning, isAuto } from './utils';

const useStyles = makeStyles((theme: Theme) => ({
  sliderContainer: {
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  slider: {
    flex: 1,
  },
  warning: {
    background: theme.palette.background.nested,
    padding: theme.spacing(2),
  },
  warningTitle: {
    marginBottom: theme.spacing(0.5),
  },
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
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Customize Toughness Range</DialogTitle>
      <DialogContent>
        <Typography>Explanation</Typography>
        <Grid container alignItems="center" className={classes.sliderContainer} spacing={2}>
          <Grid item>
            <FormControlLabel
              label="Auto"
              labelPlacement="start"
              control={<Checkbox color="primary" checked={minAuto} onChange={handleMinAutoChanged} />}
            />
          </Grid>
          <Grid item className={classes.slider}>
            <Slider min={1} max={10} value={value} valueLabelDisplay="on" onChange={handleChange} />
          </Grid>
          <Grid item>
            <FormControlLabel
              label="Auto"
              labelPlacement="end"
              control={<Checkbox color="primary" checked={maxAuto} onChange={handleMaxAutoChanged} />}
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

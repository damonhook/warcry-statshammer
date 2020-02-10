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
import { Check, Close, Warning } from '@material-ui/icons';
import { useHashMatch } from 'hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { config as configStore } from 'store/slices';
import { TToughnessConfig } from 'types/config';
import { HASHES } from 'utils/urls';

import { getActiveToughnessRange, getWarning, isAuto } from './utils';

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
  const [value, setValue] = useState<[number, number]>([1, 1]);
  const [minAuto, setMinAuto] = useState(false);
  const [maxAuto, setMaxAuto] = useState(false);

  const activeToughnessRange = useMemo(() => {
    return getActiveToughnessRange(toughnessConfig, minStr, maxStr);
  }, [toughnessConfig, minStr, maxStr]);

  useEffect(() => {
    const { min, max } = activeToughnessRange;
    setValue([min, max]);
    setMinAuto(isAuto(toughnessConfig?.min));
    setMaxAuto(isAuto(toughnessConfig?.max));
  }, [maxStr, minStr, toughnessConfig, open, activeToughnessRange]);

  const updateValue = (newValue: [number, number]) => {
    const newVal = newValue;
    if (minAuto) newVal[0] = activeToughnessRange.min;
    if (maxAuto) newVal[1] = activeToughnessRange.max;
    setValue(newVal);
  };

  const handleChange = (e: any, newValue: number | number[]) => {
    updateValue(newValue as [number, number]);
  };

  const handleClose = () => {
    history.goBack();
  };

  const handleMinAutoChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinAuto(e.target.checked);
    setValue([activeToughnessRange.min, value[1]]);
  };

  const handleMaxAutoChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAuto(e.target.checked);
    setValue([value[0], activeToughnessRange.max]);
  };

  const handleSubmit = () => {
    const min = minAuto ? 'auto' : value[0];
    const max = maxAuto ? 'auto' : value[1];
    dispatch(configStore.actions.editToughnessRange({ toughness: { min, max } }));
    handleClose();
  };

  const warning = getWarning({ min: value[0], max: value[1] }, minStr, maxStr);

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

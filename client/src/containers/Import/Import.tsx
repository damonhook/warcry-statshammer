import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Close, ImportExport } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { useHashMatch, useIsMobile } from 'hooks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fighters as fightersStore, notifications as notificationsStore } from 'store/slices';
import { IFighter } from 'types/fighter';
import warbands from 'warbands';
import { IWarband } from 'warbands/warbands.types';

import FighterList from './FighterList';
import SelectWarbandCard from './SelectWarbandCard';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    display: 'flex',
  },
  closeIcon: {
    marginRight: theme.spacing(1),
  },
  info: {
    padding: theme.spacing(1, 0, 2),
  },
}));

const Import = () => {
  const classes = useStyles();
  const history = useHistory();
  const open = useHashMatch('#import');
  const mobile = useIsMobile();
  const dispatch = useDispatch();
  const [selectedWarband, setSelectedWarband] = useState<IWarband | null>(null);
  const [selectedFighters, setSelectedFighters] = useState<IFighter[]>([]);

  const handleClose = () => {
    history.goBack();
  };

  const handleSelect = (e: any, value: IWarband | null) => {
    if (value !== selectedWarband) {
      setSelectedFighters([]);
    }
    setSelectedWarband(value);
  };

  const handleInputChange = (e: any, value: string, reason: string) => {
    if ((reason === 'clear' || reason === 'reset') && !value) {
      handleSelect(null, null);
    }
  };

  const handleImport = () => {
    selectedFighters.forEach(fighter => {
      dispatch(fightersStore.actions.insertFighter({ fighter }));
    });
    dispatch(
      notificationsStore.actions.addNotification({
        message: `Successfully imported ${selectedFighters.length} fighters`,
        variant: 'success',
      }),
    );
    handleClose();
  };

  const handleSetSelectedFighters = (f: IFighter[]) => {
    setSelectedFighters(f);
  };

  return (
    <Dialog open={open} fullScreen={mobile} maxWidth="lg" fullWidth onClose={handleClose} scroll="paper">
      {mobile ? (
        <AppBar position="relative">
          <Toolbar>
            <IconButton onClick={handleClose} className={classes.closeIcon}>
              <Close />
            </IconButton>
            <Typography variant="h6">Import Fighters</Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <DialogTitle className={classes.title}>
          <IconButton onClick={handleClose} size="small" className={classes.closeIcon}>
            <Close />
          </IconButton>
          <span>Import Fighters</span>
        </DialogTitle>
      )}
      <DialogContent>
        <Typography className={classes.info}>
          Select a warband below to gain access to its available fighters
        </Typography>
        <Autocomplete
          options={warbands}
          getOptionLabel={warband => warband.name}
          groupBy={warband => warband.alliance}
          renderInput={params => <TextField {...params} label="Warbands" variant="outlined" fullWidth />}
          value={selectedWarband}
          onChange={handleSelect}
          onInputChange={handleInputChange}
        />
        {selectedWarband ? (
          <FighterList
            warband={selectedWarband}
            selectedFighters={selectedFighters}
            setSelectedFighters={handleSetSelectedFighters}
          />
        ) : (
          <SelectWarbandCard />
        )}
      </DialogContent>
      <DialogActions>
        <Button startIcon={<Close />} onClick={handleClose}>
          Cancel
        </Button>
        <Button startIcon={<ImportExport />} onClick={handleImport} disabled={!selectedFighters.length}>
          Import
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Import;

import { Button, Tooltip } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Security as ToughnessIcon, Warning as WarningIcon } from '@material-ui/icons';
import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSanitizedFighters } from 'store/selectors';
import { IStore } from 'types/store';
import { HASHES } from 'utils/urls';

import ToughnessConfigDialog from './ToughnessConfigDialog';
import { getToughnessRange, getWarning, isAuto } from './utils';

const useStyles = makeStyles((theme: Theme) => ({
  warning: {
    margin: theme.spacing(0, 0, 0, 0.3),
    verticalAlign: 'middle',
    height: '100%',
  },
}));

const ToughnessRangeConfig = () => {
  const classes = useStyles();
  const history = useHistory();
  const fighterList = useSelector(getSanitizedFighters);
  const toughness = useSelector((state: IStore) => state.config.toughnessRange);
  const minStr = useMemo(() => Math.min(...fighterList.map(f => f.profile.strength)), [fighterList]);
  const maxStr = useMemo(() => Math.max(...fighterList.map(f => f.profile.strength)), [fighterList]);

  const activeToughnessRange = useMemo(() => {
    return getToughnessRange(toughness, minStr, maxStr);
  }, [maxStr, minStr, toughness]);

  const getToughnessDisplay = useCallback(() => {
    const { min, max } = activeToughnessRange;
    const minStr = isAuto(toughness?.min) ? `Auto (T${min})` : `T${min}`;
    const maxStr = isAuto(toughness?.max) ? `Auto (T${max})` : `T${max}`;
    return `${minStr} - ${maxStr}`;
  }, [activeToughnessRange, toughness]);

  const handleClick = () => {
    history.push(HASHES.TOUGHNESS_CONFIG);
  };

  const warning = getWarning(activeToughnessRange, minStr, maxStr);

  return (
    <>
      <Tooltip title="Customize Toughness Range">
        <Button startIcon={<ToughnessIcon />} onClick={handleClick}>
          {getToughnessDisplay()}
        </Button>
      </Tooltip>
      {warning && (
        <span className={classes.warning}>
          <Tooltip title={warning} className={classes.warning}>
            <WarningIcon fontSize="default" />
          </Tooltip>
        </span>
      )}
      <ToughnessConfigDialog toughnessConfig={toughness} minStr={minStr} maxStr={maxStr} />
    </>
  );
};

export default ToughnessRangeConfig;

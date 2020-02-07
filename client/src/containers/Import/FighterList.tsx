import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { IFighter } from 'types/fighter';
import { IWarband } from 'warbands/warbands.types';

const useStyles = makeStyles((theme: Theme) => ({
  fighterList: {
    margin: theme.spacing(2, 0, 2),
    paddingTop: theme.spacing(1),
    background: theme.palette.background.nested,
  },
  content: {},
  divider: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
}));

interface IFighterListProps {
  warband: IWarband;
  selectedFighters?: IFighter[];
  setSelectedFighters: (newFighters: IFighter[]) => void;
}
const FighterList = ({ warband, selectedFighters = [], setSelectedFighters }: IFighterListProps) => {
  const classes = useStyles();

  const handleFighterToggle = (fighter: IFighter) => {
    if (!selectedFighters.some(({ name }) => name === fighter.name)) {
      setSelectedFighters([...selectedFighters, fighter]);
    } else {
      setSelectedFighters(selectedFighters.filter(({ name }) => name !== fighter.name));
    }
  };

  return (
    <Card className={classes.fighterList}>
      <CardContent className={classes.content}>
        <Typography variant="h6">
          <b>Warband: </b>
          {warband.name}
        </Typography>
        <Typography variant="caption">
          <b>Alliance: </b>
          {warband.alliance}
        </Typography>
        <br />
        <Typography variant="caption">
          <b>AoS Warband: </b>
          {warband.isAos ? 'Yes' : 'No'}
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography>
          <b>Fighters</b>
        </Typography>
        <List>
          {warband.fighters.map(fighter => (
            <ListItem key={fighter.name} button onClick={() => handleFighterToggle(fighter)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedFighters.some(f => f.name === fighter.name)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText>{fighter.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default FighterList;

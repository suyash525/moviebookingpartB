import React, { useState } from 'react';
import Header from './../../common/header/Header';
import moviesData from '../../common/moviesData';
import genre from '../../common/genre';
import artists from '../../common/artists';
import { Link } from 'react-router-dom';
import './Home.css';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStylesUpcoming = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
}));

const useStylesReleased = makeStyles((theme) => ({
    gridList: {
        width: '100%',
        height: '170vh',
    },
    gridListTile: {
        margin: '35px 0 0 35px',
        position: "absolute",
    },
}));

const useStylesCards = makeStyles((theme) => ({
    root: {
        maxWidth: '90%',
    },
    title: {
        fontSize: 16,
        margin: theme.spacing(1),
        color: theme.palette.primary.light,
    },
}));

const useStylesForm = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

export default function Home() {
    const classesUpcoming = useStylesUpcoming();
    const classesReleased = useStylesReleased();
    const classesCards = useStylesCards();
    const classesForm = useStylesForm();

    const [genres, setGenre] = useState("");
    const [artist, setArtists] = useState("");
    const [checked, setChecked] = useState(false);

    function handleChangeGenre(event) {
        setGenre(event.target.value);
    }
    function handleChangeArtists(event) {
        setArtists(event.target.value);
    }
    const handleChangeChecked = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="heading">
                <span >Upcoming Movies</span>
            </div>
            <div className={classesUpcoming.root}>
                <GridList className={classesUpcoming.gridList} cols={5} cellHeight={250}>
                    {moviesData.map((tile) => (
                        <GridListTile key={tile.id}>
                            <img src={tile.poster_url} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <div className="flex-container">
                <div className="left">
                    <GridList cellHeight={350} className={classesReleased.gridList} cols={4}>
                        {moviesData.map((tile) => (
                            <Link key={tile.id} to={`/details/${tile.id}`}>
                                <GridListTile key={tile.id} className={classesReleased.gridListTile}>
                                    <img src={tile.poster_url} alt={tile.title} />
                                    <GridListTileBar
                                        title={tile.title}
                                        subtitle={<span>Release Date: {new Date(tile.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            </Link>
                        ))}
                    </GridList>
                </div>
                <div className="right">
                    <Card className={classesCards.root}>
                        <CardContent>
                            <Typography className={classesCards.title} gutterBottom>
                                FIND MOVIES BY:
                            </Typography>
                            <FormControl className={classesForm.formControl}>
                                <InputLabel htmlFor="movie-name" id="movie-name-label" variant="standard">Movie Name</InputLabel>
                                <Input id="movie-name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl className={classesForm.formControl}>
                                <InputLabel htmlFor="genre-select" id="genre-select-label">Genre</InputLabel>
                                <Select
                                    labelId="genre-select-label"
                                    id="genre-select"
                                    value={genres}
                                    onChange={handleChangeGenre}
                                >
                                    {genre.map(item => (
                                        <MenuItem key={item.id} value={item.name}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checked}
                                                        onChange={handleChangeChecked}
                                                        name="checked"
                                                        color="primary"
                                                    />
                                                }
                                                label={item.name}
                                            />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={classesForm.formControl}>
                                <InputLabel htmlFor="artists-select" id="artists-select-label">Artists</InputLabel>
                                <Select
                                    labelId="artists-select-label"
                                    id="artists-select"
                                    value={artist}
                                    onChange={handleChangeArtists}
                                >
                                    {artists.map(item => (
                                        <MenuItem key={item.id} value={item.first_name + " " + item.last_name}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checked}
                                                        onChange={handleChangeChecked}
                                                        name="checked"
                                                        color="primary"
                                                    />
                                                }
                                                label={item.first_name + " " + item.last_name}
                                            />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={classesForm.formControl}>
                                <TextField
                                    id="release-date-start"
                                    label="Release Date Start"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{ shrink: true }}
                                />
                            </FormControl>
                            <FormControl className={classesForm.formControl}>
                                <TextField
                                    id="release-date-end"
                                    label="Release Date End"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{ shrink: true }}
                                />
                            </FormControl>
                            <FormControl className={classesForm.formControl}>
                                <Button variant="contained" color="primary">
                                    APPLY
                                </Button>
                            </FormControl>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

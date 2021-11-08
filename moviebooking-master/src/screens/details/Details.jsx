import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Header from './../../common/header/Header';
import moviesData from './../../common/moviesData';
import './Details.css';

import { GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Details = () => {

    const [starColor1, setStarColor1] = useState('black');
    const [starColor2, setStarColor2] = useState('black');
    const [starColor3, setStarColor3] = useState('black');
    const [starColor4, setStarColor4] = useState('black');
    const [starColor5, setStarColor5] = useState('black');

    let params = useParams();

    const movie = moviesData.find(item => item.id === params.id);

    const changeStarColor1 = () => {
        if (starColor1 === 'black') {
            setStarColor1('gold');
        }
        else {
            setStarColor1('black');
        }
    }
    const changeStarColor2 = () => {
        if (starColor2 === 'black') {
            setStarColor2('gold');
        }
        else {
            setStarColor2('black');
        }
    }
    const changeStarColor3 = () => {
        if (starColor3 === 'black') {
            setStarColor3('gold');
        }
        else {
            setStarColor3('black');
        }
    }
    const changeStarColor4 = () => {
        if (starColor4 === 'black') {
            setStarColor4('gold');
        }
        else {
            setStarColor4('black');
        }
    }
    const changeStarColor5 = () => {
        if (starColor5 === 'black') {
            setStarColor5('gold');
        }
        else {
            setStarColor5('black');
        }
    }

    return (
        <>
            <div>
                <Header display={true} id={params.id} />
            </div>
            <div>
                <NavLink to='/' activeStyle={{ textDecoration: "none", color: "black" }}>
                    <Typography style={{ margin: "8px 0 0 24px", fontWeight: "bold" }}>
                        {'<'} Back to Home
                    </Typography>
                </NavLink>
            </div>
            <div className="content">
                <div className="left-details">
                    <img src={movie.poster_url} alt={movie.title} />
                </div>
                <div className="middle">
                    <Typography><h2>{movie.title}</h2></Typography>
                    <Typography><b>Genre: </b>{movie.genres.join(", ")}</Typography>
                    <Typography><b>Duration: </b>{movie.duration}</Typography>
                    <Typography><b>Release Date: </b>{movie.release_date}</Typography>
                    <Typography><b>Rating: </b>{movie.critics_rating}</Typography>
                    <Typography style={{ marginTop: '16px' }}><b>Plot: </b><a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}</Typography>
                    <Typography style={{ marginTop: '16px' }}><b>Trailer: </b></Typography>
                    <ReactPlayer url={movie.trailer_url} width="100%" height="70vh" />
                </div>
                <div className="right-details">
                    <Typography><b>Rate this Movie: </b></Typography>
                    <StarBorderIcon style={{ color: starColor1 }} onClick={changeStarColor1}></StarBorderIcon>
                    <StarBorderIcon style={{ color: starColor2 }} onClick={changeStarColor2}></StarBorderIcon>
                    <StarBorderIcon style={{ color: starColor3 }} onClick={changeStarColor3}></StarBorderIcon>
                    <StarBorderIcon style={{ color: starColor4 }} onClick={changeStarColor4}></StarBorderIcon>
                    <StarBorderIcon style={{ color: starColor5 }} onClick={changeStarColor5}></StarBorderIcon>
                    <Typography style={{ margin: "16px 0" }}><b>Artists: </b></Typography>
                    <GridList cellHeight={150} cols={2}>
                        {movie.artists.map((tile) => (
                            <GridListTile key={tile.id}>
                                <img src={tile.profile_url} alt={tile.first_name + " " + tile.last_name} />
                                <GridListTileBar
                                    title={tile.first_name + " " + tile.last_name}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </>
    );
}

export default Details;
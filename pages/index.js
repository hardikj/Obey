import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cn from 'classnames'
import Login from '../components/login';
import Loading from '../components/loading';
import * as React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const initialState = {
  authenticated: false,
  limit: 20,
  timeRange: "medium_term",
  calc: {}
}

export default class Home extends React.Component {

  state = { ...initialState };

  componentDidMount() {
    if (process.browser) {
      if (window.location.hash) {
        window.location.hash
          .slice(1)
          .split("&")
          .forEach(kv => {
            const [key, value] = kv.split("=");
            if (key === "access_token") {
              this.setupSpotifyClient(value);
              this.getData();
              //this.getGenreData();
            }
          });
      }
    }
  }

  setupSpotifyClient = (accessToken) => {
    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setAccessToken(accessToken);

    this.setState({ authenticated: true });
  };

 getData = async () => {
    try {

      // get top artists 
      const calc = await Promise.all([
        this.spotifyApi.getMyTopTracks({
          limit: this.state.limit,
          time_range: this.state.timeRange
        }),
      ])
      .then(async ([topTracks]) => {
        const tracksIDs = [];
        // get artist genres and match
        topTracks.items.map((track) => {
          tracksIDs.push(track.id);
        });
        return this.spotifyApi.getAudioFeaturesForTracks(tracksIDs);
      })
      .then(async (data) => {
        console.log(data);
        const energy = data.audio_features.reduce((total, next) => total + next.energy, 0) / data.audio_features.length;
        const dance = data.audio_features.reduce((total, next) => total + next.danceability, 0) / data.audio_features.length;
        const loudness = data.audio_features.reduce((total, next) => total + next.loudness, 0) / data.audio_features.length;
        const valence = data.audio_features.reduce((total, next) => total + next.valence, 0) / data.audio_features.length;
        this.setState( { calc: { energy, dance, loudness, valence }});
      })
    } catch (e) {
      console.error(e); //tslint:disable-line
      this.setState({ authenticated: false });
    }
  }; 

  render () {
    return (
      <div className="">
        <Head>
          <title>OBEY</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {this.state.authenticated ? (
            <Loading calc={this.state.calc} />
          ) : (
            <Login />
          )}

        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
    )
  }
}

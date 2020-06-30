const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || keys.googleClientID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.googleClientSecret,
      callbackURL: process.env.GOOGLE_CALLBACK_URL || '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Token: ', accessToken);
      console.log('Refresh Token: ', refreshToken);
      console.log('Profile: ', profile);
    }
  )
);

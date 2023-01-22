declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GO_LIVE_DATE: string;
      NEXT_PUBLIC_DISCORD_URL: string;
      NEXT_PUBLIC_TWITCH_URL: string;
      NEXT_PUBLIC_REDDIT_URL: string;
      NEXT_PUBLIC_TWITTER_URL: string;
      NEXT_PUBLIC_INSTAGRAM_URL: string;
      NEXT_PUBLIC_YOUTUBE_URL: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
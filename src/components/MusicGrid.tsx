import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Music {
  id: string;
  name: string;
  key: any;
}

interface FetchMusicResponse {
  results: Music[];
}

const MusicGrid = () => {
  const [music, setMusic] = useState<Music[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchMusicResponse>("/tracks")
      .then((res) => {
        console.log("response", res);
        setMusic(res.data.results);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
          

  if (isLoading) {
    return <li>Loading music....</li>;
   
  }

  return (
    <ul>
      {music?.length > 0 ? (
        music.map((song) => <li key={song.id}>{song.name}</li>)
      ) : (
        <li>No music found!!!</li>
      )}
    
    </ul>
  );
};

export default MusicGrid;

import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Music {
  id: string;
  name: string;
  key: any;
  image: string;
  artist_name: string;
}

interface FetchMusicResponse {
  results: Music[];
}
const useMusic = () => {
  const [music, setMusic] = useState<Music[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchMusicResponse>("/albums", { signal: controller.signal })
      .then((res) => {
        console.log("response", res);
        setMusic(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // .finally(() => {
    // });
    return () => controller.abort();
  }, []);


  return { music, error , isLoading};
};
export default useMusic;


import useData from '../useData';

import { Category } from './useNowPlaying';

const usePopular = () => useData<Category>("/movie/popular");

export default usePopular
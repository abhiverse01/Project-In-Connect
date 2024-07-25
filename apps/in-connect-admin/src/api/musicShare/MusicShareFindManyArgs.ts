import { MusicShareWhereInput } from "./MusicShareWhereInput";
import { MusicShareOrderByInput } from "./MusicShareOrderByInput";

export type MusicShareFindManyArgs = {
  where?: MusicShareWhereInput;
  orderBy?: Array<MusicShareOrderByInput>;
  skip?: number;
  take?: number;
};

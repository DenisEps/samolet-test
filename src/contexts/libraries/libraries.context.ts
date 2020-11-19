import { createContext } from "react";

import { LibrariesData } from "../../models/data.interface";

const LibrariesContext = createContext<LibrariesData[]>([]);

export default LibrariesContext;

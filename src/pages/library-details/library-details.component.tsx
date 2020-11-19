import React from 'react'

import {LibraryCardDetailed} from '../../components/library-card-detailed/library-card-detailed.component'

interface LibraryDetailsProps {
}

export const LibraryDetails: React.FC<LibraryDetailsProps> = ({}) => {
    return (
      <LibraryCardDetailed />
    );
}

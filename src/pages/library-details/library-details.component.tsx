import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';

import LibrariesContext from '../../contexts/libraries/libraries.context';

interface LibraryDetailsProps {

}

export const LibraryDetails: React.FC<LibraryDetailsProps> = ({}) => {
  const {id} = useParams<{id: string | undefined}>()
  const data = useContext(LibrariesContext);
  const libraryInfo = data.filter(library => library.order === Number(id))[0]

    return (
      <div>1</div>

    );
}

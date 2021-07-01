import {useDocumentDataOnce} from 'react-firebase-hooks/firestore';
import {db} from './config';
import React from "react";

export const UseReadDoc = ({docId,collection,Component}) => {
    const [value, loading, error] = useDocumentDataOnce(
        db.doc(`${collection}/${docId}`)
    );

    return (
        <div>
            <p>
                {!value && !loading && <strong>Error: {'something went wrong'}</strong>}
                {loading && <span>Document: Loading...</span>}
                {value && <Component data={value} />}
            </p>
        </div>
    );
};
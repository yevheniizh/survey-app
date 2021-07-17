import React from "react";
import {UseReadDoc} from "@zzzhyrov/my-perfect-package";
import {useParams} from 'react-router';
import {SurveyEditor} from './index'
export const Wrapper = () => {
    // @ts-ignore
    let { id } = useParams();
    const props = {
        collection: 'surveys',
        docId: id,
        Component: SurveyEditor
    }
    return <UseReadDoc {...props} />
}
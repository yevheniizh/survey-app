import React, { useEffect, useState } from 'react';
import {UseReadDoc} from '@zzzhyrov/my-perfect-package';
const ExampleComponent = ({data}:{data:any}) => {
    return (
        <div>Hey {JSON.stringify(data)}</div>
    );
}
export const ExampleApp = () => {
    const data = {docId:'08c2toVU9LmXZuc0D0rh',Component: (data:any) => (<ExampleComponent data={data} />), collection:'answers'};
    return (
        <div>
            <h1>Hey</h1>
            <UseReadDoc {...data} />
        </div>
    )
}
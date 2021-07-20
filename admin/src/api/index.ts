export {ReadCollection} from './readCollection';
export interface ReadCollectionType {
    collection: string;
    where: {
        field: string;
        operator: string;
        value: string;
    },
    CollectionView: any;
    defaults?: any;
    history?: any;
    Redirect?: any;
}
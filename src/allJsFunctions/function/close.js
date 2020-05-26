import { GDALFunctions } from '../../allCFunctions';

/*
    Close the dataset. The memory associated to the dataset will be freed.

    Datasets **must** be closed when you're finished with them, or the
    memory consumption will grow forever.

    @param  {object} Dataset to be closed.
    @return {Promise -> void}
*/
export default function close(dataset) {
    return new Promise((resolve) => {
        GDALFunctions.GDALClose(dataset.pointer);
        resolve();
    });
}

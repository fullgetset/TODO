const DELETE_ITEM = 'DELETE-ITEM';

export const deleteItemCreator = id => ({type: DELETE_ITEM, id: id,});
import {
  SET_COUNTERS,
  SET_NEW_COUNTER_DIALOG,
  SET_RENAME_DIALOG,
  SET_ID_TO_EDIT,
  SET_CONFIRM_DELETE_DIALOG,
  SET_ADJUST_COUNT_DIALOG,
  SET_CREDITS_DIALOG,
} from "./types";

const initialState = {
  counters: null,
  newCounterDialog: false,
  renameDialog: false,
  idToEdit: null,
  confirmDeleteDialog: false,
  adjustCountDialog: false,
  creditsDialog: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_COUNTERS:
      newState.counters = payload;
      break;
    case SET_NEW_COUNTER_DIALOG:
      newState.newCounterDialog = payload;
      break;
    case SET_RENAME_DIALOG:
      newState.renameDialog = payload;
      break;
    case SET_ID_TO_EDIT:
      newState.idToEdit = payload;
      break;
    case SET_CONFIRM_DELETE_DIALOG:
      newState.confirmDeleteDialog = payload;
      break;
    case SET_ADJUST_COUNT_DIALOG:
      newState.adjustCountDialog = payload;
      break;
    case SET_CREDITS_DIALOG:
      newState.creditsDialog = payload;
      break;
    default:
      break;
  }

  return newState;
};

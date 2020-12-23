import {
  SET_COUNTERS,
  SET_NEW_COUNTER_DIALOG,
  SET_RENAME_DIALOG,
  SET_ID_TO_EDIT,
  SET_CONFIRM_DELETE_DIALOG,
  SET_ADJUST_COUNT_DIALOG,
  SET_CREDITS_DIALOG,
} from "./types";

export const setCounters = (payload) => ({
  type: SET_COUNTERS,
  payload,
});

export const setNewCounterDialog = (payload) => ({
  type: SET_NEW_COUNTER_DIALOG,
  payload,
});

export const setRenameDialog = (payload) => ({
  type: SET_RENAME_DIALOG,
  payload,
});

export const setIdToEdit = (payload) => ({ type: SET_ID_TO_EDIT, payload });

export const setConfirmDeleteDialog = (payload) => ({
  type: SET_CONFIRM_DELETE_DIALOG,
  payload,
});

export const setAdjustCountDialog = (payload) => ({
  type: SET_ADJUST_COUNT_DIALOG,
  payload,
});

export const setCreditsDialog = (payload) => ({
  type: SET_CREDITS_DIALOG,
  payload,
});

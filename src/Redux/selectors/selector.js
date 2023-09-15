import { createSelector } from "@reduxjs/toolkit";

const data = (state) => state?.test?.posts || [];

export const getTestsList = createSelector(
    [data], (data) => data
)

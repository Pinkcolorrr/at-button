import { DateTime } from "luxon";

export const getHoursFromTimestamp = (timeStamp: number): string => DateTime.fromMillis(timeStamp).toFormat('hh');

export const getMinutesFromTimestamp = (timeStamp: number): string => DateTime.fromMillis(timeStamp).toFormat('mm');

export const getSecondsFromTimestamp = (timeStamp: number): string => DateTime.fromMillis(timeStamp).toFormat('ss');

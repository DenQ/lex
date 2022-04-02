import React from 'react';

export type Filter<T> = (item: T, index: number, arr: T[]) => boolean;

export type EventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

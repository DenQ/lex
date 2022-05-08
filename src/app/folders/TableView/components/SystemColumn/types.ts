import React from 'react';

export type HandlerEvent = (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void;

export type SystemColumnViewProps = {
  handleActionPlay: HandlerEvent;
  handleActionEdit: HandlerEvent;
  handleActionRemove: HandlerEvent;
};

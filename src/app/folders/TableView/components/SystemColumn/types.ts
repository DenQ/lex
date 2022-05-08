import React from 'react';

type HandlerEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;

export type SystemColumnViewProps = {
  handleActionPlay: HandlerEvent;
  handleActionEdit: HandlerEvent;
  handleActionRemove: HandlerEvent;
};

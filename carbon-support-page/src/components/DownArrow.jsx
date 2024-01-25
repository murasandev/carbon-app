import { IconButton } from '@carbon/react';
import { ArrowDown } from '@carbon/react/icons';

export default function DownArrow() {
  return (
    <IconButton label="Add" kind="danger">
      <ArrowDown />
    </IconButton>
  );
}
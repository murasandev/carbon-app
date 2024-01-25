import { IconButton } from '@carbon/react';
import { ArrowDown } from '@carbon/react/icons';

export default function DownArrow() {
  return (
    <div className="down-arrow">
        <IconButton label="Add" kind="danger">
            <ArrowDown />
        </IconButton>
    </div>
  );
}
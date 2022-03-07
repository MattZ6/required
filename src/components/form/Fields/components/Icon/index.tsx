import { IconType } from 'react-icons';

import { FormFieldSlot as Slot } from '../Slot';

type Props = {
  icon?: IconType;
};

export function FormFieldIcon({ icon: Icon }: Props) {
  if (!Icon) {
    return null;
  }

  return (
    <Slot unclickable side="right">
      <Icon aria-hidden size={24} />
    </Slot>
  );
}

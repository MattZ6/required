import {
  AlertDialog as Dialog,
  AlertDialogPortal as Portal,
  AlertDialogOverlay as Overlay,
  AlertDialogContent as Content,
  AlertDialogTitle as Title,
  AlertDialogDescription as Description,
  AlertDialogCancel as Cancel,
} from '@components/primitives/AlertDialog';

type Props = {
  title: string;
  description: string;
  buttonText: string;
  isOpen: boolean;
  onOpenChange: () => void;
}

export function AlertDialog({
  title,
  description,
  buttonText,
  isOpen,
  onOpenChange
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay />

        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <Cancel>{buttonText}</Cancel>
        </Content>
      </Portal>
    </Dialog>
  );
}

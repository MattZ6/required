'use client'

import { useEffect, useState } from 'react'
import { Subject } from 'rxjs'

import {
  AlertDialog as Dialog,
  AlertDialogPortal as Portal,
  AlertDialogOverlay as Overlay,
  AlertDialogContent as Content,
  AlertDialogTitle as Title,
  AlertDialogDescription as Description,
  AlertDialogCancel as Cancel,
  DialogHeroIcon as HeroIcon,
  DialogFooter as Footer,
  DialogHeroIconOptions as HeroIconOptions,
} from '@components/primitives/AlertDialog'

type Alert = {
  type?: 'error'
  icon?: HeroIconOptions
  title: string
  description?: string
  closeButtonText?: string
}

const alertSubject = new Subject<Alert>()

type ShowAlertInput = {
  type?: 'error'
  icon?: HeroIconOptions
  title: string
  description: string
  closeButtonText?: string
}

export function showAlert(input: ShowAlertInput) {
  alertSubject.next({
    type: input.type,
    icon: input.icon,
    title: input.title,
    description: input.description,
    closeButtonText: input.closeButtonText ?? 'Ok',
  })
}

export function AlertDialogHandler() {
  const [alert, setAlert] = useState<Alert | null>(null)

  useEffect(() => {
    const subscription = alertSubject.asObservable().subscribe(setAlert)

    return () => subscription.unsubscribe()
  }, [])

  return (
    <Dialog open={!!alert} onOpenChange={() => setAlert(null)}>
      <Portal>
        <Overlay />

        <Content>
          {alert?.type === 'error' && (
            <HeroIcon icon={alert?.icon ?? 'ph-warning-circle'} />
          )}

          <Title>{alert?.title}</Title>
          {alert?.description && (
            <Description>{alert?.description}</Description>
          )}

          <Footer>
            <Cancel>{alert?.closeButtonText}</Cancel>
          </Footer>
        </Content>
      </Portal>
    </Dialog>
  )
}

import {
  createContext,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { MdCheck, MdErrorOutline } from 'react-icons/md'

import * as Toast from '@components/primitives/Toast'

type ToastMessage = {
  id: string
  title?: string
  content: string
  type: 'background' | 'foreground'
  duration?: number
  variant: 'success' | 'error'
}

type AddMessagePayload = Pick<
  ToastMessage,
  'title' | 'content' | 'duration' | 'variant'
>

type ToastContextData = {
  addMessage: (data: AddMessagePayload) => void
}

const ToastContext = createContext({} as ToastContextData)

type Props = {
  children: ReactElement
}

function ToastProvider({ children }: Props) {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addMessage = useCallback((data: AddMessagePayload) => {
    const message: ToastMessage = {
      id: Date.now().toString(),
      title: data.title,
      content: data.content,
      type: 'foreground',
      variant: data.variant,
    }

    setMessages((state) => [...state, message])
  }, [])

  const onMessageDismissed = useCallback((id: string) => {
    setTimeout(() => {
      setMessages((state) => state.filter((message) => message.id !== id))
    }, 1000)
  }, [])

  const contextData = useMemo<ToastContextData>(() => {
    return {
      addMessage,
    }
  }, [addMessage])

  return (
    <ToastContext.Provider value={contextData}>
      {children}

      <Toast.Provider>
        {messages.map((message) => (
          <Toast.Message
            key={message.id}
            type="foreground"
            duration={message.duration ?? 5000}
            onOpenChange={() => onMessageDismissed(message.id)}
          >
            {message.title && <Toast.Title>{message.title}</Toast.Title>}
            <Toast.Description>{message.content}</Toast.Description>

            {message.variant === 'success' && <MdCheck size={20} />}
            {message.variant === 'error' && <MdErrorOutline size={20} />}
          </Toast.Message>
        ))}

        <Toast.Viewport />
      </Toast.Provider>
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }

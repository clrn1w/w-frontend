import { ReactNode } from 'react'
import { DialogRootProps } from '@chakra-ui/react'
import { Button, Dialog, Portal } from '@chakra-ui/react'
import CloseIcon from '@/components/icons/CloseIcon'

export interface BaseModalProps extends DialogRootProps {
	trigger?: ReactNode
	title?: string
	footer?: ReactNode
	closeTrigger?: boolean
	actionTrigger?: ReactNode
}

export default function BaseModal({
	trigger,
	title,
	children,
	footer,
	closeTrigger = true,
	actionTrigger,
	...props
}: BaseModalProps) {
	return (
		<Dialog.Root placement='center' motionPreset='slide-in-bottom' {...props}>
			{trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						{title && (
							<Dialog.Header>
								<Dialog.Title>{title}</Dialog.Title>
							</Dialog.Header>
						)}
						{children && <Dialog.Body>{children}</Dialog.Body>}
						{(footer || actionTrigger) && (
							<Dialog.Footer>
								{actionTrigger && (
									<Dialog.ActionTrigger asChild>
										{actionTrigger}
									</Dialog.ActionTrigger>
								)}
								{footer}
							</Dialog.Footer>
						)}
						{closeTrigger && (
							<Dialog.CloseTrigger asChild>
								<Button variant='subtle'>
									<CloseIcon />
								</Button>
							</Dialog.CloseTrigger>
						)}
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}

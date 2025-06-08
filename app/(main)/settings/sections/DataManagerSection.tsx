import React, { useCallback } from 'react'
import Section from '../components/Section'
import ListButton from '../components/ListButton'
import ListSwitch from '../components/ListSwitch'
import MailIcon from '@/components/icons/MailIcon'
import KeyIcon from '@/components/icons/KeyIcon'
import LockIcon from '@/components/icons/LockIcon'
import { useSessionStore } from '@/store/session'
import { useChangeSettingsMutation } from '@/api/account/mutations'
import ChangeMailModal from '@/components/modals/ChangeMailModal'
import ChangePasswordModal from '@/components/modals/ChangePasswordModal'

export default function DataManagerSection() {
	const { mutateAsync: settingsMutation } = useChangeSettingsMutation()
	const { user } = useSessionStore()

	const handleChangeSettings = useCallback(
		async ({ checked }: { checked: boolean }) => {
			await settingsMutation({
				values: {
					status: checked,
				},
			})
		},
		[settingsMutation]
	)

	return (
		<Section
			label='Управление данными'
			display='flex'
			flexDirection='column'
			gap='xxxs'
		>
			<ChangeMailModal
				trigger={<ListButton label={user?.email} Icon={MailIcon} />}
			/>
			<ChangePasswordModal
				trigger={<ListButton label='Сменить пароль' Icon={LockIcon} />}
			/>
			<ListSwitch
				label='Двухфакторная аутентификация'
				Icon={KeyIcon}
				checked={user?.isTwoFactorAuth}
				// onCheckedChange={handleChange2fa}
			/>
		</Section>
	)
}

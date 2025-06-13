'use client'

import { useUsers } from '@/api/user/all/queries'
import { useDeleteUserMutation } from '@/api/user/byId/mutations'
import H2 from '@/components/typography/H2'
import { Avatar } from '@/components/ui/avatar'
import { Box, Spinner, Text, Button, Table, Container } from '@chakra-ui/react'

export default function UsersAdminPage() {
	const { data: users = [], isLoading, isError } = useUsers()
	const { mutate: deleteUserMutation, isPending: deletePending } =
		useDeleteUserMutation()

	const handleDelete = (id: string) => {
		deleteUserMutation({ values: { id } })
	}

	if (isLoading) {
		return (
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				minH='200px'
			>
				<Spinner size='lg' />
			</Box>
		)
	}

	if (isError) {
		return <Text color='red.500'>Ошибка загрузки пользователей</Text>
	}

	return (
		<Container maxW='container.xl' py={8}>
			<H2 mb={8}>Пользователями</H2>
			<Table.Root size='sm' variant='outline' striped showColumnBorder>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeader>ID</Table.ColumnHeader>
						<Table.ColumnHeader>Аватар</Table.ColumnHeader>
						<Table.ColumnHeader>Имя</Table.ColumnHeader>
						<Table.ColumnHeader>Никнейм</Table.ColumnHeader>
						<Table.ColumnHeader>Email</Table.ColumnHeader>
						<Table.ColumnHeader>Тип</Table.ColumnHeader>
						<Table.ColumnHeader>Bio</Table.ColumnHeader>
						<Table.ColumnHeader>Удалить</Table.ColumnHeader>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{users.map(user => (
						<Table.Row key={user.id}>
							<Table.Cell>{user.id}</Table.Cell>
							<Table.Cell>
								<Avatar
									size='sm'
									src={user.avatar || undefined}
									name={user.displayName || user.username}
								/>
							</Table.Cell>
							<Table.Cell>{user.displayName}</Table.Cell>
							<Table.Cell>{user.username}</Table.Cell>
							<Table.Cell>{user.email}</Table.Cell>
							<Table.Cell>
								{user.userType === 'ADMIN' ? 'Админ' : 'Пользователь'}
							</Table.Cell>
							<Table.Cell>{user.bio || ''}</Table.Cell>
							<Table.Cell>
								<Button
									colorScheme='red'
									size='sm'
									loading={deletePending}
									onClick={() => handleDelete(user.id)}
									disabled={deletePending}
								>
									Удалить
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Container>
	)
}

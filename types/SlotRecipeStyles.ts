import { SystemStyleObject } from '@chakra-ui/react'

export type SlotRecipeStyles<T extends { slots: readonly string[] }> = Partial<
	Record<T['slots'][number], SystemStyleObject>
>

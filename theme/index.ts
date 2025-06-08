import { createSystem, defaultConfig } from '@chakra-ui/react'

import globalCss from './globalCss'
import textStyles from './textStyles'
import tokens from './tokens'
import recipes from './recipes'
import slotRecipes from './slotRecipes'

export default createSystem(defaultConfig, {
	preflight: true,
	disableLayers: true,
	globalCss,
	theme: {
		recipes,
		slotRecipes,
		textStyles,
		tokens,
	},
})

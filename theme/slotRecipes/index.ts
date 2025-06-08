import { dialogSlotRecipe } from './dialog'
import { fieldSlotRecipe } from './field'
import { menuSlotRecipe } from './menu'
import { toastSlotRecipe } from './toast'
import { tabsSlotRecipe } from './tabs'
import { switchSlotRecipe } from './switch'

export default {
	field: fieldSlotRecipe,
	dialog: dialogSlotRecipe,
	toast: toastSlotRecipe,
	menu: menuSlotRecipe,
	tabs: tabsSlotRecipe,
	switch: switchSlotRecipe,
}

import Card from './src/card.vue'
import CardFooterItem from './src/CardFooterItem.vue'
import CardOne from './src/CardOne.vue'
import { withInstall } from '@blogui/utils/vue/install'

export const BCard = withInstall(Card)
export const BCardOne = withInstall(CardOne)
export const BCardFooterItem = withInstall(CardFooterItem)

export default BCard

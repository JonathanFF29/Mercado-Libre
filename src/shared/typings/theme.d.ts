import 'styled-components'
import {theme} from '../../assets/styles'

type Theme = typeof theme
declare module 'styled-components'{
    export interface DefaultTheme extends Theme{}
}
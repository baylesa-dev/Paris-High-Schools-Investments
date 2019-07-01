import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3079D9'
        },
        secondary: {
            main: '#4895D9',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        }
    }
})

export default theme

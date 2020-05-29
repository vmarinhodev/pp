import { css } from 'styled-components'
import theme from 'styled-theming'

export const globalColor = theme('mode', {
  dark: props => props.theme.colors.black,
  light: props => props.theme.colors.white,
})
export const globalTextColor = theme('mode', {
  dark: props => props.theme.colors.gray,
  light: props => props.theme.colors.darkGray,
})

const navColor = theme('navMode', {
  dark: props => props.theme.colors.white,
  light: props => props.theme.colors.black,
})

const colors = {
  main: 'hsl(207, 100%, 44%)',
  mainHover: 'hsl(207, 98%, 38%)',
  dark: '#212121',
  black: '#000',
  blackHover: 'hsl(0, 0%, 20%)',
  white: '#fff',
  whiteHover: 'hsl(0, 0%, 90%)',
  lightHeadingText: 'hsl(0, 0%, 100%)',
  darkHeadingText: 'hsl(0, 0%, 4%)',
  blue: '#007ce0',
  navy: '#004175',
  lightText: '#007ce0',
  darkText: 'hsl(0, 0%, 13%)',
  lightGray: 'hsl(210, 50%, 98%)',
  gray: 'hsl(206, 3%, 58%)',
  darkGray: 'hsl(0, 1%, 17%)',
  globalColor,
  navColor,
  globalTextColor,
}

export const globalInverseColor = theme('mode', {
  dark: props => props.theme.colors.white,
  light: props => props.theme.colors.black,
})
export const globalInverseTextColor = theme('mode', {
  dark: props => props.theme.colors.darkGray,
  light: props => props.theme.colors.gray,
})

export const bgs = {
  default: {
    light: css`
      background-color: ${colors.white};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
    dark: css`
      background-color: ${colors.black};
      color: ${colors.lightText};
      h1,
      h2,
      h3 {
        color: ${colors.lightHeadingText};
      }
    `,
  },
  inverse: {
    light: css`
      background-color: ${colors.black};
      color: ${colors.lightGray};
      h1,
      h2,
      h3 {
        color: ${colors.lightHeadingText};
      }
    `,
    dark: css`
      background-color: ${colors.white};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
  },
  color: {
    light: css`
      background-color: ${colors.main};
      color: ${colors.darkText};
    `,
    dark: css`
      background-color: ${colors.main};
      color: ${colors.darkText};
    `,
  },
  mono: {
    light: css`
      background-color: ${colors.lightGray};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
    dark: css`
      background-color: ${colors.black};
      color: ${colors.lightText};
      h1,
      h2,
      h3 {
        color: ${colors.lightHeadingText};
      }
    `,
  },
}

export default colors
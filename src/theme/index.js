import { createTheme } from '@mui/material';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1200,
            lg: 1460,
            xl: 2020,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                sizeSmall: {
                    padding: '6px 16px',
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
                fontFamily: 'Segoe UI',
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                fontFamily: 'Segoe UI',
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    fontFamily: 'Segoe UI',
                    '&:last-child': {
                        paddingBottom: '32px',
                    },
                },
            },
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6',
                    fontFamily: 'Segoe UI',
                },
                subheaderTypographyProps: {
                    variant: 'body2',
                    fontFamily: 'Segoe UI',
                },
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    fontFamily: 'Segoe UI',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                    fontFamily: 'Segoe UI',
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    fontFamily: 'Segoe UI',
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    fontFamily: 'Segoe UI',
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    //height: "100%",
                    width: '100%',
                    fontFamily: 'Segoe UI',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#E6E8F0',
                    fontFamily: 'Segoe UI',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#42AF59',
                    '.MuiTableCell-root': {
                        color: '#ffffff',
                        fontFamily: 'Segoe UI',
                    },
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                        fontFamily: 'Segoe UI',
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4,
                        fontFamily: 'Segoe UI',
                    },
                },
            },
        },
    },
    palette: {
        font: '#333333',
        darkGray: '#828282',
        lightGray: '#F2F2F2',
        red: '#E2350D',
        white: '#FFFFFF',
        fire: '#EE7F33',
        normal: '#A9A778',
        water: '#6890F0',
        grass: '#78C84F',
        ice: '#98D8D7',
        poison: '#A040A1',
        ground: '#E0C069',
        flying: '#A790EF',
        bug: '#A8B821',
        rock: '#B6A037',
        ghost: '#705797',
        dragon: '#724EF9',
        dark: '#6F5848',
        steel: '#B8B8D0',
        fairy: '#F4C8E2',
        psychic: '#E95587',
        electric: '#F8CF32',
        fighting: '#C03228',
        neutral: {
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)',
        },
        background: {
            default: '#E9E9E9',
            paper: '#FFFFFF',
        },
        divider: '#E6E8F0',
        primary: {
            main: '#E2350D',
            hover: '#E08601',
            light: '#828DF8',
            dark: '#b46c02',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#10B981',
            light: '#3FC79A',
            dark: '#0B815A',
            contrastText: '#FFFFFF',
        },
        success: {
            main: '#14B8A6',
            light: '#43C6B7',
            dark: '#0E8074',
            contrastText: '#FFFFFF',
        },
        info: {
            main: '#2196F3',
            light: '#64B6F7',
            dark: '#0B79D0',
            contrastText: '#FFFFFF',
        },
        warning: {
            main: '#FFB020',
            light: '#FFBF4C',
            dark: '#B27B16',
            contrastText: '#FFFFFF',
        },
        analyzing: {
            main: '#ff7f20',
            light: '#ff9f4c',
            dark: '#b27b16',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#D14343',
            light: '#DA6868',
            dark: '#922E2E',
            contrastText: '#FFFFFF',
        },
        corrections: {
            main: '#9c3a8c',
            light: '#c051b8',
            dark: '#611f6e',
            contrastText: '#FFFFFF',
        },

        text: {
            main: '#333333',
            primary: '#333333',
            secondary: '#65748B',
            disabled: 'rgba(55, 65, 81, 0.48)',
            widget: '#FFFFFF',
        },
        dark: {
            main: '#000000',
            light: '#374151',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
    },
    shape: {
        borderRadius: 8,
    },
    fontFamily: 'Segoe UI',
    shadows: [
        'none',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        '0px 1px 2px rgba(100, 116, 139, 0.12)',
        '0px 1px 4px rgba(100, 116, 139, 0.12)',
        '0px 1px 5px rgba(100, 116, 139, 0.12)',
        '0px 1px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 6px rgba(100, 116, 139, 0.12)',
        '0px 3px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        '0px 5px 12px rgba(100, 116, 139, 0.12)',
        '0px 5px 14px rgba(100, 116, 139, 0.12)',
        '0px 5px 15px rgba(100, 116, 139, 0.12)',
        '0px 6px 15px rgba(100, 116, 139, 0.12)',
        '0px 7px 15px rgba(100, 116, 139, 0.12)',
        '0px 8px 15px rgba(100, 116, 139, 0.12)',
        '0px 9px 15px rgba(100, 116, 139, 0.12)',
        '0px 10px 15px rgba(100, 116, 139, 0.12)',
        '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
        '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
    ],
    typography: {
        button: {
            fontWeight: 600,
        },
        fontFamily:
            '"Segoe UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontFamily: 'Segoe UI',
            fontWeight: 400,
            lineHeight: 1.57,
        },
        subtitle1: {
            fontSize: '1rem',
            fontFamily: 'Segoe UI',
            fontWeight: 500,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontFamily: 'Segoe UI',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        overline: {
            fontSize: '0.75rem',
            fontFamily: 'Segoe UI',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase',
        },
        caption: {
            fontSize: '0.75rem',
            fontFamily: 'Segoe UI',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        h1: {
            fontWeight: 700,
            fontFamily: 'Segoe UI',
            fontSize: '3.5rem',
            lineHeight: 1.375,
        },
        h2: {
            fontWeight: 700,
            fontFamily: 'Segoe UI',
            fontSize: '3rem',
            lineHeight: 1.375,
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            fontFamily: 'Segoe UI',
            lineHeight: 1.375,
        },
        h4: {
            fontWeight: 700,
            fontFamily: 'Segoe UI',
            fontSize: '2rem',
            lineHeight: 1.375,
        },
        h5: {
            fontWeight: 600,
            fontFamily: 'Segoe UI',
            fontSize: '1.5rem',
            lineHeight: 1.375,
        },
        h6: {
            fontWeight: 600,
            fontFamily: 'Segoe UI',
            fontSize: '1.125rem',
            lineHeight: 1.375,
        },
    },
});

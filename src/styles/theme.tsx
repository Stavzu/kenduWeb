import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		white: '#ffffff',
		yellow: '#FFB81E',
		orange: '#EC7357',
		darkOrange: '#D5431A',
		black: '#101119',
		hoverBlack: '#272727',
		silver: '#D4D4D4',
		gradient: 'linear-gradient(180deg, #FFB81E 0%, #EC7357 100.05%)',
		grey: {
			300: '#999999',
			500: '#E5E5E5',
			700: '#F5F5F5',
		},
	},
};

export const theme = extendTheme({ colors });

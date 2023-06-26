
export default function Modal(theme) {
	return {
		MuiDrawer : {
			styleOverrides: {
				root: {
					borderRadius: theme.shape,
					border: "none",
					overflow: "hidden"
				}
			}
		}
	}
}

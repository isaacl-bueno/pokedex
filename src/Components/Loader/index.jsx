import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = ({ loading, }) => {
	return (
		<Backdrop
			sx={{
				color: "primary",
				zIndex: theme =>
					theme.zIndex
						.drawer + 1,
			}}
			open={loading}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

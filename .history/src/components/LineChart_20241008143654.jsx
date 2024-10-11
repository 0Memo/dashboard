import { useTheme } from "@emotion/react";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";

const LineChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>

        </>
    )
}

export default LineChart;
import { useTheme } from "@emotion/react";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";

const GeoChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <div>GeoChart</div>
    )
}

export default GeoChart;
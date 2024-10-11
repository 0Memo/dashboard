import { useTheme } from "@emotion/react";
import { ResponsiveChoropleth } from "@nivo/choropleth";
import { tokens } from "../theme";
import { mockGeoData as data } from "../data/mockData";

const GeoChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        
    )
}

export default GeoChart;
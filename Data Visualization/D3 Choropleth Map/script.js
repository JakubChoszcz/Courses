const topoUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
const eduUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

const colorTable = ['#E5F4E1', '#C7E8C1', '#A1D89A', '#74C476', '#40AB5C', '#228A45', '#016C2C'];
const legendLabelTicks = [3, 12, 21, 30, 39, 48, 57, 66]

const colorSelector = per => {
  return per < 12 ? colorTable[0]
    : per < 21 ? colorTable[1]
    : per < 30 ? colorTable[2]
    : per < 39 ? colorTable[3]
    : per < 48 ? colorTable[4]
    : per < 57 ? colorTable[5]
    : colorTable[6]
};

const width = 960;
const height = 500;
const margin = { top: 200, right: 100, bottom: 150, left: 100 };
const innerWidth = width + margin.left + margin.right;
const innerHeight = height + margin.top + margin.bottom;
const legendWidth = 210;
const legendHeight = 7;

const path = d3.geoPath();

let geoDataset = null;
let eduDataset = null;

d3.json(topoUrl).then(topoData => {
  d3.json(eduUrl).then(eduData => {
    const { counties } = topoData.objects;
    geoDataset = topojson.feature(topoData, counties);
    geoDataset.features = geoDataset.features.sort((a, b) => a.id - b.id);
    eduDataset = eduData;

    const svg = d3.select("#choropleth-map")
      .append("svg")
      .attr("width", innerWidth)
      .attr("height", innerHeight);
    
    svg.append("text")
      .attr("id", "title")
      .text("United States Educational Attainment")
      .attr("transform", `translate(${width / 2 + margin.left}, ${margin.top / 2})`);
    
    svg.append("text")
      .attr("id", "description")
      .text("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)")
      .attr("transform", `translate(${width / 2 + margin.left}, ${margin.top / 2 + 48})`);
    
    svg.append("text")
      .attr("id", "source")
      .text("Source: ")
      .attr("transform", `translate(${innerWidth - margin.right}, ${innerHeight - 10})`)
      .append("a")
      .attr("href", "https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx")
      .attr("target", "_blank")
      .text("USDA Economic Research Service");
    
    const legendScale = d3.scaleLinear()
      .domain([0, colorTable.length])
      .range([0, legendWidth]);

    const legendLabelScale = d3.scaleLinear()
      .domain([3, 66])
      .range([0, legendWidth]);

    const legendAxis = d3.axisBottom()
      .scale(legendLabelScale)
      .tickValues(legendLabelTicks)
      .tickFormat(d => d + "%");

    const legend = svg.append("g")
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .attr("transform", `translate(${width - margin.right}, ${margin.top})`);

    legend.selectAll("rect")
      .data(colorTable)
      .enter()
      .append("rect")
      .attr("x", (d, i) => legendScale(i))
      .attr("width", legendWidth / colorTable.length)
      .attr("height", legendHeight)
      .attr("fill", (d, i) => colorTable[i]);

    legend.append("g")
      .call(legendAxis.ticks(8))
      .attr("transform", `translate(0, ${legendHeight})`);
    
    const map = svg.append("g")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "map")
      .attr("transform-origin", `center`)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    map.selectAll("path")
      .data(eduDataset)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("d", (d, i) => path(geoDataset.features[i]))
      .attr("fill", (d, i) => colorSelector(d.bachelorsOrHigher))
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut);
  });
});

const onMouseOver = (e, d) => {
  const tooltip = d3.select("#tooltip");

  tooltip.style("left", `${e.pageX}px`);
  tooltip.style("top", `${e.pageY}px`);
  tooltip.classed("hidden", false);

  tooltip.select("#county").text(`${d.area_name}`);
  tooltip.select("#state").text(`${d.state}`);
  tooltip.select("#percentage").text(`${d.bachelorsOrHigher}`);
};

const onMouseOut = () => {
  d3.select("#tooltip").classed("hidden", true);
};
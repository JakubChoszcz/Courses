const dataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json";

const width = 1200;
const height = 600;

const margin = {top: 100, right: 50, bottom: 240, left: 50};

const initialWidth = width + margin.left + margin.right;
const initialHeight = height + margin.top + margin.bottom;

const legendWidth = 100;
const legendHeight = 200;
const legendBlockSize = 14;

const colorTable = ['#63BA47', '#FCB926', '#F6831E', '#E13A3D', '#973C97', '#019CDC', '#EF82EF'];
const categories = ['Action', 'Drama', 'Adventure', 'Family', 'Animation', 'Comedy', 'Biography'];

const color = d3.scaleOrdinal()
  .range(colorTable);

const treemap = d3.treemap()
  .size([width, height])
  .padding(1);

d3.json(dataUrl).then((data) => {
  const dataset = data;

  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", initialWidth)
    .attr("height", initialHeight);

  const title = svg.append("text")
    .text("Movie earnings")
    .attr("id", "title")
    .attr("x", width / 2 + margin.left)
    .attr("y", margin.top / 2);

  const description = svg.append("text")
    .text("Top 95 Highest Earning Videos by Category")
    .attr("id", "description")
    .attr("x", width / 2 + margin.left)
    .attr("y", margin.top / 1.2);

  const root = d3.hierarchy(dataset)
    .sum(d => d.value);

  treemap(root);

  const cell = svg.selectAll("g")
    .data(root.leaves())
    .enter()
    .append("g")
    .attr("transform", (d) => `translate(${d.x0 + margin.left}, ${d.y0 + margin.top})`);

  const cellReact = cell.append("rect")
    .attr("data-name", (d) => d.data.name)
    .attr("data-category", (d) => d.data.category)
    .attr("data-value", (d) => d.data.value)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) =>  d.y1 - d.y0)
    .attr("class", "rect")
    .attr("fill", (d) => color(d.data.category))
    .on("mousemove", onMouseMove)
    .on("mouseout", onMouseOut);

  const cellLabel = cell.append("text")
    .selectAll("tspan")
    .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter()
    .append("tspan")
    .text((d) => d)
    .attr("x", 0)
    .attr("y", (d, i) => 8 + i * 8)
    .attr("class", "cell-label");

  const legend = svg.append("g")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .attr('transform', `translate(${width / 2 + margin.left}, ${height + margin.top + 20})`);

  legend.selectAll('rect')
    .data(categories)
    .enter()
    .append('rect')
    .attr("width", legendBlockSize)
    .attr("height", legendBlockSize)
    .attr("y", (d, i) => i * 28)
    .attr("fill", (d) => color(d));

  legend.selectAll("text")
    .data(categories)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("y", (d, i) => i * 28 + 12)
    .attr("x", 18);
})

const onMouseMove = (e, d) => {
  const tooltip = d3.select("#tooltip");

  tooltip.style("left", `${e.x}px`).style("top", `${e.y}px`);

  tooltip.classed("hidden", false);
  tooltip.select("#tooltip-name").text(`${d.data.name}`);
  tooltip.select("#tooltip-category").text(`${d.data.category}`);
  tooltip.select("#tooltip-value").text(`$${Math.round(d.data.value / 1000000)}M`);
}

const onMouseOut = () => {
  d3.select("#tooltip").classed("hidden", true);
}
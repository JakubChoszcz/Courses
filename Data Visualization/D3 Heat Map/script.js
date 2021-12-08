const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

const w = 1310;
const h = 440;

const wLegend = 440;
const hLegend = 240;

const p = 160;

const colorTable = ['#303795', '#4474B4', '#74ACD0', '#ABD9E9', '#E1F2F8', '#FFFFBF', '#FEE191', '#FDAE61', '#F46C42', '#D63127', '#A50026'];
const monthTable = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};

const colors = (t) => {
    return t < 2.8 ? colorTable[0] :
         t < 3.9 ? colorTable[1] :
         t < 5.0 ? colorTable[2] :
         t < 6.1 ? colorTable[3] :
         t < 7.2 ? colorTable[4] :
         t < 8.3 ? colorTable[5] :
         t < 9.5 ? colorTable[6] :
         t < 10.6 ? colorTable[7] :
         t < 11.7 ? colorTable[8] :
         t < 12.8 ? colorTable[9] :
         colorTable[10]
};

fetch(url)
    .then((res) => res.json())
    .then((dataset) => {
        const xScale = d3.scaleLinear()
                        .domain(d3.extent(dataset.monthlyVariance, (d, i) => d.year))
                        .range([0, w]);

        const yScale = d3.scaleLinear()
                        .domain(d3.extent(dataset.monthlyVariance, (d, i) => d.month))
                        .range([0, h]);

        const yAxisScale = d3.scaleTime()
                        .domain([new Date("1"), new Date("12")])
                        .range([0, h])

        const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

        const yAxis = d3.axisLeft(yAxisScale).tickFormat(d3.timeFormat("%B"));

        const svg = d3.select("#chart")
                        .append("svg")
                        .attr("width", w + p * 2)
                        .attr("height", h + p * 2);

        svg.append("text")
            .text("Monthly Global Land-Surface Temperature")
            .attr("id", "title")
            .attr("text-anchor", "middle")
            .attr("x", w / 2 + p)
            .attr("y", p / 4);


        svg.append("text")
            .text("1753 - 2015: base temperature 8.66℃")
            .attr("id", "description")
            .attr("text-anchor", "middle")
            .attr("x", w / 2 + p)
            .attr("y", p / 2);

        svg.selectAll(".rect")
            .data(dataset.monthlyVariance)
            .enter()
            .append("rect")
            .on("mouseover", onMouseOver)
            .on("mouseout", onMouseOut)
            .attr("class", "cell")
            .attr("width", w / 262)
            .attr("height", h / 11)
            .attr("x", (d, i) => xScale(d.year) + p)
            .attr("y", (d, i) => yScale(d.month) + p)
            .attr("fill", (d, i) => colors(8.66 + d.variance));

        svg.append("g")
            .attr("transform", `translate(${p}, ${h + p + 40})`)
            .call(xAxis);

        svg.append("g")
            .attr("transform", `translate(${p}, ${p + 20})`)
            .call(yAxis);

            svg.append("text")
                .attr("text-anchor", "middle")
                .attr("y", p / 2)
                .attr("x", -h / 2 - p)
                .attr("transform", "rotate(-90)")
                .text("Months");

        const legendScale = d3.scaleLinear()
                                .domain(d3.extent(dataset.monthlyVariance, (d) => 8.66 + d.variance))
                                .range([0, wLegend]);

        const legendAxis = d3.axisBottom(legendScale);

        const legend = svg.append("g")
                        .attr("width", wLegend)
                        .attr("height", hLegend);

        legend.selectAll("rect")
            .data(colorTable)
            .enter()
            .append("rect")
            .attr("class", "cell-legend")
            .attr("width", wLegend / 11)
            .attr("height", wLegend / 11)
            .attr("x", (d, i) => i * wLegend / 11 + p)
            .attr("y", h + hLegend)
            .attr("fill", (d, i) => d)
            .attr("stroke", "black")

        svg.append("g")
            .attr("transform", `translate(${p}, ${h + hLegend + 40})`)
            .call(legendAxis)
    })

const onMouseOver = (d, i, nodes) => {
    const tooltip = d3.select("#tooltip");

    tooltip.classed("hidden", false)
            .style("left", `${d.x}px`)
            .style("top", `${d.y}px`);
    
    tooltip.select("#date").text(`${i.year} - ${monthTable[i.month]}`);
    tooltip.select("#temperature").text(`${(8.66 + i.variance).toFixed(1)}℃`);
    tooltip.select("#variance").text(`${(i.variance).toFixed(1)}℃`);
}

const onMouseOut = () => {
    d3.select("#tooltip").classed("hidden", true);
}
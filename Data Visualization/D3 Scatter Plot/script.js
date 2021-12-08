const URL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

const onMouseOver = (d, i) => {
    const xCor = d.x + 15;
    const yCor = d.y + 10;

    d3.select("#tooltip")
        .style("left", xCor + 'px')
        .style("top", yCor + 'px')

        d3.select("#name").text(i.Name)
        d3.select("#nationality").text(i.Nationality)
        d3.select("#year").text(i.Year)
        d3.select("#time").text(i.Time)
        d3.select("#doping").text(i.Doping)
    
    d3.select("#tooltip")
        .classed("hidden", false)
}

const onMouseOut = (d, i) => {
    d3.select("#tooltip")
    .classed("hidden", true)
}

const timeToNum = (d) => Number(`${d.Time.slice(0, 2)}.${d.Time.slice(3, 6)}`);

const specifier = "%M:%S";

const w = 920;
const h = 630;
const p = 60;

fetch(URL)
    .then((res) => res.json())
    .then((res) => {
        const dataset = res;

        const parsedTime = dataset.map((d) => {
            return d3.timeParse(specifier)(d.Time)
        });
        
        // Create scale for the X axis
        const xScale = d3.scaleLinear()
                        .domain([d3.min(dataset, (d) => d.Year) - 1, d3.max(dataset, (d) => d.Year) + 1])
                        .range([0, w]);

        // Create scale for the Y axis
        const yScale = d3.scaleLinear()
                        .domain(d3.extent(dataset, (d) => timeToNum(d)))
                        // .domain([d3.min(dataset, (d) => timeToNum(d)), d3.max(dataset, (d) => timeToNum(d))])
                        .range([0, h]);

        // Create scale for the Y axis
        const yScaleAxis = d3.scaleLinear()
                        .domain(d3.extent(parsedTime))
                        // .domain([d3.min(dataset, (d) => timeToNum(d)), d3.max(dataset, (d) => timeToNum(d))])
                        .range([0, h]);

        // Create an X axis
        const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

        // Create an Y axis
        const yAxis = d3.axisLeft(yScaleAxis)
                        .tickFormat((d) => {
                            return d3.timeFormat(specifier)(d)
                        })
                        // .tickFormat(x => x.toString(10).slice(0, 2));

        // Create SVG
        const svg = d3.select("#chart")
                        .append("svg")
                        .attr("width", w + 2*p)
                        .attr("height", h + 2*p);

        // Create chart title
        svg.append("text")
            .attr("transform", `translate(-100, 0)`)
            .text("Doping in Professional Bicycle Racing")
            .attr("id", "title")
            .attr("x", w/2)
            .attr("y", p/2)
            .attr("font-size", "30")

        // Create chart subtitle
        svg.append("text")
            .text("35 Fastest times up Alpe d'Huez")
            .attr("x", w/2)
            .attr("y", p)

        // Create circles
        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => xScale(d.Year))
            .attr("cy", (d, i) => yScale(timeToNum(d)))
            .attr("r", "6")
            .attr("class", "dot")
            .attr("transform", `translate(${p}, ${p})`)
            .attr("fill", (d) => d.Doping === "" ? "#FE7E0E" : "#1F77B4")
            .on("mouseover", (d, i) => onMouseOver(d, i))
            .on("mouseout", (d, i) => onMouseOut(d, i))

        // Create SVG X axis
        svg.append("g")
            .attr("transform", `translate(${p}, ${h + p})`)
            .attr("id", "x-axis")
            .call(xAxis);

        // Create SVG Y axis
        svg.append("g")
            .attr("transform", `translate(${p}, ${p})`)
            .attr("id", "y-axis")
            .call(yAxis)

        svg.append("text")
                .attr("text-anchor", "end")
                .attr("x", -p)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Time in Minutes")

        // Create legend group
        const legend = svg.append("g")
                            .attr("id", "legend")

        // No doping legend group
        const noDopingLegend = legend.append("g")
                                    .attr("class", "legend-label")

        noDopingLegend.append("rect")
                    .attr("width", "18")
                    .attr("height", "18")
                    .attr("fill", "#FE7E0E")
                    .attr("x", w + p)
                    .attr("y", h/2)

        noDopingLegend.append("text")
                    .text("No doping allegations")
                    .attr("height", "18")
                    .attr("width", "200")
                    .attr("x", w - 150 + p)
                    .attr("y", h/2 + 14)

        // Doping legend group
        const dopingLegend = legend.append("g")
                    .attr("class", "legend-label")

        dopingLegend.append("rect")
                    .attr("width", "18")
                    .attr("height", "18")
                    .attr("fill", "#1F77B4")
                    .attr("x", w + p)
                    .attr("y", h/2 + 20)

        dopingLegend.append("text")
                    .text("Riders with doping allegations")
                    .attr("height", "18")
                    .attr("width", "200")
                    .attr("x", w - 205 + p)
                    .attr("y", h/2 + 34)
    })
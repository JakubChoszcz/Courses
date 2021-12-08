const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

    fetch(url)
    .then(res => res.json())
    .then(res => {
        let dataset = res.data;

        const w = 900;
        const h = 460;
        
        const padding = 20;

        const xScale = d3.scaleLinear();
            xScale.domain([0, dataset.length]);
            xScale.range([padding, w - padding]);

        const yScale = d3.scaleLinear();
            yScale.domain([d3.min(dataset, (d) => d[1]), d3.max(dataset, (d) => d[1])]);
            yScale.range([padding, h - padding]);

        const xAxis = d3.axisBottom(d3.scaleLinear().domain([d3.min(dataset, (d) => d[0].slice(0, 4)), d3.max(dataset, (d) => d[0].slice(0, 4))]).range([padding + padding, w - padding])).tickFormat(d3.format("d"));
        const yAxis = d3.axisLeft(d3.scaleLinear().domain([18064.7, 0]).range([padding, h]));
        
        const svg = d3.select("#char")
                        .append("svg")
                        .attr("width", w - padding)
                        .attr("height", h + padding);
        
            svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", (d, i) => xScale(i) + padding)
                .attr("y", (d, i) => h - yScale(d[1]))
                .attr("width", "3")
                .attr("height", (d) => yScale(d[1]))
                .attr("class", "bar")
                .append("title")
                .text((d) => `${d[0].slice(0, 4)} Q${d[0].slice(5, 7) < 4 ? 1 : d[0].slice(5, 7) < 7 ? 2 : d[0].slice(5, 7) < 10 ? 3 : 4}\n$${d[1]} Bilion`)

            svg.append("g")
                .attr('transform', `translate(0, ${h})`)
                .call(xAxis);

            svg.append("g")
                .attr('transform', `translate(${padding + padding}, 0)`)
                .call(yAxis);

            svg.append("text")
                .attr("text-anchor", "end")
                .attr("dy", "60")
                .attr("dx", "-50")
                .attr("transform", "rotate(-90)")
                .text("Gross Domestic Product");
    });
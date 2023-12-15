function init(){

// canvas size 	
	var w = 900;
	var h = 400;
	var dataset
	var padding = 0; // setting padding
	var color = {
		s1: "rgba(237,248,251)",
		s2: "rgba(179,205,227)",
		s3: "rgba(140,150,198)",
		s4: "rgba(136,86,167)",
		s5: "rgba(129,15,124)"

	};

// loading the csv file	
	d3.csv("price.csv", function(d) {

		//d.Nsw = parseInt(d['New South Wales'])
		//d.Sa = parseInt(d['South Australia']);
		return {
			
			
			date: d.year,
			Queensland: +d.Queensland,
			NSW : +d.NSW,
			Victoria : +d.Victoria,
			SA : +d.SA,
			Tasmania: +d.Tasmania
		};
	}).then(function(data){
		dataset = data;
		barChart(dataset);
	//printing data for checking in console
		console.table(dataset, ["date", "Queensland","NSW", "Victoria","SA","Tasmania"]);
		});
	

	
function barChart(){
		
		
	var xScale = d3.scaleBand()
	.domain(d3.range(dataset.length))
	.rangeRound([0,w])
	.paddingInner(0.05);

	var yScale = d3.scaleLinear()
		.domain([0,d3.max(dataset, function(d){return +d.Queensland;})
		])
		.range([0,h]);

	var svg = d3.select("#chart")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
	
	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("fill", color.s1)
		.attr("x", function(d,i){
			return xScale(i);
			})
		.attr("y",function(d){
			return h-yScale(+d.Queensland);
		})
		.attr("width",xScale.bandwidth())
		.attr("height",function(d){
		return yScale(+d.Queensland);
		});


	//--------------------------------------------------Queensland ---------------------------//
	d3.select("#queensland")
		.on("click", function(){				
			
		svg.selectAll("rect")
		.data(dataset)
		.transition()
		.attr("fill", color.s1)
		.duration(5000)
		.ease(d3.easeElasticOut)
		.delay(function(d,i){
			return i/dataset.length * 1000;
		})
		.attr("x", function(d,i){
			return xScale(i);
			})
		.attr("y",function(d){
			return h-yScale(+d.Queensland);
		})
		.attr("width",xScale.bandwidth())
		.attr("height",function(d){
			return yScale(+d.Queensland);
		});
		});

		svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d) {
			return d;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "12px")
		.attr("fill", "black")
		.attr("x", function(d, i) {
			return xScale(i) + (xScale.bandwidth() / 2);
		})
		// .attr("x", function(d, i) {
		// 	return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
		// })
		// .attr("y", function(d) {
		// 	return h - yScale(d) -5;
		// });
		.attr("y", function(d) {
			return h - (d * 4) + 14;
		});
		// .attr("x", function(d, i) {
		// 	return xScale(i) + (xScale.bandwidth() / 2) - 4;
		// })
		// .attr("y", function(d) {
		// 	return h - yScale(d) -5;
		// });


	//--------------------------------------------------Victoria ---------------------------//
	d3.select("#vic")
	.on("click", function(){				
		
	svg.selectAll("rect")
	.data(dataset)
	.transition()
	.attr("fill", color.s2)
	.duration(5000)
	.ease(d3.easeElasticOut)
	.delay(function(d,i){
		return i/dataset.length * 1000;
	})
	.attr("x", function(d,i){
		return xScale(i);
		})
	.attr("y",function(d){
		return h-yScale(+d.Victoria);
	})
	.attr("width",xScale.bandwidth())
	.attr("height",function(d){
		return yScale(+d.Victoria);
	});
	});

	//--------------------------------------------------SA ---------------------------//
	d3.select("#sa")
	.on("click", function(){				
		
		svg.selectAll("rect")
		.data(dataset)
		.transition()
		.duration(5000)
		.attr("fill", color.s3)
		.ease(d3.easeElasticOut)
		.delay(function(d,i){
			return i/dataset.length * 1000;
		})
		.attr("x", function(d,i){
			return xScale(i);
			})
		.attr("y",function(d){
			return h-yScale(+d.SA);
		})
		.attr("width",xScale.bandwidth())
		.attr("height",function(d){
			return yScale(+d.SA);
		});
		});

		//--------------------------------------------------NSW ---------------------------//
	d3.select("#nsw")
	.on("click", function(){				
		
	svg.selectAll("rect")
	.data(dataset)
	.transition()
	.duration(5000)
	.attr("fill", color.s4)
	.ease(d3.easeElasticOut)
	.delay(function(d,i){
		return i/dataset.length * 1000;
	})
	.attr("x", function(d,i){
		return xScale(i);
		})
	.attr("y",function(d){
		return h-yScale(+d.NSW);
	})
	.attr("width",xScale.bandwidth())
	.attr("height",function(d){
		return yScale(+d.NSW);
	});
	});
	//--------------------------------------------------Tas ---------------------------//
	d3.select("#tas")
	.on("click", function(){				
		
	svg.selectAll("rect")
	.data(dataset)
	.transition()
	.duration(5000)
	.attr("fill", color.s5)
	.ease(d3.easeElasticOut)
	.delay(function(d,i){
		return i/dataset.length * 1000;
	})
	.attr("x", function(d,i){
		return xScale(i);
		})
	.attr("y",function(d){
		return h-yScale(+d.Tasmania);
	})
	.attr("width",xScale.bandwidth())
	.attr("height",function(d){
		return yScale(+d.Tasmania);
	});
	});


						
	}
	


}
window.onload =init;
var chartsType = {
  charts(dataAxis, data, units, type, name, color, direction) {
    if(type=='bar'){
      if(direction=='x'){
        var option = {
          title: {
            text:units,
            textStyle: {
              color: '#fff',
              fontSize:14
            },
            x:30,
            y:5,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer : {
              type : 'shadow'
            },
          },
          grid:{
            top:40,
            left:40,
            bottom:20,
            containLabel:true
          },
          xAxis: {
            type: 'category',
            data: dataAxis,
            axisLabel: {
              interval:0,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#fff'
              }
            }
          },
          yAxis: {
            minInterval:1,
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#fff'
              }
            }
          },
          series: [{
            name:name,
            barWidth: name === '实际值' ? 10 : 20,
            data:data,
            barGap: '1%',
            type: 'bar',
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal:{
                color:color
              }
            },
          }]
        };
        return option;
      }
      else if(direction=='y'){
//				var dataShadow = [];
//				var yMax = Math.max(...data);
//				for (var i = 0; i < data.length; i++) {
//				    dataShadow.push(yMax);
//				}
        var option =  {
          title: {
            text: units,
            textStyle: {
              color: '#fff',
              fontSize:14
            },
            x:30,
            y:5,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid:{
            top:0,
            left:40,
            bottom:40,
            containLabel:true
          },
          xAxis: {
            show : false,
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            splitLine:{
              show:false
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#fff'
              }
            }
          },
          yAxis: {
            minInterval:1,
            type: 'category',
            data: dataAxis,
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            splitLine:{
              show:false
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0)'
              }
            }

          },
          series: [
//				    	{
//				            type: 'bar',
//				            barWidth:10,
//				            itemStyle: {
//				                normal: {color: '#fff'}
//				            },
//				            barGap:'-100%',
//				            barCategoryGap:'40%',
//				            data: dataShadow,
//				            animation: false
//				        },
            {
              name:name,
              barWidth:10,
              type: 'bar',
              itemStyle: {
                normal: {
                  color:color
                },
                emphasis: {
                  color:color
                }
              },
              data: data
            }
          ]
        }
        return option;
      }
    }
    else if(type=='line'){
      var option = {
        title: {
          text: units,
          textStyle: {
            color: '#fff',
            fontSize:14
          },
          x:10,
          y:5,
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            var htmlStr = '';
            htmlStr += '<div><span style="color:#fff;">' + params[0].name + '</span><br/> ';
            for(var i=0;i<params.length;i++){
              //前面的原点和他的颜色
              htmlStr += '<span style="width: 8px;height: 8px;display:inline-block;border-radius: 50%;background-color:'+params[i].color+'"></span><span style="color:#fff;">' + params[i].seriesName + ':</span>'+
                '<span style="color:#fff;">' + params[i].value + '&nbsp;元</span><br/>';
            }
            htmlStr += '</div>';
            return  htmlStr
          },
        },
        grid:{
          top:10,
          left:25,
          bottom:30,
          containLabel:true
        },
        xAxis: {
          type: 'category',
          data: dataAxis,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            },
          }
        },
        yAxis: {
          min: function(value) {return value.min-3;},
          max: function(value) {return value.max+3;},
          minInterval:1,
          type: 'value',
          axisLabel: {
            formatter:'{value}元',
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: name,
            type: 'line',
            smooth: 'true',
            showSymbol: false,
            symbol: 'none',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1, color: 'rgba(0,236,230,0.3)' // 0% 处的颜色
                }, {
                  offset: 0.8, color: 'rgba(255,255,255,0)' // 100% 处的颜色
                }, {
                  offset: 0, color: 'rgba(255,255,255,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            itemStyle: {
              emphasis: {
                symbol: 'circle',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal:{
                color:color,
                lineStyle:{
                  width:1//设置线条粗细
                }
              }
            },
            data: data
          }
        ]
      };
      return option;
    }else if(type=="staline"){
      var option = {
        grid:{
          top:10,
          left:25,
          bottom:30,
          containLabel:true
        },
        xAxis: {
          type: 'category',
          data: dataAxis,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            },
          }
        },
        yAxis: {
          min: function(value) {return value.min-3;},
          minInterval:1,
          type: 'value',
          axisLabel: {
            formatter:'{value}',
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: name,
            type: 'line',
            data: data
          }
        ]
      };
      return option;
    }else if(type=="stabar"){
      var option = {
        legend: {},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: dataAxis,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            },
          }
        },
        yAxis: {
          minInterval:1,
          type: 'value',
          axisLabel: {
            formatter:'{value}',
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            }
          }
        },
        series: [
          {
            data: data,
            type: 'bar'
          },
        ]
      };
      return option;
    }
  }
}

export default chartsType;

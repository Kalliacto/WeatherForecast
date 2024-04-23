import React, { useEffect } from 'react';
import s from './index.module.css';
import * as echarts from 'echarts';

const HourlyInfo = ({ weather }) => {
    useEffect(() => {
        const chartDom = document.getElementById('chartInfo');
        const myChart = echarts.init(chartDom);

        window.addEventListener('resize', function () {
            myChart.resize();
        });

        const option = {
            title: {
                text: 'Почасовой прогноз на день',
            },
            xAxis: {
                type: 'category',
                data: weather.hour.map((el) => el.time.slice(-5)),
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} ℃',
                    align: 'right',
                },
            },
            series: [
                {
                    data: weather.hour.map((el) => el.temp_c),
                    type: 'line',
                    smooth: true,
                },
            ],
        };
        option && myChart.setOption(option);
    }, [weather]);

    return (
        <div className={s.chart__container}>
            <div id='chartInfo' className={s.chart}></div>
        </div>
    );
};

export default HourlyInfo;

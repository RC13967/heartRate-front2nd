import './App.css';
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  const [ecgData, setEcgData] = useState([]);
  function getData() {
    fetch("https://heartrate-ranjith.herokuapp.com/getData", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((subjects) => setEcgData(subjects))
  }
  useEffect(() => {
    getData()
  }, []);
  const xmax = ecgData.sub1 ? [ecgData.x1Max,ecgData.x1Alg2Max, ecgData.x2Max, ecgData.x2Alg2Max,
    ecgData.x3Max,ecgData.x3Alg2Max, ecgData.x4Max, ecgData.x4Alg2Max ] :"";
    const ymax = ecgData.sub1 ? [ecgData.sub1Max,ecgData.sub1Alg2Max, ecgData.sub2Max, ecgData.sub2Alg2Max,
      ecgData.sub3Max,ecgData.sub3Alg2Max, ecgData.sub4Max, ecgData.sub4Alg2Max ] :"";
      const ymin = ecgData.sub1 ? [ecgData.sub1Min,ecgData.sub1Alg2Min, ecgData.sub2Min, ecgData.sub2Alg2Min,
        ecgData.sub3Min,ecgData.sub3Alg2Min, ecgData.sub4Min, ecgData.sub4Alg2Min ] :"";
        const peakIndexes = ecgData.sub1 ? [ecgData.peaks1Indexes,ecgData.peaks1Alg2Indexes,ecgData.peaks2Indexes,
          ecgData.peaks2Alg2Indexes, ecgData.peaks3Indexes,ecgData.peaks3Alg2Indexes,ecgData.peaks4Indexes,
          ecgData.peaks4Alg2Indexes] :"";
          const labels = ['magnitudes1','magnitudes2','magnitudes3','magnitudes4',
          'magnitudes5','magnitudes6','magnitudes7','magnitudes8']
        function findColor( context )
        {
          let peakindices = peakIndexes[labels.indexOf(context.dataset.label)];
          let index = context.dataIndex;
           if (peakindices.indexOf(index) !== -1 ) return 'red'
          return 'green'
        }
        function findRadius( context )
        {
          let peakindices = peakIndexes[labels.indexOf(context.dataset.label)];
          let index = context.dataIndex;
          if (peakindices.indexOf(index) !== -1 ) return 5
          else return 1
        }
  const state1 = {
    labels: ecgData.sub1 ? ecgData.sub1.map((el, index) => ((index/ecgData.sub1.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes1',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub1 ? ecgData.sub1 : ""
      }
    ]
  };
  const state2 = {
    labels: ecgData.sub1Alg2 ? ecgData.sub1Alg2.map((el, index) => ((index/ecgData.sub1Alg2.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes2',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub1Alg2 ? ecgData.sub1Alg2 : ""
      }
    ]
  };
  const state3 = {
    labels: ecgData.sub2 ? ecgData.sub2.map((el, index) => ((index/ecgData.sub2.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes3',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub2 ? ecgData.sub2 : ""
      }
    ]
  };
  const state4 = {
    labels: ecgData.sub2Alg2 ? ecgData.sub2Alg2.map((el, index) => ((index/ecgData.sub2Alg2.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes4',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub2Alg2 ? ecgData.sub2Alg2 : ""
      }
    ]
  };
  const state5 = {
    labels: ecgData.sub3 ? ecgData.sub3.map((el, index) => ((index/ecgData.sub3.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes5',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub3 ? ecgData.sub3 : ""
      }
    ]
  };
  const state6 = {
    labels: ecgData.sub3Alg2 ? ecgData.sub3Alg2.map((el, index) => ((index/ecgData.sub3Alg2.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes6',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub3Alg2 ? ecgData.sub3Alg2 : ""
      }
    ]
  };
  const state7 = {
    labels: ecgData.sub4 ? ecgData.sub4.map((el, index) => ((index/ecgData.sub4.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes7',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub4 ? ecgData.sub4 : ""
      }
    ]
  };
  const state8 = {
    labels: ecgData.sub4Alg2 ? ecgData.sub4Alg2.map((el, index) => ((index/ecgData.sub4Alg2.length)*60).toFixed(2)) : ""
    ,
    datasets: [
      {
        label: 'magnitudes8',
        fill: false,
        pointRadius: findRadius,
        backgroundColor:findColor,
        borderColor: findColor,
        data: ecgData.sub4Alg2 ? ecgData.sub4Alg2 : ""
      }
    ]
  };
  const states = [state1, state2, state3, state4, state5, state6, state7, state8];
  const ecgTitles = ["ECG 1 - Algorithm 1 (stress ECG - challenge 2018 test set database)", 
  "ECG 1 - Algorithm 2(stress ECG - challenge 2018 test set database)", 
  "ECG 2 - Algorithm 1(stress ECG - stress recognition in automobile drivers)", 
  "ECG 2 - Algorithm 2(stress ECG - stress recognition in automobile drivers)",
    "ECG3 - Algorithm1(resting state ECG)", "ECG3 - Algorithm2(resting state ECG)", 
    "ECG4 - Algorithm1(stress ECG - MIT BIH Noise stress test database)", 
    "ECG4 - Algorithm2(stress ECG - MIT BIH Noise stress test database)"]
  return (
    <div className="App">
      {ecgData.sub1 ? 
        ecgTitles.map((title, index) => <>
          <div className="chart-heading">{title}</div>
          <Line
            data={states[index]}
            options={{
              animation: false,
              normalized:true,
              spanGaps:true,
              scales: {
                x: {
                  max:xmax[index],
                  min:0,
                  title: {
                    display: true,
                    text: 'time (seconds)',
                    fontSize: 20,
                    color: 'blue',
                  },
                },
                y:{
                  max:ymax[index],
                  min:ymin[index]
                }
              },
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
          {index === 0 ? <div className="container">
            <div className="title">Algorithm 1 : threshold = (median + maximum + mid)/3 , where mid = (max + min)/2</div>
            <ul><div>Assuming all peaks lie above threshold, </div>
              <li>peaks from algorithm 1 = <b>{ecgData.peaks1.length}</b></li>
              <li>Total peaks = <b>77</b></li>
              <li>Therefore, missed peaks = <b>{77 - ecgData.peaks1.length}</b> </li>
              <li>Hence %missed peaks = <b>{((77 - ecgData.peaks1.length) / 77) * 100}%</b></li></ul>
          </div> : ""}
          {index === 1 ? <><div className="container">
            <div className="title">Algorithm 2: using double difference squares</div>
            <div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
            <div> The threshold value is taken as (mid + min)/3 , where mid value = (max + min) / 2</div>
            <ul><div>Assuming all peaks lie above threshold,</div>
              <li>peaks from algorithm2 = <b>{ecgData.peaks1Alg2.length}</b></li>
              <li>Total peaks = <b>77</b></li>
              <li>Therefore, missed peaks = <b>{77 - ecgData.peaks1Alg2.length}</b></li>
              <li>Hence %missed peaks = <b>{((77 - ecgData.peaks1Alg2.length) / 77) * 100}%</b></li></ul>
          </div><hr/></> : ""}
          {index === 2 ? <div className="container">
            <div className="title">Algorithm 1 : threshold = (median + maximum + mid)/3 , where mid = (max + min)/2</div>
            <ul><div>Assuming all peaks lie above threshold, </div>
              <li>peaks from algorithm 1 = <b>{ecgData.peaks2.length}</b></li>
              <li>Total peaks = <b>69</b></li>
              <li>Therefore, missed peaks = <b>{69 - ecgData.peaks2.length}</b></li>
              <li>Hence %missed peaks = <b>{((69 - ecgData.peaks2.length) / 69) * 100}%</b></li></ul>
          </div> : ""}
          {index === 3 ? <><div className="container">
            <div className="title">Algorithm 2: using double difference squares</div>
            <ul><div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
              <li> The threshold value is taken as (mid + min)/3, where mid value = (max + min) / 2</li>
              <li>Assuming all peaks lie above threshold,</li>
              <li>peaks from algorithm2 = <b>{ecgData.peaks2Alg2.length}</b></li>
              <li>Total peaks = <b>69</b></li>
              <li>Therefore, missed peaks = <b>{69 - ecgData.peaks2Alg2.length}</b></li>
              <li>Hence %missed peaks = <b>{((69 - ecgData.peaks2Alg2.length) / 69) * 100}%</b></li></ul>
          </div><hr/></> : ""}
          {index === 4 ? <div className="container">
            <div className="title">Algorithm 1 : threshold = (median + maximum + mid)/3 , where mid = (max + min)/2</div>
            <ul><div>Assuming all peaks lie above threshold, </div>
              <li>peaks from algorithm 1 = <b>{ecgData.peaks3.length}</b></li>
              <li>Total peaks = <b>80</b></li>
              <li>Therefore, missed peaks = <b>{80 - ecgData.peaks3.length}</b></li>
              <li>Hence %missed peaks = <b>{((80 - ecgData.peaks3.length) / 80) * 100}%</b></li></ul>
          </div> : ""}
          {index === 5 ? <><div className="container">
            <div className="title">Algorithm 2: using double difference squares</div>
            <ul><div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
              <li> The threshold value is taken as (mid + min)/3, where mid value = (max + min) / 2</li>
              <li>Assuming all peaks lie above threshold,</li>
              <li>peaks from algorithm2 = <b>{ecgData.peaks3Alg2.length}</b></li>
              <li>Total peaks = <b>80</b></li>
              <li>Therefore, missed peaks = <b>{80 - ecgData.peaks3Alg2.length}</b></li>
              <li>Hence %missed peaks = <b>{((80 - ecgData.peaks3Alg2.length) / 80) * 100}%</b></li></ul>
          </div><hr/></> : ""}
          {index === 6 ? <div className="container">
            <div className="title">Algorithm 1 : threshold = (median + maximum + mid)/3 , where mid = (max + min)/2</div>
            <ul><div>Assuming all peaks lie above threshold, </div>
              <li>peaks from algorithm 1 = <b>{ecgData.peaks4.length}</b></li>
              <li>Total peaks = <b>73</b></li>
              <li>Therefore, missed peaks = <b>{73 - ecgData.peaks4.length}</b></li>
              <li>Hence %missed peaks = <b>{((73 - ecgData.peaks4.length) / 73) * 100}%</b></li></ul>
          </div> : ""}
          {index === 7 ? <div className="container">
            <div className="title">Algorithm 2: using double difference squares</div>
            <ul><div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
              <li> The threshold value is taken as (mid + min)/3, where mid value = (max + min) / 2</li>
              <li>Assuming all peaks lie above threshold,</li>
              <li>peaks from algorithm2 = <b>{ecgData.peaks4Alg2.length}</b></li>
              <li>Total peaks = <b>73</b></li>
              <li>Therefore, missed peaks = <b>{73 - ecgData.peaks4Alg2.length}</b></li>
              <li>Hence %missed peaks = <b>{((73 - ecgData.peaks4Alg2.length) / 73) * 100}%</b></li></ul><hr/>

            <div className="title">Explanation</div>
            <ul>
              <li>For algorithm 1, the average of mid, median amd max is taken as threshold because - median will be 
                helpful if there is unsymmetrical distribution of data, mid gives the minimum reference for 
                peak, max gives the maximum reference for peak </li>
                <li>For algorithm 2, the differences will be very less for P/T wave and higher for QRS complex. 
                  By squaring the differences, the P/T wave is supressed and QRS complex is enhanced. Hence the peak values 
                  are found out for QRS by taking a threshold of mid = (max + min)/2. </li>
                  <li>But we might false peaks because
                 of the noise in the QRS wave. To avoid this, a certain time interval is taken from 
                 every point. The multiple peaks obtained in this time interval is removed. 
                 Thus, having only one peak in the taken time interval</li></ul>
            <div className="title">Conclusion</div>
            <ul>
              <li>Algorithm 1 is very efficient for resting state ecg. It is less efficient for stress because, for 
                stress ecg, P/T waves will make the median value shift near to maximum value and some peaks will be 
                ignored by the algorithm </li>
              <li>Algorithm 2 is efficient for resting state ecg but not efficient for stress ecg because it doesnt use median.
                 we observe in ECG 2 that, as the peak value is much higher, threshold is higher as the median is not used.
                 If there is no such high peaks in the data, then the algorithm will be efficient.To avoid this, filters must be 
                 used to filter out such high peaks and set threshold. Here, the P/T complex is supressed by taking squares of 
                 differences. Hence peaks depends only on QRS wave. By avoiding high peaks for estimation of threshold, we get accurate.
              </li>
            </ul>
            <div className="title">codes</div>
            <ul>
              <li><a href="https://github.com/RC13967/heart-rate-backend/blob/master/index.js"
                target="_blank" rel="noopener noreferrer">
                back end code link (using node js)</a></li>
              <li><a href="https://github.com/RC13967/heartRate-front2nd/blob/main/src/App.js"
                target="_blank" rel="noopener noreferrer">
                front end code link (using reactjs and chartjs)</a></li>
            </ul>
            <div className="title">References</div>
            <ul>
              <li><a href="https://www.koreascience.or.kr/article/JAKO201827041050959.pdf"
                target="_blank" rel="noopener noreferrer">
                Mid Value</a></li>
              <li><a href="https://pdf.sciencedirectassets.com/282073/1-s2.0-S2212017312X00057/1-s2.0-S2212017312004227/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQClO7%2BkR4I7QoVXCcX9wBCfkZBjKYzFiHYJsD2w2bet3gIhAMc%2By8b%2BORNidq2DIFxjZiXhsWXMN9nc3xPUaBPKPAByKoMECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMDU5MDAzNTQ2ODY1IgxCxK2kIoBGofwPwzoq1wPdIHd13LqVhB5XxMQd0rpswFt5a8NsgnOuIDa4t9see%2FgZg7mOSsv93hx%2B9h52%2FZcCWUD6hLQfkF0CJonF8Uj4Z8wuRE0D9ADSeAvGH70DnkMOlngk1wocQJmV5bNhQWTQ%2FSQQHVRSDhU8jOF2teK9zl8vxsi3mmPuOW86l%2FfVHR8L7qVwL70v%2BEL4r1Zoi9XLh1KjNm1IVFp943pe%2BOFGgJzany5A2DVoSu5Bqd6LsXpzODprim86gMjMWIwhgRtwRQcTy2biKVIQ1qr3MXP8Gevhy9Teiyodz3CeeXjSGdq0D9Xea55MRwNGxwnbps5ngPVql%2B6sxnLxKL6PX0Up2oqXsRXIdqAJEEMpp7IN9BaZ1aS9OjBPv0BnsaM4E2ixMuY%2BJjmZkXxJk2PPpzT%2BXlE33qZdyun%2BQIqTio0RflWlK%2FXSCA5TZu98I8Ur9dkG%2BqoRZPb4bztLpNLaVCzhlVqGdBtegcF1wQh7yCKnnXbjQqP8w4JfwLghClnXZRZWR0NSQFAsU75%2B1I7nV%2BkK5vh%2Bq0LnsAGNgsHGPI%2FA3L9%2Bwac8mK2jeqd584vuDeWZfjK6vBUB7WwiFscRa46Djcb5ZlXprbFi8%2FK3Si9QgbDsOuehEQEww9u3jQY6pAF6cM%2BggstuQV6jicz%2F6h98NGz%2BNkrU5445hcX1Lz%2BWALGYeYNHwIq1GzjQI%2FmV4pv41srOcsKY6nJmWdsMN714FREapaNgtRLdQNDP1PIm8Sm3a8IbsvOwRWuQfPFc8Ne%2FFXUrmt%2B%2BcruisQ55LIul%2FoPvhwhVFpLNVF05vii8uHfo42icLTy4QuZu0stk1ow1Ya%2BElNwZQIattecXcJY89ogk1w%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211206T114859Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY4QEBH64J%2F20211206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1f694471f1f5acd76d4908aa820de766cdac224bca2a7b0712e296f4afb0a6c7&hash=65dd3f68111f9ad868496a65615bf5b5e67c5a7e5c6b409250ae0bb28149b2b0&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S2212017312004227&tid=spdf-13fa3c11-e1f6-42f5-8084-0297cf052c84&sid=100965e883aef24b6a3af080c36ca78cd145gxrqb&type=client"
                target="_blank" rel="noopener noreferrer">
                Double-squared-differences
              </a></li>
            </ul>
          </div>
            : ""}

        </>)
        :<div className="loading">Please wait...<CircularProgress /></div>
        }

    </div>
  );
}

export default App;
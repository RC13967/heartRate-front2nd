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
  const state1 = {
    labels: ecgData.sub1 ? ecgData.sub1.map((el, index) => index) : ""
    ,
    datasets: [
      {
        label: 'magnitude',
        fill: false,
        pointRadius: 1,
        lineTension: 0.3,
        backgroundColor: '#e80805',
        borderColor:'green',
        data: ecgData.sub1 ? ecgData.sub1 : ""
      }
    ]
  };
  const state2 = {
    labels: ecgData.sub1Alg2 ? ecgData.sub1Alg2.map((el, index) => index) : ""
    ,
    datasets: [
      {
        label: 'magnitude',
        fill: false,
        pointRadius: 1,
        lineTension: 0.3,
        backgroundColor: '#e80805',
        borderColor:'green',
        data: ecgData.sub1Alg2 ? ecgData.sub1Alg2 : ""
      }
    ]
  };
  const state3 = {
    labels: ecgData.sub2 ? ecgData.sub2.map((el, index) => index) : ""
    ,
    datasets: [
      {
        label: 'magnitude',
        fill: false,
        pointRadius: 1,
        lineTension: 0.3,
        backgroundColor: '#e80805',
        borderColor:'green',
        data: ecgData.sub2 ? ecgData.sub2 : ""
      }
    ]
  };
  const state4 = {
    labels: ecgData.sub2Alg2 ? ecgData.sub2Alg2.map((el, index) => index) : ""
    ,
    datasets: [
      {
        label: 'magnitude',
        fill: false,
        pointRadius: 1,
        lineTension: 0.3,
        backgroundColor: '#e80805',
        borderColor:'green',
        data: ecgData.sub2Alg2 ? ecgData.sub2Alg2 : ""
      }
    ]
  };
  const states = [state1,state2, state3, state4];
  const ecgTitles = ["ECG 1 - Algorithm 1","ECG 1 - Algorithm 2", "ECG 2 - Algorithm 1", "ECG 2 - Algorithm 2" ]
  return (
    <div className="App">
        {!ecgData.sub1 ? 
          <div className="loading">Please wait...<CircularProgress /></div>
          : ecgTitles.map((title,index)=><>
          <div className="chart-heading">{title}</div>
          <Line
            data={states[index]}
            options={{
              animation:false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'time',
                    fontSize: 20,
                    color: 'blue',
                  },
                }
              },
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
          {index ===0 ?<div className="container">
            <div className="title">Algorithm 1 : threshold = (max + min) / 2</div>
            <ul><div>Assuming all peaks lie above threshold, </div>
          <li>peaks from algorithm 1 = <b>{ecgData.peaks1.length}</b></li>
          <li>Total peaks = <b>70</b></li>
          <li>Therefore, missed peaks = <b>{70 -  ecgData.peaks1.length}</b> </li>
          <li>Hence %missed peaks = <b>{((70 -  ecgData.peaks1.length)/70)*100}%</b></li></ul>
          </div>:""}
          {index ===1 ?<div className="container">
          <div className="title">Algorithm 2: using double difference squares</div>
          <div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
          <div> The threshold value is taken as 25% of the mid value, where mid value = (max + min) / 2</div>
          <ul><div>Assuming all peaks lie above threshold,</div>
          <li>peaks from algorithm2 = <b>{ecgData.peaks1Alg2.length}</b></li>
          <li>Total peaks = <b>70</b></li>
          <li>Therefore, missed peaks = <b>{70 -  ecgData.peaks1Alg2.length}</b></li>
          <li>Hence %missed peaks = <b>{((70 -  ecgData.peaks1Alg2.length)/70)*100}%</b></li></ul>
          </div>:""}
          {index ===2 ?<div className="container">
          <div className="title">Algorithm 1 : threshold = (max + min) / 2</div>
          <ul><div>Assuming all peaks lie above threshold, </div>
          <li>peaks from algorithm 1 = <b>{ecgData.peaks2.length}</b></li>
          <li>Total peaks = <b>103</b></li>
          <li>Therefore, missed peaks = <b>{103 -  ecgData.peaks2.length}</b></li>
          <li>Hence %missed peaks = <b>{((103 -  ecgData.peaks2.length)/103)*100}%</b></li></ul>
          </div>:""}
          {index ===3 ?<div className="container">
          <div className="title">Algorithm 2: using double difference squares</div>
          <ul><div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
          <li> The threshold value is taken as 25% of the mid value, where mid value = (max + min) / 2</li>
          <li>Assuming all peaks lie above threshold,</li>
          <li>peaks from algorithm2 = <b>{ecgData.peaks2Alg2.length}</b></li>
          <li>Total peaks = <b>103</b></li>
          <li>Therefore, missed peaks = <b>{103 -  ecgData.peaks2Alg2.length}</b></li>
          <li>Hence %missed peaks = <b>{((103 -  ecgData.peaks2Alg2.length)/103)*100}%</b></li></ul>
          </div>:""}
          
          </>)}
          <div className="container">
          <div className="title">codes</div>
          <ul>
            <li><a href = "https://github.com/RC13967/heart-rate-backend/blob/master/index.js">
              back end code link (using node js)</a></li>
              <li><a href = "https://github.com/RC13967/heartRate-front2nd/blob/main/src/App.js">
                front end code link (using reactjs and chartjs)</a></li>
          </ul>
          <div className="title">References</div>
          <ul>
            <li><a href = "https://www.koreascience.or.kr/article/JAKO201827041050959.pdf">
              Mid Value</a></li>
              <li><a href = "https://pdf.sciencedirectassets.com/282073/1-s2.0-S2212017312X00057/1-s2.0-S2212017312004227/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQClO7%2BkR4I7QoVXCcX9wBCfkZBjKYzFiHYJsD2w2bet3gIhAMc%2By8b%2BORNidq2DIFxjZiXhsWXMN9nc3xPUaBPKPAByKoMECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMDU5MDAzNTQ2ODY1IgxCxK2kIoBGofwPwzoq1wPdIHd13LqVhB5XxMQd0rpswFt5a8NsgnOuIDa4t9see%2FgZg7mOSsv93hx%2B9h52%2FZcCWUD6hLQfkF0CJonF8Uj4Z8wuRE0D9ADSeAvGH70DnkMOlngk1wocQJmV5bNhQWTQ%2FSQQHVRSDhU8jOF2teK9zl8vxsi3mmPuOW86l%2FfVHR8L7qVwL70v%2BEL4r1Zoi9XLh1KjNm1IVFp943pe%2BOFGgJzany5A2DVoSu5Bqd6LsXpzODprim86gMjMWIwhgRtwRQcTy2biKVIQ1qr3MXP8Gevhy9Teiyodz3CeeXjSGdq0D9Xea55MRwNGxwnbps5ngPVql%2B6sxnLxKL6PX0Up2oqXsRXIdqAJEEMpp7IN9BaZ1aS9OjBPv0BnsaM4E2ixMuY%2BJjmZkXxJk2PPpzT%2BXlE33qZdyun%2BQIqTio0RflWlK%2FXSCA5TZu98I8Ur9dkG%2BqoRZPb4bztLpNLaVCzhlVqGdBtegcF1wQh7yCKnnXbjQqP8w4JfwLghClnXZRZWR0NSQFAsU75%2B1I7nV%2BkK5vh%2Bq0LnsAGNgsHGPI%2FA3L9%2Bwac8mK2jeqd584vuDeWZfjK6vBUB7WwiFscRa46Djcb5ZlXprbFi8%2FK3Si9QgbDsOuehEQEww9u3jQY6pAF6cM%2BggstuQV6jicz%2F6h98NGz%2BNkrU5445hcX1Lz%2BWALGYeYNHwIq1GzjQI%2FmV4pv41srOcsKY6nJmWdsMN714FREapaNgtRLdQNDP1PIm8Sm3a8IbsvOwRWuQfPFc8Ne%2FFXUrmt%2B%2BcruisQ55LIul%2FoPvhwhVFpLNVF05vii8uHfo42icLTy4QuZu0stk1ow1Ya%2BElNwZQIattecXcJY89ogk1w%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211206T114859Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY4QEBH64J%2F20211206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1f694471f1f5acd76d4908aa820de766cdac224bca2a7b0712e296f4afb0a6c7&hash=65dd3f68111f9ad868496a65615bf5b5e67c5a7e5c6b409250ae0bb28149b2b0&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S2212017312004227&tid=spdf-13fa3c11-e1f6-42f5-8084-0297cf052c84&sid=100965e883aef24b6a3af080c36ca78cd145gxrqb&type=client">
                Double-squared-differences
              </a></li>
          </ul>
          </div>
    </div>
  );
}

export default App;
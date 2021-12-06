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
          <div>Assuming all peaks lie above threshold, </div>
          <div>peaks from algorithm 1 = <b>{ecgData.peaks1.length}</b></div>
          <div>Total peaks = <b>70</b></div>
          <div>Therefore, missed peaks = <b>{70 -  ecgData.peaks1.length}</b> </div>
          <div>Hence %missed peaks = <b>{((70 -  ecgData.peaks1.length)/70)*100}%</b></div>
          <div></div>
          </div>:""}
          {index ===1 ?<div className="container">
          <div className="title">Algorithm 2: using double difference squares</div>
          <div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
          <div> The threshold value is taken as 25% of the mid value, where mid value = (max + min) / 2</div>
          <div>Assuming all peaks lie above threshold,</div>
          <div>peaks from algorithm2 = <b>{ecgData.peaks1Alg2.length}</b></div>
          <div>Total peaks = <b>70</b></div>
          <div>Therefore, missed peaks = <b>{70 -  ecgData.peaks1Alg2.length}</b></div>
          <div>Hence %missed peaks = <b>{((70 -  ecgData.peaks1Alg2.length)/70)*100}%</b></div>
          <div></div>
          </div>:""}
          {index ===2 ?<div className="container">
          <div className="title">Algorithm 1 : threshold = (max + min) / 2</div>
          <div>Assuming all peaks lie above threshold, </div>
          <div>peaks from algorithm 1 = <b>{ecgData.peaks2.length}</b></div>
          <div>Total peaks = <b>103</b></div>
          <div>Therefore, missed peaks = <b>{103 -  ecgData.peaks2.length}</b></div>
          <div>Hence %missed peaks = <b>{((103 -  ecgData.peaks2.length)/103)*100}%</b></div>
          <div></div>
          </div>:""}
          {index ===3 ?<div className="container">
          <div className="title">Algorithm 2: using double difference squares</div>
          <div> the squared double differences are calculated at all points to form an array(say 'array1') </div>
          <div> The threshold value is taken as 25% of the mid value, where mid value = (max + min) / 2</div>
          <div>Assuming all peaks lie above threshold,</div>
          <div>peaks from algorithm2 = <b>{ecgData.peaks2Alg2.length}</b></div>
          <div>Total peaks = <b>103</b></div>
          <div>Therefore, missed peaks = <b>{103 -  ecgData.peaks2Alg2.length}</b></div>
          <div>Hence %missed peaks = <b>{((103 -  ecgData.peaks2Alg2.length)/103)*100}%</b></div>
          <div></div>
          </div>:""}
          
          </>)}
    </div>
  );
}

export default App;
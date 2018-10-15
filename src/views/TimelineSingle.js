import React, {Component} from 'react';
import axios from 'axios';

//import CustomTimeline from '../components/TimelineComp';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Description from '@material-ui/icons/Description';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';


class AllTransactions extends Component {
    // default state object
    state = {
        Records:[]
    };
  
    componentDidMount() {
      axios
        .get("http://138.68.51.48:3000/api/system/historian")
        .then(response => {          
          const records = response.data.map(c => {
            return [
                 c.transactionId,
                 c.transactionType,
                 c.participantInvoking,
                 c.transactionTimestamp
            ];
          });

          records.sort(function(a, b) {
            return new Date(b[3]) - new Date(a[3]);
          });
  
          // create a new "state" object without mutating
          // the original state object.
          const newRecord = Object.assign({}, {
            Records:records
          });
          // store the new state object in the component's state
          this.setState({
            Records: newRecord.Records
            });
        })
        .catch(error => console.log(error));
    }
  
    render() {
      return (
            <div>
            <VerticalTimeline layout="1-column">
            {this.state.Records.map((r) => {
              //console.log("state", r);
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={(typeof r[3] != 'undefined')?r[3].split("T")[0]+" "+r[3].split("T")[1].split(".")[0]:""}
                    icon={<Description/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    key={r[0]}
                  >
                  <h3 className="vertical-timeline-element-title">{(r[1].split(".")[4] !== undefined)?r[1].split(".")[4]:r[1].split(".")[2]}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{r[0]}</h4>
                  <p className="vertical-timeline-element-conten">{(typeof r[2] != 'undefined')?r[2].split(".")[4]:r[2]}</p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
            </div>
      );
    }
  }

export default (AllTransactions);
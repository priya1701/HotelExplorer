import React, {Component} from 'react';
import axios from 'axios';

import CustomTimeline from '../components/TimelineComp';


class AllRecords extends Component {
    // default state object
    state = {
      Records: []
    };
  
    componentDidMount() {
      axios
        .get("http://13.126.150.151:3000/api/system/historian")
        .then(response => {          
          const records = response.data.map(c => {
            return [
                 c.transactionId,
                 c.transactionType,
                 c.participantInvoking,
                 c.transactionTimestamp
            ];
          });
  
          // create a new "state" object without mutating
          // the original state object.
          const newRecord = Object.assign({}, {
            Records: records
          });
          // store the new state object in the component's state
          this.setState({Records: newRecord.Records});
        })
        .catch(error => console.log(error));
    }
  
    render() {
      const { classes } = this.props;
      return (
        <CustomTimeline
        timelineData={this.state.Records}
        />
      );
    }
  }

export default (AllRecords);
import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Description from '@material-ui/icons/Description';
import './style.css';


class CustomTimeline extends Component{

    render(){
        const {classes, timelineData,time} = this.props;

        return(
            <div>
                <VerticalTimeline layout="1-column">
                    {timelineData.map((prop,key) => {
                        return (
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={time}
                            icon={<Description/>}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            key={key}
                          >
                            {prop}
                          </VerticalTimelineElement>
                        );
                      })}
                </VerticalTimeline>
            </div>
        );

    }
}

export default (CustomTimeline);
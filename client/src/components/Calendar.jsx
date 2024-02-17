import React from "react";
import Section from "./section";
import Box from "./box";

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <Section className="section section-two">
          <Box className="box">
            <div className="calendar-numbers">
              <h2>Месяц</h2>
              <div className="calendar-button">
                {Array.from({ length: 31 }, (_, index) => (
                  <h6 key={index} className="calendar-number">{index + 1}</h6>
                ))}
              </div>
            </div>
          </Box>
        </Section>
      </div>
    )
  }
}

export default Calendar
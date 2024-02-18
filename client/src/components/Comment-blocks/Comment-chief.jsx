import React from "react";
import Section from "../section";
import Box from "../box";

class CommentChief extends React.Component {
  render() {
    return (
      <div>
        <Section className="section section-single">
          <Box className="box box-main">
            <div className="container-one">
              <div className="comment-block">
                <h2>Отзывы</h2>
                <div className="comment-list">

                  <div className="comment-element">
                    <div className="comment-delete"><h6>01.01.2023</h6></div>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Section>
      </div >
    )
  }
}

export default CommentChief
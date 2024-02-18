import React from "react";
import Section from "../section";
import Box from "../box";

class CommentUser extends React.Component {
  render() {
    return (
      <div>
        <Section className="section section-single">
          <Box className="box box-main">
            <div className="container-one">
              <div className="comment-block">
                <div className="comment-form">
                  <h2>Оставить отзыв</h2>
                  <form>
                    <input type="date" />
                    <textarea type="text" maxLength="250" minLength={2} />
                    <button>Отправить</button>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </Section>
      </div >
    )
  }
}

export default CommentUser
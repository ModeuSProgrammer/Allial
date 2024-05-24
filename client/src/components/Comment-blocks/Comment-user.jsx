import React, { useState } from "react"
import Section from "../section"
import Box from "../box"
import { SendCommentU } from "../../actions/user"

const CommentUser = () => {
  const [dateComment, SetDataComment] = useState('')
  const [textComment, SetTextComment] = useState('')
  function handlerCleaer() {
    SetDataComment('')
    SetTextComment('')
  }
  return (
    <div>
      <Section className="section section-single">
        <Box className="box">
          <div className="container-one">
            <div className="comment-block">
              <div className="comment-form">
                <h2>Оставить отзыв</h2>
                <form onSubmit={(e) => { e.preventDefault(); SendCommentU(dateComment, textComment); handlerCleaer() }} >
                  <input type="date" value={dateComment} onChange={(e) => SetDataComment(e.target.value)} required />
                  <textarea type="text" value={textComment} onChange={(e) => SetTextComment(e.target.value)} maxLength="250" minLength={2} required />
                  <input type="submit" className="button" value="Отправить" />
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Section>
    </div >
  )
}

export default CommentUser
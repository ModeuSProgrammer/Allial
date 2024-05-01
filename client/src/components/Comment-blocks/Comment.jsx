import React, { useEffect, useState } from "react"
import Section from "../section"
import Box from "../box"
import { DelComment, ShowComment } from "../../actions/user"
import { useSelector } from "react-redux"

const Comment = () => {
  const date = new Date()
  const day = date.getDate()
  const mounth = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)
  const yaer = date.getFullYear()
  const DateFull = day + '.' + mounth + '.' + yaer
  const DateComment = yaer + '-' + mounth + '-' + day

  const [commentsFlag, SetCommentsFlag] = useState(false)
  const [comments, SetComments] = useState()
  const roleID = useSelector(state => state.user.currentUser.RoleID)

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const fetchedComments = await ShowComment(DateComment) || []
      SetCommentsFlag(fetchedComments.length !== 0)
      SetComments(fetchedComments)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [DateComment])

  return (
    <Section className="section section-single">
      <Box className="box box-main">
        <div className="container-one">
          <div className="comment-block">
            <h2>Отзывы</h2>
            <div className="comment-list">
              {commentsFlag ? (
                comments
                  .map(comment => (
                    <div className="comment-element" key={comment.ID}>
                      <div className="comment-delete">
                        <h6>{DateFull}</h6>
                        <button className="button-delete" onClick={() => DelComment(roleID, comment.ID)}>&#10006;</button>
                      </div>
                      <p>{comment.text}
                      </p>
                    </div>))
              ) : (<div className="comment-element">
                <div className="comment-delete"></div>
                <p>Отзывов на {DateFull} нет</p>
              </div>)}
            </div>
          </div>
        </div>
      </Box>
    </Section>
  )
}

export default Comment
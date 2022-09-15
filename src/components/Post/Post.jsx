import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content, linkUrl }) {
  const [comments, setComments] = useState([
    'Post maneiro Diego !!',
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleAddNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentText() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  function handleNewCommentTextInvalid() {
    event.target.setCustomValidity('Campo obrigatório');
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    });

    setComments(commentWithoutDeleteOne);
  }

  const isDisabledCommentTextEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content} >{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a target="_blank" href={`https://github.com/${linkUrl}`}>{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleAddNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          value={newCommentText}
          onChange={handleNewCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentTextInvalid}
          required
        />

        <footer>
          <button disabled={isDisabledCommentTextEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

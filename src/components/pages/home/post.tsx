import React from 'react';
import styled from 'styled-components';
import Icon from '../../icons/icon';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    padding-top: 40px;
  }

  .blog-info {
    font-size: 0.7rem;
  }

  .blog-content {
    text-align: left;
    line-height: 25px;
    font-family: 'PT Serif', serif;
    color: #313131;
  }

  & > *,
  p {
    margin-bottom: 20px !important;
  }

  & > *:last-of-type {
    margin-bottom: 0px;
  }

  .blog-social-container {
    text-align: center;
    position: relative;
    width: 100%;

    .blog-social {
      display: inline-block;
      padding: 0 10px;
      background: #fff;
      z-index: 1;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        height: 1px;
        background: #dedede;
        display: block;
        top: 49%;
        z-index: -1;
      }

      a {
        margin-right: 10px;
        color: #313131;
      }

      a:last-of-type {
        margin: 0;
      }
    }
  }
`;

type PostProps = {
  author?: string;
  date?: number;
  title?: string;
  content?: string;
  img?: string;
};

const tit = 'LOREM IPSUM, DOLOR SIT AMET CONSECUTOR ADISICIPING.';

const cont =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat consequuntur explicabo, voluptatum sit ducimus similique et repudiandae iste harum consequatur itaque totam labore optio?';

const Post: React.FC<PostProps> = ({
  author = 'Maciek',
  date = '2020-07-04',
  title = tit,
  content = cont,
  img,
}) => {
  return (
    <StyledPost>
      <img alt="#" src="https://picsum.photos/380/240" />
      <h5>{title}</h5>
      <p className="blog-info">
        From: {author} | {date}
      </p>
      <p className="blog-content">{content}</p>
      <div className="blog-social-container">
        <nav className="blog-social">
          <a href="/">
            <Icon name="LogIn" />
          </a>
          <a href="/">
            <Icon name="LogIn" />
          </a>
          <a href="/">
            <Icon name="LogIn" />
          </a>
        </nav>
      </div>
    </StyledPost>
  );
};

export default Post;

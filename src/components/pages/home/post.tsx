import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const StyledPost = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  width: 40%;
  margin-right: 10%;

  img {
    padding-top: 40px;
  }

  .blog-info {
    font-size: 0.7rem;
  }

  .blog-content {
    text-align: left;
    line-height: 25px;
    font-family: var(--font-serif);
    color: var(--black);
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
      background-color: var(--white);
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
        position: relative;
        height: 16px;
        width: 16px;
        margin-right: 10px;
        color: #313131;

        span {
          position: absolute;
          display: inline-block;
          font-size: 9px;
          background-color: #313131;
          color: white;
          height: 20px;
          width: 60px;
          left: 50%;
          bottom: -45px;
          margin-left: -30px;
          line-height: 20px;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease-in-out;
        }

        &:hover {
          color: var(--light-gray);

          span {
            bottom: -35px;
            opacity: 1;
            visibility: visible;
          }
        }
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
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat consequuntur explicabo, voluptatum sit ducimus similique et repudiandae iste harum consequatur itaque totam labore optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat consequuntur explicabo, voluptatum sit ducimus similique et repudiandae iste harum consequatur itaque totam labore optio?';

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
            <FavoriteBorderIcon />
            <span>Like</span>
          </a>
          <a href="/">
            <FacebookIcon />
            <span>Facebook</span>
          </a>
          <a href="/">
            <TwitterIcon />
            <span>Twitter</span>
          </a>
          <a href="/">
            <GoogleIcon />
            <span>Google +</span>
          </a>
          <a href="/">
            <PinterestIcon />
            <span>Pinterest</span>
          </a>
        </nav>
      </div>
    </StyledPost>
  );
};

export default Post;

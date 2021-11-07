/* eslint-disable jsx-a11y/iframe-has-title */
import './style.scss';

const Video = ({ url, children }) => {
  return (
    <>
      <iframe
        src={url}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <h3>{children}</h3>
    </>
  );
};

export default Video;

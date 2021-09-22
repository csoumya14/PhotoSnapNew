import { Figure, Caption, Author, Line, LinkP, ArrowImage } from './PhotoCollection.css';
import arrow from '../../../assets/shared/desktop/arrow.svg';
const PictureCollection = ({ img }) => {
  return (
    <Figure>
      <Caption>{img.caption}</Caption>
      <Author>{img.author}</Author>
      <Line></Line>
      <LinkP>
        Read Story{' '}
        <span>
          {' '}
          <ArrowImage src={arrow} alt=""></ArrowImage>
        </span>
      </LinkP>
    </Figure>
  );
};

export default PictureCollection;

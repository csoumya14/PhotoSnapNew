import { Figure, Date, Caption, Author, Line, LinkP, ArrowImage } from './PhotoSectionFigure.css';
import arrow from '../../../assets/shared/desktop/arrow.svg';

const FigureCollection = ({ item }) => {
  return (
    <Figure>
      <Date>{item.date}</Date>
      <Caption>{item.caption}</Caption>
      <Author>{item.author}</Author>
      <Line></Line>
      <LinkP>
        Read Story{' '}
        <span>
          {' '}
          <ArrowImage className="arrow-image" src={arrow} alt="" />
        </span>
      </LinkP>
    </Figure>
  );
};

export default FigureCollection;

import { Figure, ImageItem, Caption, Text } from './MiddleSectionFigure.css';

const FigureIcon = ({ featureItem }) => {
  return (
    <Figure key={featureItem.id}>
      <ImageItem src={featureItem.featureImage} alt="" />
      <Caption>{featureItem.featureTitle}</Caption>
      <Text>{featureItem.featureText}</Text>
    </Figure>
  );
};
export default FigureIcon;

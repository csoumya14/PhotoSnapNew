import { LinkContainer, RouterLink, ListItems } from './BottomSectionLinks.css';

const Links = () => {
  const linkElements = [
    {
      id: '1',
      name: 'Home',
      linkTo: '/',
    },
    {
      id: '2',
      name: 'Stories',
      linkTo: '/stories',
    },
    {
      id: '3',
      name: 'Features',
      linkTo: '/features',
    },
    {
      id: '4',
      name: 'Pricing',
      linkTo: '/pricing',
    },
  ];

  return (
    <LinkContainer>
      {linkElements.map(linkElement => (
        <ListItems key={linkElement.id}>
          <RouterLink to={linkElement.linkTo}>{linkElement.name}</RouterLink>
        </ListItems>
      ))}
    </LinkContainer>
  );
};

export default Links;

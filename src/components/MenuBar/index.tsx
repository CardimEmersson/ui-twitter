import {
  Container,
  TopSide,
  // Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        {/* <Logo /> */}
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
        <Button>
          <span>twettar</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Emersson Cardim</strong>
          <span>@emersson_cardim</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export { MenuBar };

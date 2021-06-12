import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';
import { Feed } from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Emersson Cardim</h1>
        <h2>@emersson_cardim</h2>

        <p>
          Developer at <a href="/">@Iboss</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Eunápolis, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de junho de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

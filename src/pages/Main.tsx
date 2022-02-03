import Frontend from '../templates/frontend'
import CalculateButtton from '../atoms/CalculateButton';
import * as S  from './styles'
import LogoImage from '../assets/logo-image.svg'
import Form from '../organisms/Form';

function Main() {
  return (
  <Frontend>
  <S.Container>
    <div>
      <h1>Telzir Telecom</h1>
      <h6>Connecting everything</h6>
      <div>
        <Form/>
      </div>
    </div>


    <S.ColumnImage>
    <img src={LogoImage} alt="Logo Telzir" />
    </S.ColumnImage>
  </S.Container>
  </Frontend>
  );
}

export default Main;

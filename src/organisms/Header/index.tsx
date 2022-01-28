 import * as S  from './styles'

 import Logo from '../../molecules/Logo'
 import HomeButton from '../../atoms/HomeButton'

const Header = () => {
    return (
    <S.HeaderBox>
        <Logo/>
        <HomeButton/>
    </S.HeaderBox>
    );
}; 

export default Header;
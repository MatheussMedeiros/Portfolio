import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from'../img/Capturar.png'

import "../styles/components/sidebar.sass";



const sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Nome" />
      <p className="title">Desenvolverdor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Dowload currículo</a>
    </aside>
  )
}

export default sidebar

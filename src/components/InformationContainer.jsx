import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(62)9 9638-5981</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillMail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>matemade@gmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>Goiânia - Go</p>
        </div>
    </div>
  </section>
}

export default InformationContainer
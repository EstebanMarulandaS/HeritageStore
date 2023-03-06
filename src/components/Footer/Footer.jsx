import "../Footer/footerStyle.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillYoutube,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

export const FooterDesign = () => {
  return (
    <div className="mainFooterDiv">
      {/*left footer  */}
      <div className="footer-left">
        <div>
          <p>Manizales, Colombia {<IoLocation />}</p>
        </div>

        <div>
          <p>Phone contact: (+57) 316 328 4486{<AiFillPhone />}</p>
        </div>

        <div>
          <p>Email us: esteb_95@hotmail.com {<AiTwotoneMail />}</p>
        </div>
      </div>

      {/* right footer */}

      <div className="footer-right">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Enter your email"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name" className="form__label">
            Catch up with the latest collection!
          </label>
        </div>
        <div className="sendBtn">
            <button>send</button> 
        </div>
      </div>

      {/* follow us */}
      <h3 className="visitUs">Follow us</h3>

      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer"><span className="iconDiv">{<AiFillFacebook />}</span></a>
        </li>

      <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span className="iconDiv">{<AiFillTwitterCircle/>}</span></a>
        </li>
        
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span className="iconDiv">{<AiOutlineInstagram />}</span></a>
        </li>

        <li className="icon github">
          <span className="tooltip">Github</span>
          <a href="https://github.com/estebanmarulanda" target="_blank" rel="noreferrer"> <span className="iconDiv">
            <AiOutlineGithub />
          </span></a>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><span className="iconDiv">
            <AiFillYoutube />
          </span></a>
        </li>
      </ul>
      <div className="copyRight">
        © COPYRIGHT 2022 Esteban Marulanda Suarez. All rights reserved.
      </div>
    </div>
  );
};

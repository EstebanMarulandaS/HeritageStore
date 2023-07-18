import Button from "react-bootstrap/Button";
import "../ContactMe/contactStyle.css";
import { RiWhatsappLine } from "react-icons/ri";
export const ContactMe = () => {
  return (
    <div className="main_contact_div">
      <h4>Have any questions?</h4>

      <div className="img_div">
        <img
          src="https://i.pinimg.com/originals/50/a4/2c/50a42c0a969d3d5a6cc04e12ce1b4dd0.jpg"
          alt="Questions?"
        />
      </div>
      <div className="btn_div">
        <a href="https://api.whatsapp.com/send/?phone=573163284486&text&type=phone_number&app_absent=0">
          <Button variant="success">
            Contact us <RiWhatsappLine />
          </Button>
        </a>
      </div>
    </div>
  );
};

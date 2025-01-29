import { useDispatch } from "react-redux";
import s from "./contact.module.css";
import { RiContactsFill, RiPhoneFill } from "react-icons/ri";
import { deleteContact } from "../../redux/contactsOps";

const Contact = (item) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <li className={s.item}>
      <div className={s.text_box}>
        <div className={s.text}>
          <span>
            <RiContactsFill />
          </span>
          <p>{item.name}</p>
        </div>
        <div className={s.text}>
          <span>
            <RiPhoneFill />
          </span>
          <p>{item.number}</p>
        </div>
      </div>
      <button
        className={s.button}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
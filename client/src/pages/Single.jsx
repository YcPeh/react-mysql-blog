import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos sit
          aliquam nostrum consequatur quasi molestiae earum quam reiciendis,
          iure omnis ipsa obcaecati officiis nulla harum, provident dolor, vel
          dolorem laudantium quis.
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aspernatur id excepturi dignissimos porro blanditiis ipsa cumque
            enim temporibus animi omnis, voluptatem iure dolor placeat. Autem
            nam minus laboriosam laborum repellendus beatae consequatur quam
            itaque? Magnam accusantium sunt error quod. Molestiae vitae aperiam
            ad enim! Tempora, perferendis sunt nihil qui quos vitae modi eius
            voluptas recusandae tenetur voluptate! Maxime voluptates dolorem
            esse voluptate. Atque.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};
export default Single;

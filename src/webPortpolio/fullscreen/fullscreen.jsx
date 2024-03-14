import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./fullscreen.css";
import bg from "./bg.png";
import bg2 from "./bg2.png";

function Fullscreen(props) {
  const [scroll, setScroll] = useState("");
  const [menu, setMenu] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll("fs-sticky");
      } else {
        setScroll("");
        setMenu("");
      }
    });
  }, []);

  const menuHandle = () => {
    menu === "" ? setMenu("fs-active") : setMenu("");
  };
  return (
    <div className="fs-container">
      <header className={scroll}>
        <img src={bg2} alt="bg" className="fs-banner" />
        <a href="#" className="fs-logo">
          Brand.
        </a>
        <div className={`fs-toggle ${menu}`} onClick={menuHandle}>
          <span></span>
          <span></span>
        </div>
        <nav className={menu}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <Link to="/" className="fs-main">
                Main
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>Creative Fullscreen Sticky Header</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officiis
          amet magni accusamus dolorum, quidem eaque minus quia impedit beatae
          molestias libero optio, distinctio neque dignissimos consectetur nisi?
          Quos deserunt perferendis magni? Dolorum velit temporibus eum aliquid
          amet pariatur modi nisi voluptates consequuntur animi? Rem vero
          cupiditate asperiores ea iusto consectetur molestias eaque cum aliquam
          perferendis quisquam velit natus minus eos nobis possimus aspernatur
          dolor nihil ipsam, blanditiis tempora facere deserunt. Non officiis
          qui mollitia quisquam deserunt magnam eligendi ipsam atque! Adipisci
          similique, doloribus vitae modi neque
          <br /> <br />
          voluptates. Debitis, explicabo dolorem fugiat ea necessitatibus
          aliquam rerum aspernatur optio quisquam voluptas numquam consectetur
          possimus quo cumque cupiditate, at voluptate nesciunt. Officiis
          repellendus ab odio voluptas, optio animi, enim sed a veritatis porro
          sequi magnam consequuntur corrupti laborum vero in delectus cumque
          dolore facere exercitationem doloribus qui aperiam velit? Architecto
          itaque nostrum, blanditiis porro animi alias ut accusantium cumque in
          similique. Nulla, reprehenderit dicta. Explicabo alias libero eligendi
          quaerat, fugit expedita unde doloribus non, incidunt, nostrum saepe
          quidem voluptatibus laborum repellendus deleniti facilis a vel rem
          perferendis praesentium dolorum! Commodi nostrum reiciendis possimus
          impedit dolore veritatis aliquid nobis ratione porro, nesciunt id! Ea
          placeat quidem, aut consequuntur exercitationem quam nobis odio
          aliquam esse corrupti perferendis earum ratione
          <br />
          sapiente iusto rem ab maiores. Eligendi magni ipsam culpa amet et,
          repellendus esse aliquid dicta iure quibusdam dolor laborum minus vero
          voluptatem eaque non, officia tempore, sed neque? Dolorem hic
          blanditiis quia accusantium provident quasi laudantium consequuntur
          laboriosam itaque consectetur consequatur, quos minus beatae commodi
          rerum omnis facere obcaecati id ullam unde. Nostrum enim ea asperiores
          tempore, nobis ipsum? Similique delectus beatae, odit assumenda sunt
          error neque iure hic accusamus qui reprehenderit tempore blanditiis
          sit voluptate ea eos, corrupti porro aspernatur? Magni, pariatur
          veritatis voluptatem dicta laboriosam aut officiis ducimus sit
          <br />
          <br />
          consectetur amet? Exercitationem ex aperiam, sapiente rem repellat
          error possimus animi fugiat consectetur, provident veritatis quos nam
          iusto ipsam placeat quidem delectus. Nulla eligendi inventore officia,
          ipsum, in eaque, ad aliquam quibusdam dolores magni quaerat cumque
          mollitia optio eum nihil odio voluptatibus similique! Voluptate,
          labore blanditiis! Libero possimus doloremque exercitationem eius
          delectus natus quas, iure sed cupiditate nisi rerum beatae tenetur
          alias quasi illo saepe voluptates. Aspernatur ea rem praesentium
          soluta corrupti magni delectus similique earum recusandae iste.
          Incidunt eligendi enim autem optio sequi consequatur, voluptatum
          commodi itaque accusantium ratione corporis a, nihil dolorum illum ab
          aspernatur. Libero, facere non? Exercitationem, dolorem.
        </p>
      </section>
    </div>
  );
}

export default Fullscreen;

import React, { useState } from "react";
import "../scss/project.scss";
import apeach from "../images/apeach.PNG";
import a1 from "../images/a1.PNG";
import a2 from "../images/a2.PNG";
import a3 from "../images/a3.PNG";
import a4 from "../images/a4.PNG";

import b1 from "../images/b1.PNG";
import b2 from "../images/b2.PNG";
import b3 from "../images/b3.PNG";
import b4 from "../images/b4.PNG";

import s1 from "../images/s1.JPG";
import s2 from "../images/s2.JPG";
import s3 from "../images/s3.JPG";
import s4 from "../images/s4.JPG";
import s5 from "../images/s5.JPG";
import s6 from "../images/s6.JPG";

import d1 from "../images/d1.JPG";
import d2 from "../images/d2.JPG";
import d3 from "../images/d3.JPG";
import d4 from "../images/d4.JPG";
import d5 from "../images/d5.JPG";

import blog from "../images/blog.PNG";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

const _handleClick = () => {
  window.scrollTo(0, 4000);
};

const itemList = [
  {
    name: "어피치 프렌즈 스토어 쇼핑몰",
    dev_period: "2020.08.24 ~ 2020.08.30",
    explan:
      "HTML, CSS, JS을 익히고 React환경에서 처음으로 만든 스토어 쇼핑몰 입니다.",
    p1: "1. React v16.8 에 새로 도입된 React hook을 사용하여 제작",
    p2: "2. React-Router를 활용하여 페이지 전환",
    p3: "3. 반응형으로 제작",
    p4:
      "4. 기술 경험이 중점이라 구성 및 기능이 비슷한 페이지는 생략하였습니다.",
    p5: "",
    p6: "",
  },
  {
    name: "한장 사진 하루 기록 SNS",
    dev_period: "2020.12.15 ~ 2020.12.28",
    explan:
      "프론트엔드를 더 이해하기 위해 백엔드를 같이 개발한 SNS 웹 사이트 입니다.",

    p1: "1. Next.js 환경에서 React.js를 활용하여 개발하였습니다.",
    p2: "2. 개발환경 서버와 DB는 Node.js-Express.js 와 MySql 사용하였습니다.",
    p3:
      "3. 디자인은 Chakra ui 프레임워크와 styled-components 라이브러리를 사용하였습니다.",
    p4: "4. 상태관리는 Redux중 saga를 통해 관리하였습니다.",
    p5: "5. passport를 통해 로그인 및 회원가입을 구현하였습니다.",
    p6: "6. AWS를 통해 서버 배포 및 도메인 연결을 하였습니다.",
  },
  {
    name: "개인 블로그",
    dev_period: "2020.11.18 ~ 개발중",
    explan: "개인 블로그 제작중입니다.",
    p1: "1. React.js를 활용하여 개발 중입니다.",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
  },
  {
    name: "코로나 현상황 알림웹",
    dev_period: "2021.01.01 ~ 개발중",
    explan: "코로나 상황 알림웹 제작중입니다.",
    p1: "1. Next.js 환경에서 React.js를 활용하여 개발중입니다.",
    p2:
      "2. front와 backend 집중 개발을 위해 antd 디자인 프레임워크를 사용하였습니다.",
    p3: "3. DB는 현재 사용하지 않고 공공데이터 api만 사용중입니다. ",
    p4: "4. 서버는 express.js를 사용중입니다.",
    p5: "5. AWS를 통해 현재 서버 배포 및 도메인 연결 상태입니다.",
    p6: "",
  },
];

const Project = () => {
  const [hidden, setHidden] = useState(true);

  const [select, setSelect] = useState(0);

  const handleProject = (option) => {
    if (option === 1) {
      setSelect(0);
    } else if (option === 2) {
      setSelect(1);
    } else if (option === 3) {
      setSelect(2);
    } else {
      setSelect(3);
    }

    document.body.classList.add("hidden");
    setHidden(false);
  };

  const closeBtn = () => {
    setHidden(true);
    document.body.classList.remove("hidden");
  };

  const _gotogit = () => {};
  const _devpage = () => {
    if (select === 0) {
    }
  };

  return (
    <section className={hidden ? "project" : "project hidden"}>
      <h1 className="location_name">Project</h1>
      <div className="for_direction">
        <div className="project_box" onClick={() => handleProject(1)}>
          <div className="proj_img">
            <img src={apeach} alt="" />
          </div>
          <div className="proj_description">
            <h3>어피치 프렌즈 스토어 쇼핑몰</h3>
            <p>2020.08.24 ~ 2020.08.30</p>
          </div>
        </div>

        <div className="project_box" onClick={() => handleProject(2)}>
          <div className="proj_img">
            <img src={s5} alt="" />
          </div>
          <div className="proj_description">
            <h3>한장사진 하루기록 SNS</h3>
            <p>2020.12.15 ~ 2020.12.28</p>
          </div>
        </div>

        <div className="project_box" onClick={() => handleProject(3)}>
          <div className="proj_img">
            <img src={blog} alt="" />
          </div>
          <div className="proj_description">
            <h3>개인 블로그</h3>
            <p>상시 업데이트 중</p>
          </div>
        </div>

        <div className="project_box" onClick={() => handleProject(4)}>
          <div className="proj_img">
            <img src={d1} alt="" />
          </div>
          <div className="proj_description">
            <h3>코로나 현상황 알림웹</h3>
            <p>상시 업데이트 중</p>
          </div>
        </div>

        <div className={hidden ? "modal hidden" : "modal"}>
          <div className="close_btn_box">
            <button className="close_button" onClick={() => closeBtn()}>
              <ImCross />
            </button>
          </div>

          <div className="md_overlay"></div>
          <div className="md_content">
            <h1>{itemList[select].name}</h1>
            <section>
              <div className="modal_text">
                {itemList[select].explan}
                <ul className="p_box">
                  <li>{itemList[select].p1}</li>
                  <li>{itemList[select].p2}</li>
                  <li>{itemList[select].p3}</li>
                  <li>{itemList[select].p4}</li>
                  <li>{itemList[select].p5}</li>
                  <li>{itemList[select].p6}</li>
                </ul>
              </div>
              {(select === 0 && (
                <div className="project_img_box">
                  <div className="img_container">
                    <img src={a1} alt="" />
                    <img src={a2} alt="" />
                  </div>
                  <div className="img_container">
                    <img src={a3} alt="" />
                    <img src={a4} alt="" />
                  </div>
                </div>
              )) ||
                (select === 1 && (
                  <div className="project_img_box">
                    <div className="img_container">
                      <img src={s1} alt="" />
                      <img src={s2} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={s5} alt="" />
                      <img src={s4} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={s3} alt="" />
                      <img src={s6} alt="" />
                    </div>
                  </div>
                )) ||
                (select === 2 && (
                  <div className="project_img_box">
                    <div className="img_container">
                      <img src={b1} alt="" />
                      <img src={b2} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={b3} alt="" />
                      <img src={b4} alt="" />
                    </div>
                  </div>
                )) ||
                (select === 3 && (
                  <div className="project_img_box">
                    <div className="img_container">
                      <img src={d1} alt="" />
                      <img src={d2} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={d3} alt="" />
                      <img src={d4} alt="" />
                    </div>
                    <div className="img_container">
                      <img src={d5} alt="" />
                    </div>
                  </div>
                ))}
            </section>
            <div className="git_web">
              <button onClick={_gotogit}>
                <div>
                  <AiFillGithub />
                  <a
                    href={
                      (select === 0 &&
                        `https://github.com/seob717/apeach-friends`) ||
                      (select === 1 &&
                        `https://github.com/yoonsky/Dots_Your_Day`) ||
                      (select === 2 &&
                        `https://github.com/seob717/react-store`) ||
                      (select === 3 && `https://github.com/yoonsky/next-covid`)
                    }
                    target="_blank"
                  >
                    깃허브에서 코드 확인
                  </a>
                </div>
              </button>
              <button onClick={_devpage}>
                <div>
                  <AiFillChrome />
                  {(select === 0 && (
                    <a
                      href="https://kakaoapeach-25775.web.app/"
                      target="_blank"
                    >
                      개발 페이지로 이동
                    </a>
                  )) ||
                    (select === 1 && (
                      <a href="http://seob.kr/" target="_blank">
                        개발 페이지로 이동
                      </a>
                    )) ||
                    (select === 2 && (
                      <a href="https://seob-ef308.web.app/" target="_blank">
                        개발 페이지로 이동
                      </a>
                    )) ||
                    (select === 3 && (
                      <a href="http://coseob.shop/" target="_blank">
                        개발 페이지로 이동
                      </a>
                    ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="proj_btn" onClick={_handleClick}>
        <AiOutlineArrowDown />
      </button>
    </section>
  );
};

export default Project;

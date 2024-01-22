import React, { useState } from "react";
import Modal from "./Modal";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

const Career = () => {

const [modalOpen, setModalOpen] = useState(false) 

const openModal = () => {
  setModalOpen(true)
}
const closeModal = () => {
  setModalOpen(false)
}


const [modalOpen1, setModalOpen1] = useState(false) 

const openModal1 = () => {
  setModalOpen1(true)
}
const closeModal1 = () => {
  setModalOpen1(false)
}

const [modalOpen2, setModalOpen2] = useState(false) 

const openModal2 = () => {
  setModalOpen2(true)
}
const closeModal2 = () => {
  setModalOpen2(false)
}

const [modalOpen3, setModalOpen3] = useState(false) 

const openModal3 = () => {
  setModalOpen3(true)
}
const closeModal3 = () => {
  setModalOpen3(false)
}



  return (
        <div className="inner innerC">
            <section className="career content" id="career">

            <ul className="career">

                <li>
                    <img src="/assets/career01.png" alt="career" />                    
                    <br />
                    <button className="open01" onClick={openModal}>더보기</button>
                    <Modal open={modalOpen} close={closeModal} header="Modal heading"/>
                </li>

                <li>

                    <img src="/assets/career02.png" alt="career" />
                    <br />
                    <button className="open02" onClick={openModal1}>더보기</button>
                    <Modal1 open={modalOpen1} close={closeModal1} header="Modal heading"/>

                </li>

                <li>

                    <img src="/assets/career03.png" alt="career" />
                    <br />
                    <button className="open03" onClick={openModal2}>더보기</button>
                    <Modal2 open={modalOpen2} close={closeModal2} header="Modal heading"/>

                </li>

                <li>

                    <img src="/assets/career04.png" alt="career" />
                    <br />
                    <button className="open04" onClick={openModal3}>더보기</button>
                    <Modal3 open={modalOpen3} close={closeModal3} header="Modal heading"/>

                </li>

                </ul>

            </section>
          </div>
  );
};

export default Career ;


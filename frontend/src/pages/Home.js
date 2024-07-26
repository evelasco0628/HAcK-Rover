import './Home.css';
import Enrique from './Images/Enrique.png';
import Alex from './Images/Alex.png';
import Devin from './Images/Devin.png';
import Yuji from './Images/Yuji.png';
import homedozer from './Images/homedozer.png';



export default function Home() {
  return (
    <>
    <div className="title-div">
        <h1>Meet The Dozers!</h1>
    </div>
    <div className="Home">
      <div className="student-container">
        <div className="student-card">
          <img src={Enrique} alt="Enrique" className="student-image" />
          <div className="student-info">
            <h3>Enrique Velasco</h3>
            <p>Computer Science</p>
            <p>Los Angeles Pierce College</p>
          </div>
        </div>
        <div className="student-card">
          <img src={Alex} alt="Alexander" className="student-image" />
          <div className="student-info">
            <h3>Alexander Kano</h3>
            <p>Mechanical Engineering</p>
            <p>El Camino College</p>
          </div>
        </div>
        <div className="student-card">
          <img src={Devin} alt="Devin" className="student-image" />
          <div className="student-info">
            <h3>Devin VonTickner</h3>
            <p>Mechanical Engineering</p>
            <p>Solano College</p>
          </div>
        </div>
        <div className="student-card">
          <img src={Yuji} alt="Yuji" className="student-image" />
          <div className="student-info">
            <h3>Yuji Matsumura</h3>
            <p>Electrical Engineering</p>
            <p>Pasadena City College</p>
          </div>
        </div>
      </div>
    </div>
    <h2>We're ready to bulldoze through the competition!</h2>
    <div className="home-image-container">
        <img src={homedozer} alt="Team Dozers" className="home-dozer" />
      </div>
    </>
  );
}
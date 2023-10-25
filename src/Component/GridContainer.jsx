import '../assets/Styles/grid-Container.css'
import Header from './Header'
import Left2 from './Left2'
export default function GridContainer() {
    return (
        <div className="grid-Container">
            {/* <div className="header"></div> */}
            <Header />
            {/* <div className="left2"></div> */}
            <Left2 />
            <div className="right2"></div>
            <div className="left3"></div>
            <div className="right3"></div>
            <div className="left4"></div>
            <div className="right4"></div>
            <div className="people"></div>
            <div className="people1"></div>
            <div className="people2"></div>
            <div className="people3"></div>
            <div className="end1"></div>
            <div className="end2"></div>
            <div className="end3"></div>
            <div className="end4"></div>
            <div className="footer"></div>
        </div>
    )
}
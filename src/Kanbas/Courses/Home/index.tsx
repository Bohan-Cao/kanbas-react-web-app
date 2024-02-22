import ModuleList from "../Modules/List";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaFileExport, FaChartBar, FaRegBell } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { CiBullhorn } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

function Home() {
    return (
        <div className="d-flex">
            <div className="flex-fill">
                <ModuleList />
            </div>
            <div className="flex-grow-0 mx-4 d-none d-lg-block" style={{ width: '250px' }}>
                <h4 style={{ marginTop: '10px' }}>Course Status</h4>
                <div>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <LiaFileExportSolid style={{ marginRight: '5px' }} />
                        Import Existing Content
                    </button>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <FaFileExport style={{ marginRight: '5px' }} />
                        Import from Commons
                    </button>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <ImTarget style={{ marginRight: '5px' }} />
                        Choose Home Page
                    </button>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <FaChartBar style={{ marginRight: '5px' }} />
                        View Course Stream
                    </button>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <CiBullhorn style={{ marginRight: '5px' }} />
                        New Announcement
                    </button>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <IoStatsChart style={{ marginRight: '5px' }} />
                        New Analytics
                    </button>
                    <button style={{ width: '225px', height: '40px', textAlign: 'left' }}>
                        <FaRegBell style={{ marginRight: '5px' }} />
                        View Course Notifications
                    </button>
                    <br />
                    <br />
                    <h4>To Do</h4>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <PiNumberCircleFiveFill style={{ color: '#D41B2C', fontSize: '1.5em' }}/>
                        <a href="#" style={{ marginRight: '25px', color: '#D41B2C' }}>Grade A1 - ENV + HTML</a>
                        <RxCross2 />
                    </div>
                    <p className="ms-4" style={{ color: 'darkgray' }}>100 points · Sep 18 at 11:59pm</p>
                    <div className="d-flex justify-content-between">
                        <PiNumberCircleFiveFill style={{ color: '#D41B2C', fontSize: '1.5em' }}/>
                        <a href="#" style={{ marginRight: '25px', color: '#D41B2C' }}>Grade A2 - BOOTSTRAP</a>
                        <RxCross2 />
                    </div>
                    <p className="ms-4" style={{ color: 'darkgray' }}>100 points · Oct 2 at 11:59pm</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
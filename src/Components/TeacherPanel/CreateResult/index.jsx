import React from "react";
import SideBar from "../Sidebar";
import './createResult.css';
import StudentTable from "../../Utilities/StudentTable";

function CreateResult() {
    return (
        <>
            <div id="mainCR">
                <div id="sidebarCR">
                    <SideBar />
                </div>
                <div id="topCR">
                    <div id="tophead">
                        <h1>Result Creation</h1>
                    </div>

                    <div id="resultinfo">

                    </div>
                </div>
                <div id="bottomCR">
                    <div id="resultTable">
                        <StudentTable />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CreateResult;
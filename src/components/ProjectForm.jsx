import React, { useState } from "react";

const ProjectForm = ({ addProject }) => {
    const [projectName, setProjectName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addProject(projectName);
        setProjectName("");
    };

    return (
        <form onSubmit={handleSubmit} className="projectForm">
            <div className="projectForm-div">
                <label>
                    Project Name : 
                     <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </label>
                <button type="submit">Add Project</button>
            </div>
        </form>
    );
};

export default ProjectForm;

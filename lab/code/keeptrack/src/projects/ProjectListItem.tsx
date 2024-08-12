import React from "react";
import { Project } from "./Project";

interface ProjectListItemProps{
    project: Project
}

class ProjectListItem extends React.Component<ProjectListItemProps>{
    render(){
        return <div className="card">
                <img src={this.props.project.imageUrl} alt={this.props.project.name}/>
                <section className="section dark">
                    <h5 className="strong">
                        <strong>{this.props.project.name}</strong>  
                    </h5>
                    <p>{this.props.project.description}</p>
                    <p>Budget: {this.props.project.budget.toLocaleString()}</p>
                </section>
        </div>;
    }
}

export default ProjectListItem;
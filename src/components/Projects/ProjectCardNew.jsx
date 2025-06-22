import React from "react";
import "./Card.css";
import CustomModel from "../Model/CustomModel";

export default function ProjectCardNew({ image, category, title, description, type, project }) {
    const [open, setOpen] = React.useState(false);
    const handelModel = () => {
        console.log("try to open model");
        setOpen(true);
    };
    return (
        <>
            <div class="card1" style={{ cursor: "pointer" }} onClick={handelModel}>
                <img src={"../../assets/projects/" + image} alt="TicTacToe" />
                <div class="card-footer">
                <div class="card-subtitle">{category}</div>
                <div class="card-title">{title}</div>
                {/* <Button sx={{paddingRight:5}} onClick={handelModel}>view</Button> */}
                </div>
            </div>
            <CustomModel open={open} setOpen={setOpen} project={project} />
        </>
    );
}

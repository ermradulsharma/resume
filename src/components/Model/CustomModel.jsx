import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import { Chip, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.8)",
  opacity: 0,
  width: "95dvw",
  maxWidth: "600px",
  bgcolor: "rgba(255, 255, 255, 0.1)",
  boxShadow: 24,
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  p: 3,
  color: "#fff",
  outline: "none",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "all 0.5s ease",
};

const showStyle = {
  transform: "translate(-50%, -50%) scale(1)",
  opacity: 1,
};

export default function CustomModal({ open, setOpen, project = {} }) {
  const [showAnimation, setShowAnimation] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => setShowAnimation(true), 10);
    } else {
      setShowAnimation(false);
    }
  }, [open]);

  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(() => setOpen(false), 400);
  };

  const handleVisitSite = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  let imageSrc = "";
  try {
    imageSrc = require(`../../assets/projects/${project.image}`);
  } catch {
    imageSrc = "";
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ ...style, ...(showAnimation ? showStyle : {}) }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>
            {project.title || "Untitled Project"}
          </h2>
          <button
            onClick={handleClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <IoClose />
            <span style={{ fontSize: "0.8rem" }}>Close</span>
          </button>
        </div>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={project.title || "Project"}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "15px",
              marginBottom: "1rem",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            fontSize: "0.9rem",
            color: "#ccc",
          }}
        >
          <div>{project.category || "Uncategorized"}</div>
          {project.link && (
            <Button
              variant="outlined"
              size="small"
              onClick={handleVisitSite}
              style={{
                borderColor: "#fff",
                color: "#fff",
                fontSize: "0.75rem",
                textTransform: "none",
                padding: "2px 8px",
                borderRadius: "8px",
                backdropFilter: "blur(10px)",
              }}
            >
              Visit Site
            </Button>
          )}
        </div>
        <div>
          <h4 style={{ margin: "10px 0", fontSize: "1rem" }}>Description</h4>
          <p
            style={{
              color: "#eee",
              fontSize: "0.85rem",
              maxHeight: "85px",
              overflowY: "auto",
              paddingRight: "10px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255, 255, 255, 0.5) transparent",
            }}
          >
            {project.description || "No description provided."}
          </p>
        </div>
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <h4 style={{ margin: "10px 0", fontSize: "1rem" }}>Technologies Used</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {project.technologies.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "0.7rem",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
}

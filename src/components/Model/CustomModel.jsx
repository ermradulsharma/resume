import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoClose } from "react-icons/io5";
import { Chip } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.8)',
  opacity: 0,
  width: '90vw',
  maxWidth: '600px',
  bgcolor: 'rgba(255, 255, 255, 0.1)',
  boxShadow: 24,
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  p: 3,
  color: '#fff',
  outline: 'none',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.5s ease',
};

const showStyle = {
  transform: 'translate(-50%, -50%) scale(1)',
  opacity: 1,
};

export default function CustomModal({ open, setOpen, project }) {
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ ...style, ...(showAnimation ? showStyle : {}) }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{project.title}</h2>
          <button
            onClick={handleClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <IoClose /> <span style={{ fontSize: '0.9rem' }}>Close</span>
          </button>
        </div>

        <img
          src={"../../assets/" + project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '15px',
            marginBottom: '1rem',
            objectFit: 'cover',
          }}
        />

        <div style={{ marginBottom: '1rem', fontSize: '1rem', color: '#ccc' }}>
          {project.category}
        </div>

        <div>
          <h4 style={{ margin: '10px 0', fontSize: '1.2rem' }}>Description</h4>
          <p style={{ color: '#eee', fontSize: '0.95rem' }}>
            {project.description}
          </p>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ margin: '10px 0', fontSize: '1.2rem' }}>Technology Used</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {project.technologies.map((tech, idx) => (
              <Chip 
                key={idx}
                label={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

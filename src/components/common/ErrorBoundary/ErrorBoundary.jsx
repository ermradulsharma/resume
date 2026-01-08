import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BsExclamationTriangle } from 'react-icons/bs';
import BrandButton from '../BrandButton';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-fallback d-flex align-items-center justify-content-center vh-100">
                    <Container className="text-center p-5 rounded-4 shadow-lg glass-card">
                        <BsExclamationTriangle size={80} className="text-warning mb-4 animate-pulse" />
                        <h1 className="display-5 fw-bold mb-3">Something went wrong</h1>
                        <p className="lead text-secondary mb-4">
                            We've encountered an unexpected error. Don't worry, our team has been notified.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <BrandButton onClick={this.handleReset}>
                                Return Home
                            </BrandButton>
                            <BrandButton variant="brand-outline" onClick={() => window.location.reload()}>
                                Reload Page
                            </BrandButton>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-5 text-start small overflow-auto p-3 bg-dark text-light rounded" style={{ maxHeight: '200px' }}>
                                <pre>{this.state.error && this.state.error.toString()}</pre>
                            </div>
                        )}
                    </Container>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

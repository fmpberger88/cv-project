// __tests__/App.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../src/App';
import { beforeEach, describe, it, expect } from "vitest";
import AddressComponent from '../src/components/AddressComponent/AddressComponent.jsx';
import EducationComponent from '../src/components/EducationComponent/EducationComponent.jsx';
import ExperienceComponent from '../src/components/ExperienceComponent/ExperienceComponent.jsx';

describe('App Component', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
    });

    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('CV Generator')).toBeInTheDocument();
    });

    it('renders all input components', () => {
        render(<App />);
        expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Street Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Zipcode')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Country')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Birthdate')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    });

    it('saves address to localStorage on change', async () => {
        render(<App />);
        const firstNameInput = screen.getByPlaceholderText(/First Name/i);
        fireEvent.change(firstNameInput, { target: { value: 'John' } });

        await waitFor(() => {
            expect(localStorage.getItem('address')).toContain('John');
        });
    });



    it('renders and updates the PDF document', async () => {
        render(<App />);
        const updatePdfButton = screen.getByText('Update PDF');
        fireEvent.click(updatePdfButton);

        await waitFor(() => {
            expect(screen.getByText('Download now!')).toBeInTheDocument();
        });
    });
});

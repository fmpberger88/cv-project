import { useState } from 'react';
import {AdressForm, EducationContainer, EducationContainerTitle, InputContainers, UpdateButton} from "../../styles.jsx";
import { FaPlus, FaMinus } from 'react-icons/fa';

const ExperienceComponent = ({ experiences, setExperiences }) => {
    const [errors, setErrors] = useState({});

    const addExperience = () => {
        const newExperience = {
            id: Date.now(),
            jobTitle: '',
            workingPlace: '',
            toDos: '',
            startYear: '',
            endYear: '',
            isExpanded: false
        };
        setExperiences([...experiences, newExperience]);
    };

    const removeExperience = (id) => {
        setExperiences(experiences.filter(experience => experience.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setExperiences(experiences.map(experience =>
            experience.id === id ? { ...experience, [field]: value } : experience
        ));
        validateInput(id, field, value);
    };

    const validateInput = (id, field, value) => {
        let error = '';
        switch (field) {
            case 'jobTitle':
                if (!value) {
                    error = 'Job Title cannot be empty';
                }
                break;
            case 'workingPlace':
                if (!value) {
                    error = 'Working Place cannot be empty';
                }
                break;
            case 'toDos':
                if (!value) {
                    error = 'Job Description cannot be empty';
                }
                break;
            case 'startYear':
                if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(value)) {
                    error = 'Start year must be in MM/YYYY format';
                }
                break;
            case 'endYear':
                if (value && !/^(0[1-9]|1[0-2])\/\d{4}$/.test(value)) {
                    error = 'End year must be in MM/YYYY format';
                }
                break;
            default:
                break;
        }
        setErrors({ ...errors, [`${id}-${field}`]: error });
    };

    const toggleExpand = (id) => {
        setExperiences(experiences.map(experience =>
            experience.id === id ? { ...experience, isExpanded: !experience.isExpanded } : experience
        ));
    };

    return (
        <InputContainers>
            {experiences && experiences.map(experience => (
                <AdressForm key={experience.id}>
                    <EducationContainer>
                        <EducationContainerTitle onClick={() => toggleExpand(experience.id)}>
                            {experience.jobTitle || 'New Experience'}
                        </EducationContainerTitle>
                        {experience.isExpanded ? <FaMinus onClick={() => toggleExpand(experience.id)} /> : <FaPlus onClick={() => toggleExpand(experience.id)} />}
                    </EducationContainer>
                    {experience.isExpanded && (
                        <>
                            <input
                                type="text"
                                value={experience.jobTitle}
                                onChange={e => handleInputChange(experience.id, 'jobTitle', e.target.value)}
                                placeholder="Job Title"
                            />
                            {errors[`${experience.id}-jobTitle`] && <span>{errors[`${experience.id}-jobTitle`]}</span>}
                            <input
                                type="text"
                                value={experience.workingPlace}
                                onChange={e => handleInputChange(experience.id, 'workingPlace', e.target.value)}
                                placeholder="Working Place"
                            />
                            {errors[`${experience.id}-workingPlace`] && <span>{errors[`${experience.id}-workingPlace`]}</span>}
                            <input
                                type="text"
                                value={experience.toDos}
                                onChange={e => handleInputChange(experience.id, 'toDos', e.target.value)}
                                placeholder="Job Description"
                            />
                            {errors[`${experience.id}-toDos`] && <span>{errors[`${experience.id}-toDos`]}</span>}
                            <input
                                type="text"
                                value={experience.startYear}
                                onChange={e => handleInputChange(experience.id, 'startYear', e.target.value)}
                                placeholder="from: MM/YYYY"
                            />
                            {errors[`${experience.id}-startYear`] && <span>{errors[`${experience.id}-startYear`]}</span>}
                            <input
                                type="text"
                                value={experience.endYear}
                                onChange={e => handleInputChange(experience.id, 'endYear', e.target.value)}
                                placeholder="to: MM/YYYY"
                            />
                            {errors[`${experience.id}-endYear`] && <span>{errors[`${experience.id}-endYear`]}</span>}
                            <button onClick={(e) => {
                                e.stopPropagation();
                                removeExperience(experience.id);
                            }}>Remove</button>
                        </>
                    )}
                </AdressForm>
            ))}
            <UpdateButton onClick={addExperience}><span>+</span> Experience</UpdateButton>
        </InputContainers>
    );
};

export default ExperienceComponent;

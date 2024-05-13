import { useState } from 'react';
import { AdressForm, EducationContainer, EducationContainerTitle, InputContainers } from "../../styles.jsx";
import { FaPlus, FaMinus } from 'react-icons/fa';

const EducationComponent = ({ educations, setEducations }) => {
    const [errors, setErrors] = useState({});

    const addEducation = () => {
        const newEducation = {
            id: Date.now(),
            school: '',
            degree: '',
            fieldOfStudy: '',
            startYear: '',
            endYear: '',
            isExpanded: false
        };
        setEducations([...educations, newEducation]);
    };

    const removeEducation = (id) => {
        setEducations(educations.filter(education => education.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setEducations(educations.map(education =>
            education.id === id ? { ...education, [field]: value } : education
        ));
        validateInput(id, field, value);
    };

    const validateInput = (id, field, value) => {
        let error = '';
        switch (field) {
            case 'school':
                if (!value) {
                    error = 'School/University cannot be empty';
                }
                break;
            case 'degree':
                if (!value) {
                    error = 'Degree cannot be empty';
                }
                break;
            case 'fieldOfStudy':
                if (!value) {
                    error = 'Field of study cannot be empty';
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
        setEducations(educations.map(education =>
            education.id === id ? { ...education, isExpanded: !education.isExpanded } : education
        ));
    };

    const hasErrors = (id) => {
        return Object.keys(errors).some(key => key.startsWith(id) && errors[key]);
    };

    return (
        <InputContainers>
            {educations && educations.map((education) => (
                <AdressForm key={education.id}>
                    <EducationContainer>
                        <EducationContainerTitle onClick={() => toggleExpand(education.id)}>
                            {education.school || 'New Education'}
                        </EducationContainerTitle>
                        {education.isExpanded ? <FaMinus onClick={() => toggleExpand(education.id)} /> : <FaPlus onClick={() => toggleExpand(education.id)} />}
                    </EducationContainer>
                    {education.isExpanded && (
                        <>
                            <input
                                type="text"
                                value={education.school}
                                onChange={e => handleInputChange(education.id, 'school', e.target.value)}
                                placeholder="School/University"
                            />
                            {errors[`${education.id}-school`] && <span>{errors[`${education.id}-school`]}</span>}
                            <input
                                type="text"
                                value={education.degree}
                                onChange={e => handleInputChange(education.id, 'degree', e.target.value)}
                                placeholder="Degree"
                            />
                            {errors[`${education.id}-degree`] && <span>{errors[`${education.id}-degree`]}</span>}
                            <input
                                type="text"
                                value={education.fieldOfStudy}
                                onChange={e => handleInputChange(education.id, 'fieldOfStudy', e.target.value)}
                                placeholder="Subject"
                            />
                            {errors[`${education.id}-fieldOfStudy`] && <span>{errors[`${education.id}-fieldOfStudy`]}</span>}
                            <input
                                type="text"
                                value={education.startYear}
                                onChange={e => handleInputChange(education.id, 'startYear', e.target.value)}
                                placeholder="from: MM/YYYY"
                            />
                            {errors[`${education.id}-startYear`] && <span>{errors[`${education.id}-startYear`]}</span>}
                            <input
                                type="text"
                                value={education.endYear}
                                onChange={e => handleInputChange(education.id, 'endYear', e.target.value)}
                                placeholder="to: MM/YYYY"
                            />
                            {errors[`${education.id}-endYear`] && <span>{errors[`${education.id}-endYear`]}</span>}
                            <button onClick={(e) => {
                                e.stopPropagation();
                                removeEducation(education.id);
                            }}>Remove</button>
                        </>
                    )}
                </AdressForm>
            ))}
            <button onClick={addEducation}><span>+</span> Education</button>
        </InputContainers>
    );
};

export default EducationComponent;

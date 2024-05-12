import {AdressForm, EducationContainer, EducationContainerTitle, InputContainers} from "../../styles.jsx";
import { FaPlus, FaMinus } from 'react-icons/fa'

const EducationComponent = ({ educations, setEducations }) => {
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
            education.id === id ? {...education, [field]: value} : education
        ));
    };

    const toggleExpand = (id) => {
        setEducations(educations.map(education =>
        education.id === id ? {...education, isExpanded: !education.isExpanded} : education
        ))
    }

    return (
        <InputContainers>
            {educations && educations.map((education) => (
                <AdressForm key={education.id}>
                    <EducationContainer>
                        <EducationContainerTitle onClick={() => toggleExpand(education.id)}>{education.school}</EducationContainerTitle>
                        {education.isExpanded ? <FaMinus onClick={() => toggleExpand(education.id)}/> : <FaPlus onClick={() => toggleExpand(education.id)}/>}
                    </EducationContainer>
                    {education.isExpanded && (
                        <>
                            <input
                                type="text"
                                value={education.school}
                                onChange={e => handleInputChange(education.id, 'school', e.target.value)}
                                placeholder="Schule/Universität"
                            />
                            <input
                                type="text"
                                value={education.degree}
                                onChange={e => handleInputChange(education.id, 'degree', e.target.value)}
                                placeholder="Abschluss"
                            />
                            <input
                                type="text"
                                value={education.fieldOfStudy}
                                onChange={e => handleInputChange(education.id, 'fieldOfStudy', e.target.value)}
                                placeholder="Studienfach"
                            />
                            <input
                                type="text"
                                value={education.startYear}
                                onChange={e => handleInputChange(education.id, 'startYear', e.target.value)}
                                placeholder="Startjahr"
                            />
                            <input
                                type="text"
                                value={education.endYear}
                                onChange={e => handleInputChange(education.id, 'endYear', e.target.value)}
                                placeholder="Endjahr"
                            />
                            <button onClick={(e) => {
                                e.stopPropagation();
                                removeEducation(education.id)
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

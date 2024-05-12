import {AdressForm, EducationContainer, EducationContainerTitle, InputContainers} from "../../styles.jsx";
import { FaPlus, FaMinus } from 'react-icons/fa'

const ExperienceComponent = ({ experiences, setExperiences }) => {
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
        setExperiences([...experiences, newExperience])
    }

    const removeExperience = (id) => {
        setExperiences(experience.filter(experience => experience.id !== id));
    }

    const handleInputChage = (id, field, value) => {
        setExperiences(experiences.map(experience => experience.id === id ? {...experience, [field]: value } : experience));
    };

    const toggleExpand = (id) => {
        setExperiences(experiences.map(experience => experience.id === id ? {...experience, isExpanded: !experience.isExpanded } : experience));
    }

    return (
        <InputContainers>
            {experiences && experiences.map(experience => (
                <AdressForm key={experience.id}>
                    <EducationContainer>
                        <EducationContainerTitle onClick={() => toggleExpand(experience.id)}>{experience.jobTitle}</EducationContainerTitle>
                        {experience.isExpanded ? <FaMinus onClick={() => toggleExpand(experience.id)} /> : <FaPlus onClick={() => toggleExpand(experience.id)} />}
                    </EducationContainer>
                    {experience.isExpanded && (
                        <>
                            <input
                                type="text"
                                value={experience.jobTitle}
                                onChange={e => handleInputChage(experience.id, 'jobTitle', e.target.value)}
                                placeholder="Job Title"
                            />
                        </>
                    )}
                </AdressForm>
            ))};
            <button onClick={addExperience}><span>+</span> Experience</button>
        </InputContainers>
    )
}

export default ExperienceComponent;